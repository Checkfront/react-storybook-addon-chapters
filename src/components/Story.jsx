import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { baseFonts } from '@storybook/components';
import Chapter from './Chapter';
import renderInfoContent from '../utils/info-content';
import theme from '../theme';

const propTypes = {
  context: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  info: PropTypes.string,
  chapters: PropTypes.arrayOf(PropTypes.object),
  addonInfo: PropTypes.object,
  sectionOptions: PropTypes.object,
};

const defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  chapters: [],
};

export const storyStyles = {
  story: {
    ...baseFonts,
  },
  header: {
    marginBottom: 60,
  },
  title: {
    color: theme.grayDarkest,
    fontSize: 36,
    marginBottom: 10,
  },
  subtitle: {
    color: theme.grayDark,
    fontSize: 18,
    marginBottom: 20,
    marginTop: 0,
  },
  info: theme.infoStyle,
};

export class StoryDecorator {
  static title(title, useTheme) {
    return (
      <h1 style={useTheme ? storyStyles.title : {}} className="story-title">{title}</h1>
    );
  }

  static subtitle(subtitle, useTheme) {
    return (
      <span style={useTheme ? storyStyles.subtitle : {}} className="story-subtitle">{subtitle}</span>
    );
  }

  static info(info, useTheme) {
    return (
      <div style={useTheme ? storyStyles.info : {}} className="story-info">{info}</div>
    );
  }

  static main(header, chapters, useTheme) {
    return (
      <div style={useTheme ? storyStyles.story : {}} className="story">
        <div style={useTheme ? storyStyles.info : {}} className="story-header">{header}</div>
        <div className="story-chapters">
          {chapters}
        </div>
      </div>
    );
  }
}

export default class Story extends Component {
  render() {
    const {
      context, subtitle, title, info, chapters, addonInfo, sectionOptions,
    } = this.props;
    const { useTheme } = sectionOptions;

    const header = (
      <div>
        {title && StoryDecorator.title(title, useTheme)}
        {subtitle && StoryDecorator.subtitle(subtitle, useTheme)}
        {info && StoryDecorator.subtitle(renderInfoContent(info), useTheme)}
      </div>
    );

    const renderedChapters = chapters.map((chapter, i) => (
      <Chapter key={i} context={context} addonInfo={addonInfo} useTheme={useTheme} {...chapter} />
    ));

    return StoryDecorator.main(header, renderedChapters, useTheme);
  }
}

Story.displayName = 'Story';
Story.propTypes = propTypes;
Story.defaultProps = defaultProps;
