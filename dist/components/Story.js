'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoryDecorator = exports.storyStyles = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = require('@storybook/components');

var _Chapter = require('./Chapter');

var _Chapter2 = _interopRequireDefault(_Chapter);

var _infoContent = require('../utils/info-content');

var _infoContent2 = _interopRequireDefault(_infoContent);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  context: _propTypes2.default.object,
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  info: _propTypes2.default.string,
  chapters: _propTypes2.default.arrayOf(_propTypes2.default.object),
  addonInfo: _propTypes2.default.object,
  sectionOptions: _propTypes2.default.object
};

var defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  chapters: []
};

var storyStyles = exports.storyStyles = {
  story: (0, _extends3.default)({}, _components.baseFonts),
  header: {
    marginBottom: 60
  },
  title: {
    color: _theme2.default.grayDarkest,
    fontSize: 36,
    marginBottom: 10
  },
  subtitle: {
    color: _theme2.default.grayDark,
    fontSize: 18,
    marginBottom: 20,
    marginTop: 0
  },
  info: _theme2.default.infoStyle
};

var StoryDecorator = function () {
  function StoryDecorator() {
    (0, _classCallCheck3.default)(this, StoryDecorator);
  }

  (0, _createClass3.default)(StoryDecorator, null, [{
    key: 'title',
    value: function title(_title, useTheme) {
      return _react2.default.createElement(
        'h1',
        { style: useTheme ? storyStyles.title : {}, className: 'story-title' },
        _title
      );
    }
  }, {
    key: 'subtitle',
    value: function subtitle(_subtitle, useTheme) {
      return _react2.default.createElement(
        'span',
        { style: useTheme ? storyStyles.subtitle : {}, className: 'story-subtitle' },
        _subtitle
      );
    }
  }, {
    key: 'info',
    value: function info(_info, useTheme) {
      return _react2.default.createElement(
        'div',
        { style: useTheme ? storyStyles.info : {}, className: 'story-info' },
        _info
      );
    }
  }, {
    key: 'main',
    value: function main(header, chapters, useTheme) {
      return _react2.default.createElement(
        'div',
        { style: useTheme ? storyStyles.story : {}, className: 'story' },
        _react2.default.createElement(
          'div',
          { style: useTheme ? storyStyles.info : {}, className: 'story-header' },
          header
        ),
        chapters
      );
    }
  }]);
  return StoryDecorator;
}();

exports.StoryDecorator = StoryDecorator;

var Story = function (_Component) {
  (0, _inherits3.default)(Story, _Component);

  function Story() {
    (0, _classCallCheck3.default)(this, Story);
    return (0, _possibleConstructorReturn3.default)(this, (Story.__proto__ || (0, _getPrototypeOf2.default)(Story)).apply(this, arguments));
  }

  (0, _createClass3.default)(Story, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          context = _props.context,
          subtitle = _props.subtitle,
          title = _props.title,
          info = _props.info,
          chapters = _props.chapters,
          addonInfo = _props.addonInfo,
          sectionOptions = _props.sectionOptions;
      var useTheme = sectionOptions.useTheme;


      var header = _react2.default.createElement(
        'div',
        null,
        title && StoryDecorator.title(title, useTheme),
        subtitle && StoryDecorator.subtitle(subtitle, useTheme),
        info && StoryDecorator.subtitle((0, _infoContent2.default)(info, useTheme))
      );

      var renderedChapters = chapters.map(function (chapter, index) {
        return _react2.default.createElement(_Chapter2.default, (0, _extends3.default)({ key: index, context: context, addonInfo: addonInfo }, chapter, { useTheme: useTheme }));
      });

      return StoryDecorator.main(header, renderedChapters, useTheme);
    }
  }]);
  return Story;
}(_react.Component);

exports.default = Story;


Story.displayName = 'Story';
Story.propTypes = propTypes;
Story.defaultProps = defaultProps;