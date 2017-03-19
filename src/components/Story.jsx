import React, { Component, PropTypes } from 'react';
import { baseFonts } from '@kadira/react-storybook-addon-info/dist/components/theme';
import Chapter from './Chapter';
import renderInfoContent from '../utils/info-content';
import theme from '../theme';

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

Story.displayName = 'Story';
Story.propTypes = {
  context: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  info: PropTypes.string,
  chapters: PropTypes.arrayOf(PropTypes.object),
};
Story.defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  chapters: [],
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
  };
}
