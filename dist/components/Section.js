'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionDecorator = exports.sectionStyles = exports.sectionButtonStyles = undefined;

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

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

var _Node = require('@storybook/addon-info/dist/components/Node');

var _Node2 = _interopRequireDefault(_Node);

var _markdown = require('@storybook/addon-info/dist/components/markdown');

var _PropTable = require('./PropTable');

var _PropTable2 = _interopRequireDefault(_PropTable);

var _infoContent = require('../utils/info-content');

var _infoContent2 = _interopRequireDefault(_infoContent);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  info: _propTypes2.default.string,
  showSource: _propTypes2.default.bool,
  showPropTables: _propTypes2.default.bool,
  propTables: _propTypes2.default.arrayOf(_propTypes2.default.func),
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]),
  addonInfo: _propTypes2.default.object,
  useTheme: _propTypes2.default.bool
};

var defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  showSource: true,
  allowSourceToggling: true,
  showPropTables: false,
  allowPropTablesToggling: true
};

var sectionButtonStyles = exports.sectionButtonStyles = {
  backgroundColor: 'transparent',
  border: '1px solid ' + _theme2.default.gray,
  borderRadius: 3,
  color: _theme2.default.grayDark,
  cursor: 'pointer',
  float: 'right',
  marginLeft: 5,
  padding: '5px 10px'

};

var sectionStyles = exports.sectionStyles = {
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
  button: sectionButtonStyles,
  'button-active': (0, _extends3.default)({}, sectionButtonStyles, {
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

var SectionDecorator = function () {
  function SectionDecorator() {
    (0, _classCallCheck3.default)(this, SectionDecorator);
  }

  (0, _createClass3.default)(SectionDecorator, null, [{
    key: 'main',
    value: function main(header, component, additional, useTheme) {
      return _react2.default.createElement(
        'div',
        { style: useTheme ? sectionStyles.container : {}, className: 'section-container' },
        header,
        component,
        additional
      );
    }
  }, {
    key: 'header',
    value: function header(_header, useTheme) {
      return _react2.default.createElement(
        'div',
        { style: useTheme ? sectionStyles.header : {}, className: 'section-header' },
        _react2.default.createElement(
          'div',
          null,
          _header
        )
      );
    }
  }, {
    key: 'title',
    value: function title(_title, useTheme) {
      return _react2.default.createElement(
        'h3',
        { style: useTheme ? sectionStyles.title : {}, className: 'section-title' },
        _title
      );
    }
  }, {
    key: 'subtitle',
    value: function subtitle(_subtitle, useTheme) {
      return _react2.default.createElement(
        'p',
        { style: useTheme ? sectionStyles.subtitle : {}, className: 'section-subtitle' },
        _subtitle
      );
    }
  }, {
    key: 'component',
    value: function component(_component, useTheme) {
      return _react2.default.createElement(
        'div',
        { style: useTheme ? sectionStyles.componentContainer : {}, className: 'section-component-container' },
        _component
      );
    }
  }, {
    key: 'additional',
    value: function additional(_additional) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _additional
        )
      );
    }
  }, {
    key: 'sourceCode',
    value: function sourceCode(_sourceCode, useTheme) {
      return _react2.default.createElement(
        'div',
        { style: useTheme ? sectionStyles.subsection : {}, className: 'section-subsection' },
        _react2.default.createElement(
          'h4',
          { style: useTheme ? sectionStyles.subsection.title : {}, className: 'section-subsection-title' },
          'Source'
        ),
        _react2.default.createElement(
          _markdown.Pre,
          null,
          _sourceCode
        )
      );
    }
  }, {
    key: 'propTables',
    value: function propTables(_propTables, useTheme) {
      return _react2.default.createElement(
        'div',
        { style: useTheme ? sectionStyles.subsection : {}, className: 'section-subsection' },
        _react2.default.createElement(
          'h4',
          { style: useTheme ? sectionStyles.subsection.title : {}, className: 'section-subsection-title' },
          'PropTypes'
        ),
        _propTables
      );
    }
  }, {
    key: 'buttons',
    value: function buttons(_buttons, useTheme) {
      return _react2.default.createElement(
        'div',
        { style: useTheme ? sectionStyles.buttonContainer : {}, className: 'section-button-container' },
        _buttons
      );
    }
  }, {
    key: 'info',
    value: function info(infoContent, useTheme) {
      return _react2.default.createElement(
        'div',
        { style: useTheme ? sectionStyles.subsection : {}, className: 'section-subsection' },
        _react2.default.createElement(
          'div',
          { style: useTheme ? sectionStyles.info : {}, className: 'section-info' },
          infoContent
        )
      );
    }
  }]);
  return SectionDecorator;
}();

exports.SectionDecorator = SectionDecorator;

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
    value: function renderSourceCode(useTheme) {
      var _this2 = this;

      var addonInfo = this.props.addonInfo;

      var sourceCode = _react2.default.Children.map(this.props.children, function (root, idx) {
        return _react2.default.createElement(_Node2.default, (0, _extends3.default)({ key: idx, depth: 0, node: root }, addonInfo, _this2.props));
      });

      return SectionDecorator.sourceCode(sourceCode, useTheme);
    }
  }, {
    key: 'renderPropTables',
    value: function renderPropTables(useTheme) {
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
          _react2.default.createElement(_PropTable2.default, { component: component, useTheme: useTheme })
        );
      });

      if (!propTables || propTables.length === 0) {
        return null;
      }

      return SectionDecorator.propTables(propTables, useTheme);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          title = _props.title,
          subtitle = _props.subtitle,
          children = _props.children,
          info = _props.info,
          showSource = _props.showSource,
          showPropTables = _props.showPropTables,
          useTheme = _props.useTheme;

      var showButtonsRow = this.props.allowPropTablesToggling || this.props.allowSourceToggling;

      var header = _react2.default.createElement(
        'div',
        null,
        title && SectionDecorator.title(title, useTheme),
        subtitle && SectionDecorator.subtitle(subtitle, useTheme)
      );

      var buttons = [this.props.allowPropTablesToggling && _react2.default.createElement(
        'button',
        {
          key: 'allowPropTablesToggling', onClick: function onClick() {
            _this3.setState({
              isPropsTableShown: !_this3.state.isPropsTableShown
            });
          },
          style: useTheme ? this.state.isPropsTableShown ? sectionStyles['button-active'] : sectionStyles.button : this.state.isPropsTableShown ? sectionStyles['button-active'] : sectionStyles.button,
          className: this.state.isPropsTableShown ? 'button-active' : 'button'
        },
        this.state.isPropsTableShown ? 'Hide' : 'Show',
        ' Props Table'
      ), this.props.allowSourceToggling && _react2.default.createElement(
        'button',
        {
          key: 'allowSourceToggling', onClick: function onClick() {
            _this3.setState({
              isSourceShown: !_this3.state.isSourceShown
            });
          },
          style: useTheme ? this.state.isSourceShown ? sectionStyles['button-active'] : sectionStyles.button : this.state.isSourceShown ? sectionStyles['button-active'] : sectionStyles.button,
          className: this.state.isSourceShown ? 'button-active' : 'button'
        },
        this.state.isSourceShown ? 'Hide' : 'Show',
        ' Source'
      )];

      var additional = _react2.default.createElement(
        'div',
        null,
        info && SectionDecorator.info((0, _infoContent2.default)(info), useTheme),
        showButtonsRow && SectionDecorator.buttons(buttons, useTheme),
        this.state.isSourceShown && this.renderSourceCode(useTheme),
        this.state.isPropsTableShown && this.renderPropTables(useTheme)
      );

      return SectionDecorator.main(SectionDecorator.header(header), SectionDecorator.component(children), SectionDecorator.additional(additional), useTheme);
    }
  }]);
  return Section;
}(_react.Component);

exports.default = Section;


Section.displayName = 'Section';
Section.propTypes = propTypes;
Section.defaultProps = defaultProps;