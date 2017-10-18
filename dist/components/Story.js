

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.StoryDecorator = exports.storyStyles = undefined;

let _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

let _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

let _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

let _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

let _inherits2 = require('babel-runtime/helpers/inherits');

let _inherits3 = _interopRequireDefault(_inherits2);

let _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

let _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

let _createClass2 = require('babel-runtime/helpers/createClass');

let _createClass3 = _interopRequireDefault(_createClass2);

let _extends2 = require('babel-runtime/helpers/extends');

let _extends3 = _interopRequireDefault(_extends2);

let _react = require('react');

let _react2 = _interopRequireDefault(_react);

let _propTypes = require('prop-types');

let _propTypes2 = _interopRequireDefault(_propTypes);

let _components = require('@storybook/components');

let _Chapter = require('./Chapter');

let _Chapter2 = _interopRequireDefault(_Chapter);

let _infoContent = require('../utils/info-content');

let _infoContent2 = _interopRequireDefault(_infoContent);

let _theme = require('../theme');

let _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let propTypes = {
  context: _propTypes2.default.object,
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  info: _propTypes2.default.string,
  chapters: _propTypes2.default.arrayOf(_propTypes2.default.object),
};

let defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  chapters: [],
};

let storyStyles = exports.storyStyles = {
  story: (0, _extends3.default)({}, _components.baseFonts),
  header: {
    marginBottom: 60,
  },
  title: {
    color: _theme2.default.grayDarkest,
    fontSize: 36,
    marginBottom: 10,
  },
  subtitle: {
    color: _theme2.default.grayDark,
    fontSize: 18,
    marginBottom: 20,
    marginTop: 0,
  },
  info: _theme2.default.infoStyle,
};

let StoryDecorator = (function () {
  function StoryDecorator() {
    (0, _classCallCheck3.default)(this, StoryDecorator);
  }

  (0, _createClass3.default)(StoryDecorator, null, [{
    key: 'title',
    value: function title(_title) {
      return _react2.default.createElement(
        'h1',
        { style: storyStyles.title },
        _title
      );
    }
  }, {
    key: 'subtitle',
    value: function subtitle(_subtitle) {
      return _react2.default.createElement(
        'p',
        { style: storyStyles.subtitle },
        _subtitle
      );
    }
  }, {
    key: 'info',
    value: function info(_info) {
      return _react2.default.createElement(
        'div',
        { style: storyStyles.info },
        _info
      );
    }
  }, {
    key: 'main',
    value: function main(header, chapters) {
      return _react2.default.createElement(
        'div',
        { style: storyStyles.story },
        _react2.default.createElement(
          'div',
          { style: storyStyles.header },
          header
        ),
        chapters
      );
    }
  }]);
  return StoryDecorator;
}());

exports.StoryDecorator = StoryDecorator;

let Story = (function (_Component) {
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
          chapters = _props.chapters;


      var header = _react2.default.createElement(
        'div',
        null,
        title && StoryDecorator.title(title),
        subtitle && StoryDecorator.subtitle(subtitle),
        info && StoryDecorator.subtitle((0, _infoContent2.default)(info))
      );

      var renderedChapters = chapters.map(function (chapter, index) {
        return _react2.default.createElement(_Chapter2.default, (0, _extends3.default)({ key: index, context: context }, chapter));
      });

      return StoryDecorator.main(header, renderedChapters);
    }
  }]);
  return Story;
}(_react.Component));

exports.default = Story;


Story.propTypes = propTypes;
Story.defaultProps = defaultProps;
