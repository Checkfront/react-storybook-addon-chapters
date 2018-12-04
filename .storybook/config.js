import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import chapterAddon from '../src/';

addDecorator((story) => (
  <div style={{padding: 20}}>
    {story()}
  </div>
));

setAddon(chapterAddon);

configure(function () {
  require('../example/story');
}, module);
