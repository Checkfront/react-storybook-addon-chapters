import React from 'react';
import Button from './Button';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Addon Chapters')
  .addWithChapters(
    'Story With Chapters',
    {
      subtitle: 'Provide subtitles for your stories!',
      info: `
        **Chapters** and **Sections** give users the additional flexibility of breaking down their story into smaller categories and groups for more organizational goodness.
        You can also provide an abstract of your story in this **Story Info**.

        A story consists of multiple chapters and a chapter consists of multiple sections. Each section can render a block of code,
        which typically used to showcase one component or a particular state of a component.

        Yes, all info sections support markdown formatting!
      `,
      chapters: [
        {
          title: 'This is a Chapter\'s Title',
          subtitle: 'And this is a chapter\'s subtitle',
          info: `
            Chapters can be used to group related components together, or show varying states of a component.
            Each chapter comes with a **Chapter Title**, **Chapter Subtitle**, **Chapter Info** and a list of **Sections**.
            Simply omit any of them to hide them from rendering.
          `,
          sections: [
            {
              title: 'This is a Section\'s Title',
              subtitle: 'Each section can be used to render a component',
              info: `
                Provide additional information about your section here.
                Each section comes with a **Section Title**, **Section Subtitle**, **Section Info**.
                Simply omit any of them to hide them from rendering. The section below does not have a subtitle nor info.

                There's also the option of showing the source code and \`propTypes\` of the component.
              `,
              sectionFn: () => (<Button label="My Button" onClick={action('onClick')}/>),
              options: { showSource: true, showPropTables: true },
            },
            {
              title: 'Here\'s another section, but without subtitle and info',
              sectionFn: () => (<Button label="My Disabled Button" disabled onClick={action('onClick')}/>),
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
import { configure, setAddon } from '@kadira/storybook';
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
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Addon Chapters')
  .addWithChapters(
    'Story With Chapters',
    {
      subtitle: <Optional story subtitle>,
      info: <Optional story info>,
      chapters: [
        {
          title: <Optional chapter title>,
          subtitle: <Optional chapter subtitle>,
          info: <Optional chapter info>,
          sections: [
            {
              title: <Optional section title>,
              subtitle: <Optional section subtitle>,
              info: <Optional section info>,
              sectionFn: () => (<Button label="My Disabled Button" disabled onClick={action('onClick')}/>),
              options: { showSource: true, showPropTables: true },
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
        If you don't require chapters, simply omit the chapter-related parameters and you'll end up with a list of sections.
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
              sectionFn: () => (<Button label="My Button" onClick={action('onClick')}/>),
            },
            {
              title: 'Section Title Again',
              subtitle: 'Section Subtitle Again',
              sectionFn: () => (<Button label="My Button Again" onClick={action('onClick')}/>),
            },
          ],
        },
      ],
    }
  );

