'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Node = require('@kadira/react-storybook-addon-info/dist/components/Node');

var _Node2 = _interopRequireDefault(_Node);

var _markdown = require('@kadira/react-storybook-addon-info/dist/components/markdown');

var _PropTable = require('./PropTable');

var _PropTable2 = _interopRequireDefault(_PropTable);

var _infoContent = require('../utils/info-content');

var _infoContent2 = _interopRequireDefault(_infoContent);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    marginBottom: 100
  },
  header: {
    marginBottom: 60
  },
  title: {
    color: _theme2.default.grayDarkest,
    fontSize: 18,
    marginBottom: 10
  },
  subtitle: {
    color: _theme2.default.grayDark,
    fontSize: 14,
    marginBottom: 20,
    marginTop: 0
  },
  info: _theme2.default.infoStyle,
  componentContainer: {
    marginBottom: 60
  },
  subsection: {
    marginBottom: 60
  },
  subsectionTitle: {
    color: _theme2.default.grayDark,
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase'
  }
};

var Section = function (_Component) {
  (0, _inherits3.default)(Section, _Component);

  function Section() {
    (0, _classCallCheck3.default)(this, Section);
    return (0, _possibleConstructorReturn3.default)(this, (Section.__proto__ || (0, _getPrototypeOf2.default)(Section)).apply(this, arguments));
  }

  (0, _createClass3.default)(Section, [{
    key: 'renderSourceCode',
    value: function renderSourceCode() {
      return _react2.default.createElement(
        'div',
        { style: styles.subsection },
        _react2.default.createElement(
          'h4',
          { style: styles.subsectionTitle },
          'Source'
        ),
        _react2.default.createElement(
          _markdown.Pre,
          null,
          _react2.default.Children.map(this.props.children, function (root, idx) {
            return _react2.default.createElement(_Node2.default, { key: idx, depth: 0, node: root });
          })
        )
      );
    }
  }, {
    key: 'renderPropTables',
    value: function renderPropTables() {
      var types = new _map2.default();

      if (!this.props.children) {
        return null;
      }

      if (this.props.propTables) {
        this.props.propTables.forEach(function (type) {
          types.set(type, true);
        });
      }

      // Depth-first traverse and collect types.
      function extract(children) {
        if (!children) {
          return;
        }
        if (Array.isArray(children)) {
          children.forEach(extract);
          return;
        }
        if (children.props && children.props.children) {
          extract(children.props.children);
        }
        if (typeof children === 'string' || typeof children.type === 'string') {
          return;
        }
        if (children.type && !types.has(children.type)) {
          types.set(children.type, true);
        }
      }

      // Extract components from children.
      extract(this.props.children);

      var typesList = (0, _from2.default)(types.keys());
      typesList.sort(function (a, b) {
        return (a.displayName || a.name) > (b.displayName || b.name);
      });

      var propTables = typesList.map(function (type, idx) {
        return _react2.default.createElement(
          'div',
          { key: idx },
          _react2.default.createElement(
            'h5',
            null,
            '<',
            type.displayName || type.name,
            '> Component'
          ),
          _react2.default.createElement(_PropTable2.default, { type: type })
        );
      });

      if (!propTables || propTables.length === 0) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { style: styles.subsection },
        _react2.default.createElement(
          'h4',
          { style: styles.subsectionTitle },
          'PropTypes'
        ),
        propTables
      );

      return;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subtitle = _props.subtitle,
          children = _props.children,
          info = _props.info,
          showSource = _props.showSource,
          showPropTables = _props.showPropTables;

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'div',
          { style: styles.header },
          _react2.default.createElement(
            'div',
            null,
            title && _react2.default.createElement(
              'h3',
              { style: styles.title },
              title
            ),
            subtitle && _react2.default.createElement(
              'p',
              { style: styles.subtitle },
              subtitle
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.componentContainer },
          children
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            info && _react2.default.createElement(
              'div',
              { style: styles.subsection },
              _react2.default.createElement(
                'div',
                { style: styles.info },
                (0, _infoContent2.default)(info)
              )
            ),
            showSource && this.renderSourceCode(),
            showPropTables && this.renderPropTables()
          )
        )
      );
    }
  }]);
  return Section;
}(_react.Component);

exports.default = Section;


Section.displayName = 'Section';
Section.propTypes = {
  context: _react.PropTypes.object,
  title: _react.PropTypes.string,
  subtitle: _react.PropTypes.string,
  info: _react.PropTypes.string,
  showSource: _react.PropTypes.bool,
  showPropTables: _react.PropTypes.bool,
  propTables: _react.PropTypes.arrayOf(_react.PropTypes.func),
  children: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array])
};
Section.defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  showSource: true,
  showPropTables: false
};