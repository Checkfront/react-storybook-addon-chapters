import React from 'react';
import Story from './components/Story';
import Theme from './theme';

export * from './components/Chapter';
export * from './components/PropTable';
export * from './components/Section';
export * from './components/Story';
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
