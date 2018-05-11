'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoryDecorator = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Chapter = require('./Chapter');

var _Chapter2 = _interopRequireDefault(_Chapter);

var _infoContent = require('../utils/info-content');

var _infoContent2 = _interopRequireDefault(_infoContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  context: _propTypes2.default.object,
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  info: _propTypes2.default.string,
  chapters: _propTypes2.default.arrayOf(_propTypes2.default.object),
  addonInfo: _propTypes2.default.object
};

var defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  chapters: []
};

var StoryDecorator = function () {
  function StoryDecorator() {
    (0, _classCallCheck3.default)(this, StoryDecorator);
  }

  (0, _createClass3.default)(StoryDecorator, null, [{
    key: 'title',
    value: function title(_title) {
      return _react2.default.createElement(
        'h1',
        { className: 'story-title' },
        _title
      );
    }
  }, {
    key: 'subtitle',
    value: function subtitle(_subtitle) {
      return _react2.default.createElement(
        'span',
        { className: 'story-subtitle' },
        _subtitle
      );
    }
  }, {
    key: 'info',
    value: function info(_info) {
      return _react2.default.createElement(
        'div',
        { className: 'story-info' },
        _info
      );
    }
  }, {
    key: 'main',
    value: function main(header, chapters) {
      return _react2.default.createElement(
        'div',
        { className: 'story' },
        _react2.default.createElement(
          'div',
          { className: 'story-header' },
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
          addonInfo = _props.addonInfo;


      var header = _react2.default.createElement(
        'div',
        null,
        title && StoryDecorator.title(title),
        subtitle && StoryDecorator.subtitle(subtitle),
        info && StoryDecorator.subtitle((0, _infoContent2.default)(info))
      );

      var renderedChapters = chapters.map(function (chapter, index) {
        return _react2.default.createElement(_Chapter2.default, (0, _extends3.default)({ key: index, context: context, addonInfo: addonInfo }, chapter));
      });

      return StoryDecorator.main(header, renderedChapters);
    }
  }]);
  return Story;
}(_react.Component);

exports.default = Story;


Story.displayName = 'Story';
Story.propTypes = propTypes;
Story.defaultProps = defaultProps;