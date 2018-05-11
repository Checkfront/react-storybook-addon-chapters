'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChapterDecorator = undefined;

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

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _infoContent = require('../utils/info-content');

var _infoContent2 = _interopRequireDefault(_infoContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  context: _propTypes2.default.object,
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  info: _propTypes2.default.string,
  sections: _propTypes2.default.arrayOf(_propTypes2.default.object),
  addonInfo: _propTypes2.default.object
};

var defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  sections: []
};

/* export const chapterStyles = {
  header: {
    marginBottom: 60,
  },
  hr: {
    border: 'none',
    backgroundColor: theme.border,
    height: 1,
  },
  title: {
    color: theme.grayDarkest,
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    color: theme.grayDark,
    fontSize: 16,
    marginBottom: 20,
    marginTop: 0,
  },
  info: theme.infoStyle,
};*/

var ChapterDecorator = function () {
  function ChapterDecorator() {
    (0, _classCallCheck3.default)(this, ChapterDecorator);
  }

  (0, _createClass3.default)(ChapterDecorator, null, [{
    key: 'title',
    value: function title(_title) {
      return _react2.default.createElement(
        'h3',
        { className: 'chapter-h3' },
        _title
      );
    }
  }, {
    key: 'subtitle',
    value: function subtitle(_subtitle) {
      return _react2.default.createElement(
        'span',
        { className: 'chapter-subtitle' },
        _subtitle
      );
    }
  }, {
    key: 'info',
    value: function info(_info) {
      return _react2.default.createElement(
        'div',
        { className: 'chapter-info' },
        _info
      );
    }
  }, {
    key: 'ruler',
    value: function ruler() {
      return _react2.default.createElement('hr', { className: 'chatper-hr' });
    }
  }, {
    key: 'main',
    value: function main(header, sections) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'chapter-header' },
          header
        ),
        sections
      );
    }
  }]);
  return ChapterDecorator;
}();

exports.ChapterDecorator = ChapterDecorator;

var Chapter = function (_Component) {
  (0, _inherits3.default)(Chapter, _Component);

  function Chapter() {
    (0, _classCallCheck3.default)(this, Chapter);
    return (0, _possibleConstructorReturn3.default)(this, (Chapter.__proto__ || (0, _getPrototypeOf2.default)(Chapter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Chapter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          context = _props.context,
          title = _props.title,
          subtitle = _props.subtitle,
          info = _props.info,
          sections = _props.sections,
          addonInfo = _props.addonInfo;


      var header = _react2.default.createElement(
        'div',
        null,
        title && ChapterDecorator.title(title),
        subtitle && ChapterDecorator.subtitle(subtitle),
        (subtitle || info) && ChapterDecorator.ruler(),
        info && ChapterDecorator.subtitle((0, _infoContent2.default)(info))
      );

      var renderedSections = sections.map(function (section, index) {
        var options = section.options || {};
        var sectionProps = (0, _extends3.default)({
          context: context,
          title: section.title,
          subtitle: section.subtitle,
          info: section.info
        }, options, {
          addonInfo: addonInfo
        });
        return _react2.default.createElement(
          _Section2.default,
          (0, _extends3.default)({ key: index }, sectionProps),
          section.sectionFn(context)
        );
      });

      return ChapterDecorator.main(header, renderedSections);
    }
  }]);
  return Chapter;
}(_react.Component);

exports.default = Chapter;


Chapter.displayName = 'Chapter';
Chapter.propTypes = propTypes;
Chapter.defaultProps = defaultProps;