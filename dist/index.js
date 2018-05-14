'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.setDefaults = setDefaults;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Story = require('./components/Story');

var _Story2 = _interopRequireDefault(_Story);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export { StoryDecorator, ChapterDecorator, SectionDecorator };
// export { storyStyles, chapterStyles, sectionStyles, propTableStyles };

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
    allowPropTablesToggling: true
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