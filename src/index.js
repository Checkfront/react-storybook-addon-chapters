import React from 'react';
import Story, { StoryDecorator, storyStyles } from './components/Story';
import { ChapterDecorator, chapterStyles } from './components/Chapter';
import { SectionDecorator, sectionStyles } from './components/Section';
import { propTableStyles } from './components/PropTable';
import Theme from './theme';

export { StoryDecorator, ChapterDecorator, SectionDecorator };
export { storyStyles, chapterStyles, sectionStyles, propTableStyles };
export { Theme };

const defaultProps = {
  addonInfo: {
    inline: false,
    header: true,
    source: true,
    propTables: [],
    maxPropsIntoLine: 3,
    maxPropObjectKeys: 3,
    maxPropArrayLength: 3,
    maxPropStringLength: 50,
  },
  sectionOptions: {
    showSource: true,
    allowSourceToggling: true,
    showPropTables: false,
    allowPropTablesToggling: true,
  },
};

export default {
  addWithChapters(storyName, storyContent = {}) {
    return this.add(storyName, (context) => {
      (storyContent.chapters || []).forEach((chapter) => {
        (chapter.sections || []).forEach((section) => {
          Object.assign(section, {
            options: Object.assign({}, defaultProps.sectionOptions, section.options),
          });
        });
      });

      return (
        <Story
          context={context}
          title={storyName}
          subtitle={storyContent.subtitle}
          info={storyContent.info}
          chapters={storyContent.chapters}
          {...defaultProps}
        />
      );
    });
  },
};

export function setDefaults(newDefaults) {
  Object.assign(defaultProps.addonInfo, newDefaults.addonInfo);
  Object.assign(defaultProps.sectionOptions, newDefaults.sectionOptions);
  return defaultProps;
}
