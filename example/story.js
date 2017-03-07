import React from 'react';
import Button from './Button';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Addon Chapters')
  .addWithChapters(
    'Story Name',
    {
      subtitle: 'Story Subtitle',
      info: `
        **Story Info.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
      chapters: [
        {
          title: 'Chapter 1 Title',
          subtitle: 'Chapter 1 Subtitle',
          info: `
            **Chapter Info.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          `,
          sections: [
            {
              title: 'Section 1.1 Title',
              subtitle: 'Section 1.1 Subtitle',
              info: `
                **Section Info.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              `,
              sectionFn: () => (
                <div>
                  <Button label="Section 1 Button" onClick={action('onClick')}/>
                </div>
              ),
              options: { showSource: true, showPropTables: true },
            },
            {
              title: 'Section 1.2 Title',
              subtitle: 'Section 1.2 Subtitle',
              sectionFn: () => (<Button label="The Button" onClick={action('onClick')}/>),
              options: { showSource: true, showPropTables: true },
            },
          ],
        },
        {
          title: 'Chapter 2 Title',
          info: `
            **Chapter Info.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          `,
          sections: [
            {
              title: 'Section 2 Title',
              info: 'Section 2 Info',
              sectionFn: () => (<Button label="The Button" onClick={action('onClick')}/>),
              options: { showSource: true, showPropTables: true },
            },
          ],
        },
      ],
    }
  );
