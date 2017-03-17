import React from "react"
import Button from "../Button"
import {storiesOf} from "@kadira/storybook"
import {SectionDecorator, sectionStyles, Theme} from "../../src/"
import {Pre} from "@kadira/react-storybook-addon-info/dist/components/markdown"
import "./styles.css"

// Override styles
sectionStyles.header.marginBottom = 10;
sectionStyles.buttonContainer.marginTop = 10;

// Access colors from Theme
const headerStyles = {color: Theme.grayDark};

// Overwrite decorators
SectionDecorator.sourceCode = function (sourceCode) {
  return (
    <div className="source-box">
      <h4 style={headerStyles}>Source</h4>
      <div style={{borderColor: Theme.gray, backgroundColor: Theme.grayLighter}}>
        <Pre>{sourceCode}</Pre>
      </div>
    </div>
  );
};

// Overwrite decorators
SectionDecorator.component = function (component) {
  return (
    <div className="example-box">
      <h4 style={headerStyles}>Example</h4>
      <div style={{borderColor: Theme.gray}}>{component}</div>
    </div>
  );
};

storiesOf('Custom decorators')
  .addWithChapters(
    'Story With Chapters',
    {
      subtitle: "And with customized layout",
      chapters: [
        {
          sections: [
            {
              title: 'Default settings',
              sectionFn: () => (<Button label="My Button" onClick={() => {
                alert('Hello World!');
              }}/>),
            },
            {
              title: 'Disabled',
              sectionFn: () => (<Button label="My Disabled Button" disabled onClick={() => {
              }}/>),
            },
          ],
        },
      ]
    }
  );