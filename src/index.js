import React from 'react';
import Story from './components/Story';

export default {
  addWithChapters(storyName, storyContent = {}) {
    return this.add(storyName, (context) => (
      <Story context={context}
        title={storyName}
        subtitle={storyContent.subtitle}
        info={storyContent.info}
        chapters={storyContent.chapters}
      />
    ));
  }
};

// TODO: Fix this.
export function setDefaults(newDefaults) {
  return Object.assign(defaultOptions, newDefaults);
};
