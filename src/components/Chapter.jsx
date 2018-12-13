import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import renderInfoContent from '../utils/info-content';
import theme from '../theme';

const propTypes = {
  context: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  info: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.object),
  addonInfo: PropTypes.object,
  useTheme: PropTypes.bool,
};

const defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  sections: [],
};

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

export class ChapterDecorator {
  static title(title, useTheme) {
    return (
      <h3 style={useTheme ? chapterStyles.title : {}} className="chapter-h3">{title}</h3>
    );
  }

  static subtitle(subtitle, useTheme) {
    return (
      <span style={useTheme ? chapterStyles.subTitle : {}} className="chapter-subtitle">{subtitle}</span>
    );
  }

  static info(info, useTheme) {
    return (
      <div style={useTheme ? chapterStyles.info : {}} className="chapter-info">{info}</div>
    );
  }

  static ruler(useTheme) {
    return (
      <hr style={useTheme ? chapterStyles.hr : {}} className="chapter-hr" />
    );
  }

  static main(header, sections, useTheme) {
    return (
      <div style={useTheme ? chapterStyles.chapter : {}} className="chapter">
        <div style={useTheme ? chapterStyles.header : {}} className="chapter-header">{header}</div>
        <div className="chapter-sections">
          {sections}
        </div>
      </div>
    );
  }
}

export default class Chapter extends Component {
  render() {
    const { context, title, subtitle, info, sections, addonInfo, useTheme } = this.props;

    const header = (
      <div>
        {title && ChapterDecorator.title(title, useTheme)}
        {subtitle && ChapterDecorator.subtitle(subtitle, useTheme)}
        {(subtitle || info) && ChapterDecorator.ruler(useTheme)}
        {info && ChapterDecorator.subtitle(renderInfoContent(info), useTheme)}
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
        addonInfo,
      };
      return (
        <Section key={index} {...sectionProps} useTheme={useTheme}>
          {section.sectionFn(context)}
        </Section>
      );
    });

    return ChapterDecorator.main(header, renderedSections, useTheme);
  }
}

Chapter.displayName = 'Chapter';
Chapter.propTypes = propTypes;
Chapter.defaultProps = defaultProps;
