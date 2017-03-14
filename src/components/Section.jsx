import React, { Component, PropTypes } from 'react';
import Node from '@kadira/react-storybook-addon-info/dist/components/Node';
import { Pre } from '@kadira/react-storybook-addon-info/dist/components/markdown';
import PropTable from './PropTable';
import renderInfoContent from '../utils/info-content';
import theme from '../theme';

const buttonStyles = {
  backgroundColor: 'transparent',
  border: `1px solid ${theme.gray}`,
  borderRadius: 3,
  color: theme.grayDark,
  cursor: 'pointer',
  float: 'right',
  marginLeft: 5,
  padding: '5px 10px',
};

const styles = {
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
  button: buttonStyles,
  'button-active': {
    ...buttonStyles,
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
    return (
      <div style={styles.subsection}>
        <h4 style={styles.subsectionTitle}>Source</h4>
        <Pre>
          {React.Children.map(this.props.children, (root, idx) => (
            <Node key={idx} depth={0} node={root} />
          ))}
        </Pre>
      </div>
    );
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

    return (
      <div style={styles.subsection}>
        <h4 style={styles.subsectionTitle}>PropTypes</h4>
        {propTables}
      </div>
    );

    return;
  }

  render() {
    const { title, subtitle, children, info, showSource, showPropTables } = this.props;
    const showButtonsRow = this.props.allowPropTablesToggling || this.props.allowSourceToggling;
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            {title && <h3 style={styles.title}>{title}</h3>}
            {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
          </div>
        </div>
        <div style={styles.componentContainer}>
          {children}
        </div>
        <div>
          <div>
            {info &&
              <div style={styles.subsection}>
                <div style={styles.info}>
                  {renderInfoContent(info)}
                </div>
              </div>
            }
            {showButtonsRow &&
              <div style={styles.buttonContainer}>
                {this.props.allowPropTablesToggling &&
                  <button onClick={() => {
                    this.setState({
                      isPropsTableShown: !this.state.isPropsTableShown,
                    });
                  }} style={this.state.isPropsTableShown ? styles['button-active'] : styles.button }>
                    {this.state.isPropsTableShown ? 'Hide' : 'Show'} Props Table
                  </button>
                }
                {this.props.allowSourceToggling &&
                  <button onClick={() => {
                    this.setState({
                      isSourceShown: !this.state.isSourceShown,
                    });
                  }} style={this.state.isSourceShown ? styles['button-active'] : styles.button }>
                    {this.state.isSourceShown ? 'Hide' : 'Show'} Source
                  </button>
                }
              </div>
            }
            {this.state.isSourceShown && this.renderSourceCode()}
            {this.state.isPropsTableShown && this.renderPropTables()}
          </div>
        </div>
      </div>
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
