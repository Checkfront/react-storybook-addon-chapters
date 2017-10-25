'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderInfoContent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _markdownToReactComponents = require('markdown-to-react-components');

var _markdownToReactComponents2 = _interopRequireDefault(_markdownToReactComponents);

var _markdown = require('@storybook/addon-info/dist/components/markdown');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_markdownToReactComponents2.default.configure({
  h1: _markdown.H1,
  h2: _markdown.H2,
  h3: _markdown.H3,
  h4: _markdown.H4,
  h5: _markdown.H5,
  h6: _markdown.H6,
  code: _markdown.Code,
  p: _markdown.P,
  a: _markdown.A,
  li: _markdown.LI,
  ul: _markdown.UL
});

function renderInfoContent(content) {
  if (!content || content === '' || typeof content !== 'string') {
    return null;
  }

  var lines = content.split('\n');
  while (lines[0].trim() === '') {
    lines.shift();
  }
  var padding = 0;
  var matches = lines[0].match(/^ */);
  if (matches) {
    padding = matches[0].length;
  }
  var source = lines.map(function (s) {
    return s.slice(padding);
  }).join('\n');
  return _react2.default.createElement(
    'div',
    null,
    (0, _markdownToReactComponents2.default)(source).tree
  );
}