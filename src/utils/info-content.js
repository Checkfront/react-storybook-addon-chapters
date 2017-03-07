import React from 'react';
import mtrc from 'markdown-to-react-components';
import { H1, H2, H3, H4, H5, H6, Code, P, UL, A, LI } from '@kadira/react-storybook-addon-info/dist/components/markdown';

mtrc.configure({
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  code: Code,
  p: P,
  a: A,
  li: LI,
  ul: UL,
});

export default function renderInfoContent(content) {
  if (!content || content === '' || typeof content !== 'string') {
    return null;
  }

  const lines = content.split('\n');
  while (lines[0].trim() === '') {
    lines.shift();
  }
  let padding = 0;
  const matches = lines[0].match(/^ */);
  if (matches) {
    padding = matches[0].length;
  }
  const source = lines.map(s => s.slice(padding)).join('\n');
  return (
    <div>
      {mtrc(source).tree}
    </div>
  );
}
