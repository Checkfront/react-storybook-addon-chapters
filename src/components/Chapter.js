import React, { Component, PropTypes } from 'react';
import Section from './Section';
import renderInfoContent from './info-content';
import theme from './theme';

const styles = {
  header: {
    marginBottom: 60,
  },
  hr: {
    border: 'none',
    backgroundColor: theme.border,
    height: 1,
  },
  title: {
    color: theme.grayDarkest,
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    color: theme.grayDark,
    fontSize: 16,
    marginBottom: 20,
    marginTop: 0,
  },
  info: theme.infoStyle,
};

export default class Chapter extends Component {
  render() {
    const { context, title, subtitle, info, sections } = this.props;
    return (
      <div>
        <div style={styles.header}>
          {title && <h3 style={styles.title}>{title}</h3>}
          {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
          {(subtitle || info) && <hr style={styles.hr}/>}
          {info && <div style={styles.info}>{renderInfoContent(info)}</div>}
        </div>
        {sections.map((section, index) => {
          const options = section.options;
          const sectionProps = {
            context,
            title: section.title,
            subtitle: section.subtitle,
            info: section.info,
            showSource: Boolean(options.showSource),
            showPropTables: Boolean(options.showPropTables),
            propTables: options.propTables,
          };
          return (
            <Section key={index} {...sectionProps}>
              {section.sectionFn(context)}
            </Section>
          );
        })}
      </div>
    );
  }
}

Chapter.displayName = 'Chapter';
Chapter.propTypes = {
  context: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  info: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.object),
};
Chapter.defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  sections: [],
};
