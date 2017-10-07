import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import renderInfoContent from '../utils/info-content';
import theme from '../theme';

export const chapterStyles = {
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

    const header = (
      <div>
        {title && ChapterDecorator.title(title)}
        {subtitle && ChapterDecorator.subtitle(subtitle)}
        {(subtitle || info) && ChapterDecorator.ruler()}
        {info && ChapterDecorator.subtitle(renderInfoContent(info))}
      </div>
    );

    const renderedSections = sections.map((section, index) => {
      const options = section.options || {};
      const sectionProps = {
        context,
        title: section.title,
        subtitle: section.subtitle,
        info: section.info,
        ...options,
      };
      return (
        <Section key={index} {...sectionProps}>
          {section.sectionFn(context)}
        </Section>
      );
    });

    return ChapterDecorator.main(header, renderedSections);
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

export class ChapterDecorator {
  static title(title) {
    return (
      <h3 style={chapterStyles.title}>{title}</h3>
    );
  }

  static subtitle(subtitle) {
    return (
      <p style={chapterStyles.subtitle}>{subtitle}</p>
    );
  }

  static info(info) {
    return (
      <div style={chapterStyles.info}>{info}</div>
    );
  }

  static ruler() {
    return (
      <hr style={chapterStyles.hr}/>
    );
  }

  static main(header, sections) {
    return (
      <div>
        <div style={chapterStyles.header}>{header}</div>
        {sections}
      </div>
    );
  };
}
