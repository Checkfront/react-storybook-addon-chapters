'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Theme = exports.propTableStyles = exports.sectionStyles = exports.chapterStyles = exports.storyStyles = exports.SectionDecorator = exports.ChapterDecorator = exports.StoryDecorator = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Story = require('./components/Story');

var _Story2 = _interopRequireDefault(_Story);

var _Chapter = require('./components/Chapter');

var _Section = require('./components/Section');

var _PropTable = require('./components/PropTable');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.StoryDecorator = _Story.StoryDecorator;
exports.ChapterDecorator = _Chapter.ChapterDecorator;
exports.SectionDecorator = _Section.SectionDecorator;
exports.storyStyles = _Story.storyStyles;
exports.chapterStyles = _Chapter.chapterStyles;
exports.sectionStyles = _Section.sectionStyles;
exports.propTableStyles = _PropTable.propTableStyles;
exports.Theme = _theme2.default;
exports.default = {
  addWithChapters: function addWithChapters(storyName) {
    var storyContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return this.add(storyName, function (context) {
      return _react2.default.createElement(_Story2.default, {
        context: context,
        title: storyName,
        subtitle: storyContent.subtitle,
        info: storyContent.info,
        chapters: storyContent.chapters
      });
    });
  }
};