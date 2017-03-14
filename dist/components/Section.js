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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var buttonStyles = {
  backgroundColor: 'transparent',
  border: '1px solid ' + _theme2.default.gray,
  borderRadius: 3,
  color: _theme2.default.grayDark,
  cursor: 'pointer',
  float: 'right',
  marginLeft: 5,
  padding: '5px 10px'
};

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
  buttonContainer: {
    height: 15
  },
  button: buttonStyles,
  'button-active': (0, _extends3.default)({}, buttonStyles, {
    backgroundColor: _theme2.default.grayLight,
    borderColor: _theme2.default.grayLight,
    color: _theme2.default.grayDark
  }),
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

  function Section(props) {
    (0, _classCallCheck3.default)(this, Section);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Section.__proto__ || (0, _getPrototypeOf2.default)(Section)).call(this, props));

    _this.state = {
      isSourceShown: props.showSource,
      isPropsTableShown: props.showPropTables
    };
    return _this;
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
      var components = new _map2.default();

      if (!this.props.children) {
        return null;
      }

      if (this.props.propTables) {
        this.props.propTables.forEach(function (component) {
          components.set(component, true);
        });
      }

      // Depth-first traverse and collect components.
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
        if (children.type && !components.has(children.type)) {
          components.set(children.type, true);
        }
      }

      // Extract components from children.
      extract(this.props.children);

      var componentsList = (0, _from2.default)(components.keys());
      componentsList.sort(function (a, b) {
        return (a.displayName || a.name) > (b.displayName || b.name);
      });

      var propTables = componentsList.map(function (component, idx) {
        return _react2.default.createElement(
          'div',
          { key: idx },
          _react2.default.createElement(
            'h5',
            null,
            '<',
            component.displayName || component.name,
            '> Component'
          ),
          _react2.default.createElement(_PropTable2.default, { component: component })
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
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          subtitle = _props.subtitle,
          children = _props.children,
          info = _props.info,
          showSource = _props.showSource,
          showPropTables = _props.showPropTables;

      var showButtonsRow = this.props.allowPropTablesToggling || this.props.allowSourceToggling;
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
            showButtonsRow && _react2.default.createElement(
              'div',
              { style: styles.buttonContainer },
              this.props.allowPropTablesToggling && _react2.default.createElement(
                'button',
                { onClick: function onClick() {
                    _this2.setState({
                      isPropsTableShown: !_this2.state.isPropsTableShown
                    });
                  }, style: this.state.isPropsTableShown ? styles['button-active'] : styles.button },
                this.state.isPropsTableShown ? 'Hide' : 'Show',
                ' Props Table'
              ),
              this.props.allowSourceToggling && _react2.default.createElement(
                'button',
                { onClick: function onClick() {
                    _this2.setState({
                      isSourceShown: !_this2.state.isSourceShown
                    });
                  }, style: this.state.isSourceShown ? styles['button-active'] : styles.button },
                this.state.isSourceShown ? 'Hide' : 'Show',
                ' Source'
              )
            ),
            this.state.isSourceShown && this.renderSourceCode(),
            this.state.isPropsTableShown && this.renderPropTables()
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
  allowSourceToggling: true,
  showPropTables: false,
  allowPropTablesToggling: true
};