import React from 'react';
import { configure, setAddon, addDecorator } from '@kadira/storybook';
import ChaptersAddon from '../src/';

addDecorator((story) => (
  <div style={{padding: 20}}>
    {story()}
  </div>
));

setAddon(ChaptersAddon);

configure(function () {
  require('../example/story');
}, module);
