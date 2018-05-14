'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Theme = exports.propTableStyles = exports.sectionStyles = exports.chapterStyles = exports.storyStyles = exports.SectionDecorator = exports.ChapterDecorator = exports.StoryDecorator = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.setDefaults = setDefaults;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _Story = require('./components/Story');

var _Story2 = _interopRequireDefault(_Story);

var _Chapter = require('./components/Chapter');

var _Section = require('./components/Section');

var _PropTable = require('./components/PropTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.StoryDecorator = _Story.StoryDecorator;
exports.ChapterDecorator = _Chapter.ChapterDecorator;
exports.SectionDecorator = _Section.SectionDecorator;
exports.storyStyles = _Story.storyStyles;
exports.chapterStyles = _Chapter.chapterStyles;
exports.sectionStyles = _Section.sectionStyles;
exports.propTableStyles = _PropTable.propTableStyles;
exports.Theme = _theme2.default;


var defaultProps = {
  addonInfo: {
    inline: false,
    header: true,
    source: true,
    propTables: [],
    maxPropsIntoLine: 3,
    maxPropObjectKeys: 3,
    maxPropArrayLength: 3,
    maxPropStringLength: 50
  },
  sectionOptions: {
    showSource: true,
    allowSourceToggling: true,
    showPropTables: false,
    allowPropTablesToggling: true,
    useTheme: true
  }
};

exports.default = {
  addWithChapters: function addWithChapters(storyName) {
    var storyContentOrFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return this.add(storyName, function (context) {
      var storyContent = typeof storyContentOrFn === 'function' ? storyContentOrFn() : storyContentOrFn;

      (storyContent.chapters || []).forEach(function (chapter) {
        (chapter.sections || []).forEach(function (section) {
          (0, _assign2.default)(section, {
            options: (0, _assign2.default)({}, defaultProps.sectionOptions, section.options)
          });
        });
      });

      return _react2.default.createElement(_Story2.default, (0, _extends3.default)({
        context: context,
        title: storyName,
        subtitle: storyContent.subtitle,
        info: storyContent.info,
        chapters: storyContent.chapters
      }, defaultProps));
    });
  }
};
function setDefaults(newDefaults) {
  (0, _assign2.default)(defaultProps.addonInfo, newDefaults.addonInfo);
  (0, _assign2.default)(defaultProps.sectionOptions, newDefaults.sectionOptions);
  return defaultProps;
}