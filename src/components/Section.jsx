import React, { Component, PropTypes } from 'react';
import Node from '@kadira/react-storybook-addon-info/dist/components/Node';
import { Pre } from '@kadira/react-storybook-addon-info/dist/components/markdown';
import PropTable from './PropTable';
import renderInfoContent from '../utils/info-content';
import theme from '../theme';

export const sectionButtonStyles = {
  backgroundColor: 'transparent',
  border: `1px solid ${theme.gray}`,
  borderRadius: 3,
  color: theme.grayDark,
  cursor: 'pointer',
  float: 'right',
  marginLeft: 5,
  padding: '5px 10px',
};

export const sectionStyles = {
  container: {
    marginBottom: 100,
  },
  header: {
    marginBottom: 60,
  },
  title: {
    color: theme.grayDarkest,
    fontSize: 18,
    marginBottom: 10,
  },
  subtitle: {
    color: theme.grayDark,
    fontSize: 14,
    marginBottom: 20,
    marginTop: 0,
  },
  buttonContainer: {
    height: 15,
  },
  button: sectionButtonStyles,
  'button-active': {
    ...sectionButtonStyles,
    backgroundColor: theme.grayLight,
    borderColor: theme.grayLight,
    color: theme.grayDark,
  },
  info: theme.infoStyle,
  componentContainer: {
    marginBottom: 60,
  },
  subsection: {
    marginBottom: 60,
  },
  subsectionTitle: {
    color: theme.grayDark,
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
};

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSourceShown: props.showSource,
      isPropsTableShown: props.showPropTables,
    };
  }

  renderSourceCode() {
    const sourceCode = React.Children.map(this.props.children, (root, idx) => (
      <Node key={idx} depth={0} node={root} />
    ));

    return SectionDecorator.sourceCode(sourceCode);
  }

  renderPropTables() {
    const components = new Map();

    if (!this.props.children) {
      return null;
    }

    if (this.props.propTables) {
      this.props.propTables.forEach(function (component) {
        components.set(component, true);
      });
    }

    // Depth-first traverse and collect components.
    function extract(children) {
      if (!children) {
        return;
      }
      if (Array.isArray(children)) {
        children.forEach(extract);
        return;
      }
      if (children.props && children.props.children) {
        extract(children.props.children);
      }
      if (typeof children === 'string' || typeof children.type === 'string') {
        return;
      }
      if (children.type && !components.has(children.type)) {
        components.set(children.type, true);
      }
    }

    // Extract components from children.
    extract(this.props.children);

    const componentsList = Array.from(components.keys());
    componentsList.sort(function (a, b) {
      return (a.displayName || a.name) > (b.displayName || b.name);
    });

    const propTables = componentsList.map(function (component, idx) {
      return (
        <div key={idx}>
          <h5>&lt;{component.displayName || component.name}&gt; Component</h5>
          <PropTable component={component} />
        </div>
      );
    });

    if (!propTables || propTables.length === 0) {
      return null;
    }

    return SectionDecorator.propTables(propTables);
  }

  render() {
    const { title, subtitle, children, info, showSource, showPropTables } = this.props;
    const showButtonsRow = this.props.allowPropTablesToggling || this.props.allowSourceToggling;

    const header = (
      <div>
        {title && SectionDecorator.title(title)}
        {subtitle && SectionDecorator.subtitle(subtitle)}
      </div>
    );

    const buttons = [
      this.props.allowPropTablesToggling &&
        <button key="allowPropTablesToggling" onClick={() => {
          this.setState({
            isPropsTableShown: !this.state.isPropsTableShown,
          });
        }} style={this.state.isPropsTableShown ? sectionStyles['button-active'] : sectionStyles.button }>
          {this.state.isPropsTableShown ? 'Hide' : 'Show'} Props Table
        </button>,

      this.props.allowSourceToggling &&
        <button key="allowSourceToggling" onClick={() => {
          this.setState({
            isSourceShown: !this.state.isSourceShown,
          });
        }} style={this.state.isSourceShown ? sectionStyles['button-active'] : sectionStyles.button }>
          {this.state.isSourceShown ? 'Hide' : 'Show'} Source
        </button>
    ];

    const additional = (
      <div>
        {info && SectionDecorator.info(renderInfoContent(info))}
        {showButtonsRow && SectionDecorator.buttons(buttons)}
        {this.state.isSourceShown && this.renderSourceCode()}
        {this.state.isPropsTableShown && this.renderPropTables()}
      </div>
    );

    return SectionDecorator.main(
      SectionDecorator.header(header),
      SectionDecorator.component(children),
      SectionDecorator.additional(additional)
    );
  }
}

Section.displayName = 'Section';
Section.propTypes = {
  context: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  info: PropTypes.string,
  showSource: PropTypes.bool,
  showPropTables: PropTypes.bool,
  propTables: PropTypes.arrayOf(PropTypes.func),
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};
Section.defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  showSource: true,
  allowSourceToggling: true,
  showPropTables: false,
  allowPropTablesToggling: true,
};

export class SectionDecorator {
  static main(header, component, additional) {
    return (
      <div style={sectionStyles.container}>
        {header}
        {component}
        {additional}
      </div>
    );
  };

  static header(header) {
    return (
      <div style={sectionStyles.header}>
        <div>{header}</div>
      </div>
    );
  };

  static title(title) {
    return (
      <h3 style={sectionStyles.title}>{title}</h3>
    );
  }

  static subtitle(subtitle) {
    return (
      <p style={sectionStyles.subtitle}>{subtitle}</p>
    );
  }

  static component(component) {
    return (
      <div style={sectionStyles.componentContainer}>
        {component}
      </div>
    );
  };

  static additional(additional) {
    return (
      <div>
        <div>{additional}</div>
      </div>
    );
  };

  static sourceCode(sourceCode) {
    return (
      <div style={sectionStyles.subsection}>
        <h4 style={sectionStyles.subsectionTitle}>Source</h4>
        <Pre>
          {sourceCode}
        </Pre>
      </div>
    );
  };

  static propTables(propTables) {
    return (
      <div style={sectionStyles.subsection}>
        <h4 style={sectionStyles.subsectionTitle}>PropTypes</h4>
        {propTables}
      </div>
    );
  };

  static buttons(buttons) {
    return (
      <div style={sectionStyles.buttonContainer}>{buttons}</div>
    )
  };

  static info(infoContent) {
    return (
      <div style={sectionStyles.subsection}>
        <div style={sectionStyles.info}>
          {infoContent}
        </div>
      </div>
    );
  };
}
