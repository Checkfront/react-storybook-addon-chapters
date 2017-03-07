'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Story = require('./components/Story');

var _Story2 = _interopRequireDefault(_Story);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  addWithChapters: function addWithChapters(storyName) {
    var storyContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return this.add(storyName, function (context) {
      return _react2.default.createElement(_Story2.default, { context: context,
        title: storyName,
        subtitle: storyContent.subtitle,
        info: storyContent.info,
        chapters: storyContent.chapters
      });
    });
  }
};