'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('@kadira/react-storybook-addon-info/dist/components/theme');

var _Chapter = require('./Chapter');

var _Chapter2 = _interopRequireDefault(_Chapter);

var _infoContent = require('../utils/info-content');

var _infoContent2 = _interopRequireDefault(_infoContent);

var _theme2 = require('../theme');

var _theme3 = _interopRequireDefault(_theme2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  story: (0, _extends3.default)({}, _theme.baseFonts),
  header: {
    marginBottom: 60
  },
  title: {
    color: _theme3.default.grayDarkest,
    fontSize: 36,
    marginBottom: 10
  },
  subtitle: {
    color: _theme3.default.grayDark,
    fontSize: 18,
    marginBottom: 20,
    marginTop: 0
  },
  info: _theme3.default.infoStyle
};

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
          chapters = _props.chapters;

      return _react2.default.createElement(
        'div',
        { style: styles.story },
        _react2.default.createElement(
          'div',
          { style: styles.header },
          title && _react2.default.createElement(
            'h1',
            { style: styles.title },
            title
          ),
          subtitle && _react2.default.createElement(
            'p',
            { style: styles.subtitle },
            subtitle
          ),
          info && _react2.default.createElement(
            'div',
            { style: styles.info },
            (0, _infoContent2.default)(info)
          )
        ),
        chapters.map(function (chapter, index) {
          return _react2.default.createElement(_Chapter2.default, (0, _extends3.default)({
            key: index,
            context: context
          }, chapter));
        })
      );
    }
  }]);
  return Story;
}(_react.Component);

exports.default = Story;


Story.displayName = 'Story';
Story.propTypes = {
  context: _react.PropTypes.object,
  title: _react.PropTypes.string,
  subtitle: _react.PropTypes.string,
  info: _react.PropTypes.string,
  chapters: _react.PropTypes.arrayOf(_react.PropTypes.object)
};
Story.defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  chapters: []
};