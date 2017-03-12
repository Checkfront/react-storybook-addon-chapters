# React Storybook Chapters Addon

React Storybook Chapters addon allows showcasing of multiple components within a story by breaking it down into smaller categories (chapters) and subcategories (sections) for more organizational goodness.

Using the addon, a story can consist of multiple chapters and a chapter consists of multiple sections. Each section can render a block of code,
which typically used to showcase one component or a particular state of a component.

Chapters can be used to group related components together, or show varying states of a component.
Each chapter comes with a **Chapter Title**, **Chapter Subtitle**, **Chapter Info** and a list of **Sections**.
Simply omit any of them to hide them from rendering.

Each section comes with a **Section Title**, **Section Subtitle**, **Section Info**.

This addon was modified from [react-storybook-addon-info](https://github.com/storybooks/react-storybook-addon-info) and uses some of the component code from there.

![React Storybook Screenshot](docs/home-screenshot.png)

## Usage

Install the following npm module:

```sh
npm install --save-dev react-storybook-addon-chapters
```

Then set the addon in the place you configure storybook like this:

```js
import React from 'react';
import { configure, setAddon } from '@kadira/storybook';
import chaptersAddon from 'react-storybook-addon-chapters';

setAddon(chaptersAddon);

configure(function () {
  ...
}, module);
```

Then create your stories with the `.addWithChapters` API.

```js
import React from 'react';
import Button from './Button';
import { storiesOf } from '@kadira/storybook';

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
              options: { showSource: true, showPropTables: true },
            },
            ...
          ],
        },
        ...
      ]
    }
  );
```

> Have a look at [this example](example/story.js) stories to learn more about the `addWithChapters` API.

## The FAQ

**Components lose their names on static build**

Component names also get minified with other javascript code when building for production. When creating components, set the `displayName` static property to show the correct component name on static builds.
