import React, { Component, PropTypes } from 'react';
import PropTable from '@kadira/react-storybook-addon-info/dist/components/PropTable';
import Node from '@kadira/react-storybook-addon-info/dist/components/Node';
import { Pre } from '@kadira/react-storybook-addon-info/dist/components/markdown';
import renderInfoContent from './info-content';
import theme from './theme';

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
  }
};

export default class Section extends Component {
  renderSourceCode() {
    return (
      <div>
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
    const types = new Map();

    if (!this.props.children) {
      return null;
    }

    if (this.props.propTables) {
      this.props.propTables.forEach(function (type) {
        types.set(type, true);
      });
    }

    // Depth-first traverse and collect types.
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
      if (children.type && !types.has(children.type)) {
        types.set(children.type, true);
      }
    }

    // Extract components from children.
    extract(this.props.children);

    const typesList = Array.from(types.keys());
    typesList.sort(function (a, b) {
      return (a.displayName || a.name) > (b.displayName || b.name);
    });

    const propTables = typesList.map(function (type, idx) {
      return (
        <div key={idx}>
          <h5>&lt;{type.displayName || type.name}&gt; Component</h5>
          <PropTable type={type}/>
        </div>
      );
    });

    if (!propTables || propTables.length === 0) {
      return null;
    }

    return (
      <div>
        <h4 style={styles.subsectionTitle}>PropTypes</h4>
        {propTables}
      </div>
    );

    return;
  }

  render() {
    const { title, subtitle, children, info, showSource, showPropTables } = this.props;
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
            {showSource &&
              <div style={styles.subsection}>{this.renderSourceCode()}</div>
            }
            {showPropTables &&
              <div style={styles.subsection}>{this.renderPropTables()}</div>
            }
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
};
