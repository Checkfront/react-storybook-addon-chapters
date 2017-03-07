import React from 'react';
import MTRC from 'markdown-to-react-components';

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
      {MTRC(source).tree}
    </div>
  );
}
