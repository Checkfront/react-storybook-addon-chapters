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
  static title(title) {
    return (
      <h1 style={storyStyles.title}>{title}</h1>
    );
  }

  static subtitle(subtitle) {
    return (
      <p style={storyStyles.subtitle}>{subtitle}</p>
    );
  }

  static info(info) {
    return (
      <div style={storyStyles.info}>{info}</div>
    );
  }

  static main(header, chapters) {
    return (
      <div style={storyStyles.story}>
        <div style={storyStyles.header}>{header}</div>
        {chapters}
      </div>
    );
  }
}

export default class Story extends Component {
  render() {
    const { context, subtitle, title, info, chapters } = this.props;

    const header = (
      <div>
        {title && StoryDecorator.title(title)}
        {subtitle && StoryDecorator.subtitle(subtitle)}
        {info && StoryDecorator.subtitle(renderInfoContent(info))}
      </div>
    );

    const renderedChapters = chapters.map((chapter, index) => (
      <Chapter key={index} context={context} {...chapter} />
    ));

    return StoryDecorator.main(header, renderedChapters);
  }
}

Story.propTypes = propTypes;
Story.defaultProps = defaultProps;
