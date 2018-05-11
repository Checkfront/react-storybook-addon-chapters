import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chapter from './Chapter';
import renderInfoContent from '../utils/info-content';

const propTypes = {
  context: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  info: PropTypes.string,
  chapters: PropTypes.arrayOf(PropTypes.object),
  addonInfo: PropTypes.object,
};

const defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  chapters: [],
};

export class StoryDecorator {
  static title(title) {
    return (
      <h1 className="story-title">{title}</h1>
    );
  }

  static subtitle(subtitle) {
    return (
      <span className="story-subtitle">{subtitle}</span>
    );
  }

  static info(info) {
    return (
      <div className="story-info">{info}</div>
    );
  }

  static main(header, chapters) {
    return (
      <div className="story">
        <div className="story-header">{header}</div>
        {chapters}
      </div>
    );
  }
}

export default class Story extends Component {
  render() {
    const { context, subtitle, title, info, chapters, addonInfo } = this.props;

    const header = (
      <div>
        {title && StoryDecorator.title(title)}
        {subtitle && StoryDecorator.subtitle(subtitle)}
        {info && StoryDecorator.subtitle(renderInfoContent(info))}
      </div>
    );

    const renderedChapters = chapters.map((chapter, index) => (
      <Chapter key={index} context={context} addonInfo={addonInfo} {...chapter} />
    ));

    return StoryDecorator.main(header, renderedChapters);
  }
}

Story.displayName = 'Story';
Story.propTypes = propTypes;
Story.defaultProps = defaultProps;
