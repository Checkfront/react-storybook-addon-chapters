'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = renderInfoContent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _marksy = require('marksy');

var _marksy2 = _interopRequireDefault(_marksy);

var _markdown = require('@storybook/addon-info/dist/components/markdown');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultMarksyConf = {
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
};

function renderInfoContent(content) {
  var marksyConf = (0, _extends3.default)({}, defaultMarksyConf);
  var markdownInfo = (0, _marksy2.default)(marksyConf, content);

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
    markdownInfo(source).tree
  );
}