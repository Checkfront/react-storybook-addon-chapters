import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Node, Pre } from '@storybook/addon-info';
import PropTable from './PropTable';
import renderInfoContent from '../utils/info-content';
import theme from '../theme';

const propTypes = {
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
  addonInfo: PropTypes.object,
  useTheme: PropTypes.bool,
};

const defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  showSource: true,
  allowSourceToggling: true,
  showPropTables: false,
  allowPropTablesToggling: true,
};

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

export class SectionDecorator {
  static main(header, component, additional, useTheme) {
    return (
      <div style={useTheme ? sectionStyles.container : {}} className="section-container">
        {header}
        {component}
        {additional}
      </div>
    );
  }

  static header(header, useTheme) {
    return (
      <div style={useTheme ? sectionStyles.header : {}} className="section-header">
        <div>{header}</div>
      </div>
    );
  }

  static title(title, useTheme) {
    return (
      <h3 style={useTheme ? sectionStyles.title : {}} className="section-title">{title}</h3>
    );
  }

  static subtitle(subtitle, useTheme) {
    return (
      <p style={useTheme ? sectionStyles.subtitle : {}} className="section-subtitle">{subtitle}</p>
    );
  }

  static component(component, useTheme, decorator) {
    const decoratedComponent = decorator ? decorator(() => component) : component;

    return (
      <div
        style={useTheme ? sectionStyles.componentContainer : {}}
        className="section-component-container"
      >
        {decoratedComponent}
      </div>
    );
  }

  static additional(additional) {
    return (
      <div>
        <div>{additional}</div>
      </div>
    );
  }

  static sourceCode(sourceCode, useTheme) {
    return (
      <div style={useTheme ? sectionStyles.subsection : {}} className="section-subsection">
        <h4 style={useTheme ? sectionStyles.subsection.title : {}} className="section-subsection-title">Source</h4>
        <Pre>
          {sourceCode}
        </Pre>
      </div>
    );
  }

  static propTables(propTables, useTheme) {
    return (
      <div style={useTheme ? sectionStyles.subsection : {}} className="section-subsection">
        <h4 style={useTheme ? sectionStyles.subsection.title : {}} className="section-subsection-title">PropTypes</h4>
        {propTables}
      </div>
    );
  }

  static buttons(buttons, useTheme) {
    return (
      <div style={useTheme ? sectionStyles.buttonContainer : {}} className="section-button-container">{buttons}</div>
    );
  }

  static info(infoContent, useTheme) {
    return (
      <div style={useTheme ? sectionStyles.subsection : {}} className="section-subsection">
        <div style={useTheme ? sectionStyles.info : {}} className="section-info">
          {infoContent}
        </div>
      </div>
    );
  }
}


export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSourceShown: props.showSource,
      isPropsTableShown: props.showPropTables,
    };
  }

  renderSourceCode(useTheme) {
    const addonInfo = this.props.addonInfo;

    const sourceCode = React.Children.map(this.props.children, (root, idx) => (
      <Node key={idx} depth={0} node={root} {...addonInfo} {...this.props} />
    ));

    return SectionDecorator.sourceCode(sourceCode, useTheme);
  }

  renderPropTables(useTheme) {
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
          <PropTable component={component} useTheme={useTheme} />
        </div>
      );
    });

    if (!propTables || propTables.length === 0) {
      return null;
    }

    return SectionDecorator.propTables(propTables, useTheme);
  }

  render() {
    const { title, subtitle, children, info, showSource, showPropTables, useTheme, decorator } = this.props;
    const showButtonsRow = this.props.allowPropTablesToggling || this.props.allowSourceToggling;

    const header = (
      <div>
        {title && SectionDecorator.title(title, useTheme)}
        {subtitle && SectionDecorator.subtitle(subtitle, useTheme)}
      </div>
    );

    const buttons = [
      this.props.allowPropTablesToggling &&
      <button
        key="allowPropTablesToggling" onClick={() => {
          this.setState({
            isPropsTableShown: !this.state.isPropsTableShown,
          });
        }}
        style={
            useTheme
            ? this.state.isPropsTableShown
              ? sectionStyles['button-active']
              : sectionStyles.button
            : this.state.isPropsTableShown
              ? sectionStyles['button-active']
              : sectionStyles.button
            }
        className={this.state.isPropsTableShown ? 'button-active' : 'button'}
      >
        {this.state.isPropsTableShown ? 'Hide' : 'Show'} Props Table
        </button>,

      this.props.allowSourceToggling &&
      <button
        key="allowSourceToggling" onClick={() => {
          this.setState({
            isSourceShown: !this.state.isSourceShown,
          });
        }}
        style={
          useTheme
            ? this.state.isSourceShown
              ? sectionStyles['button-active']
              : sectionStyles.button
            : this.state.isSourceShown
              ? sectionStyles['button-active']
              : sectionStyles.button
            }
        className={this.state.isSourceShown ? 'button-active' : 'button'}
      >
        {this.state.isSourceShown ? 'Hide' : 'Show'} Source
        </button>,
    ];

    const additional = (
      <div>
        {info && SectionDecorator.info(renderInfoContent(info), useTheme)}
        {showButtonsRow && SectionDecorator.buttons(buttons, useTheme)}
        {this.state.isSourceShown && this.renderSourceCode(useTheme)}
        {this.state.isPropsTableShown && this.renderPropTables(useTheme)}
      </div>
    );

    return SectionDecorator.main(
      SectionDecorator.header(header),
      SectionDecorator.component(children, useTheme, decorator),
      SectionDecorator.additional(additional),
      useTheme
    );
  }
}

Section.displayName = 'Section';
Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
