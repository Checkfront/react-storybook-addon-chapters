import React from 'react';
import Story, { StoryDecorator, storyStyles } from './components/Story';
import { ChapterDecorator, chapterStyles } from './components/Chapter';
import { SectionDecorator, sectionStyles } from './components/Section';
import { propTableStyles } from './components/PropTable';
import Theme from './theme';

export { StoryDecorator, ChapterDecorator, SectionDecorator };
export { storyStyles, chapterStyles, sectionStyles, propTableStyles };
export { Theme };

export default {
  addWithChapters(storyName, storyContent = {}) {
    return this.add(storyName, context => (
      <Story
        context={context}
        title={storyName}
        subtitle={storyContent.subtitle}
        info={storyContent.info}
        chapters={storyContent.chapters}
      />
    ));
  },
};
