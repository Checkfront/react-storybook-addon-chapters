import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './Button';

storiesOf('Addon Chapters')
  .addWithChapters(
  'Story With Chapters',
  {
    subtitle: 'Display multiple components within one story!',
    info: `
        React Storybook Chapters addon allows showcasing of multiple components within a story by breaking it down into smaller categories (**Chapters**) and subcategories (**Sections**) for more organizational goodness.

        This section is called **Story Info** and you can provide an abstract of your story here.

        A story consists of multiple chapters and a chapter consists of multiple sections. Each section can render a block of code,
        which typically used to showcase one component or a particular state of a component.

        Yes, all info sections support markdown formatting!
      `,
    chapters: [
      // List of chapters.
      {
        title: 'This is a Chapter\'s Title',
        subtitle: 'And this is a chapter\'s subtitle',
        info: `
            Chapters can be used to group related components together, or show varying states of a component.
            Each chapter comes with a **Chapter Title**, **Chapter Subtitle**, **Chapter Info** and a list of **Sections**.
            Simply omit any of them to hide them from rendering.
          `,
        sections: [
          // List of sections.
          {
            title: 'This is a Section\'s Title',
            subtitle: 'Each section can be used to render a component',
            info: `
                Provide additional information about your section here.
                Each section comes with a **Section Title**, **Section Subtitle**, **Section Info**.
                Simply omit any of them to hide them from rendering. The section below does not have a subtitle nor info.

                There's also the option of showing the source code and \`propTypes\` of the component.
              `,
            sectionFn: () => (<Button label="My Button" onClick={() => { alert('Hello World!'); }} />),
            options: {
              showSource: false,
              allowSourceToggling: true,
              showPropTables: true,
              allowPropTablesToggling: true,
            },
          },
          {
            title: 'Here\'s another section, but without subtitle and info',
            sectionFn: () => (<Button label="My Disabled Button" disabled onClick={() => { }} />),
          },
        ],
      },
      {
        title: 'Usage',
        info: `
Install the following npm module:

~~~
npm install --save-dev react-storybook-addon-chapters
~~~

Then set the addon in the place you configure storybook like this:

~~~
import React from 'react';
import { configure, setAddon } from '@storybook/react';
import chaptersAddon from 'react-storybook-addon-chapters';

setAddon(chaptersAddon);

configure(function () {
  ...
}, module);
~~~

Then create your stories with the \`.addWithChapters\` API.

~~~
import React from 'react';
import Button from './Button';
import { storiesOf } from '@storybook/react';

storiesOf('Addon Chapters')
  .addWithChapters(
    'Story With Chapters',
    {
      subtitle: <Optional story subtitle>,
      info: <Optional story info>,
      chapters: [
        // List of chapters.
        {
          title: <Optional chapter title>,
          subtitle: <Optional chapter subtitle>,
          info: <Optional chapter info>,
          sections: [
            // List of sections.
            {
              title: <Optional section title>,
              subtitle: <Optional section subtitle>,
              info: <Optional section info>,
              sectionFn: () => (<Button label="My Button" onClick={() => { alert('Hello World!'); }/>),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              },
            },
            ...
          ],
        },
        ...
      ]
    }
  );
~~~
          `,
      },
    ],
  }
  )
  .addWithChapters(
  'Story Without Chapters',
  {
    info: `
        If you don't require displaying of the chapter information, simply use only one chapter with your list of sections and omit the chapter-related parameters.
        You'll end up with just a list of rendered sections. Refer to the example in \`example/story.js\`.
      `,
    chapters: [
      {
        sections: [
          {
            title: 'Section Title',
            subtitle: 'Section Subtitle',
            info: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              `,
            sectionFn: () => (<Button label="My Button" onClick={() => { }} />),
          },
          {
            title: 'Section Title Again',
            subtitle: 'Section Subtitle Again',
            sectionFn: () => (<Button label="My Button Again" onClick={() => { }} />),
          },
        ],
      },
    ],
  }
  );

