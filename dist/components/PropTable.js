'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTableStyles = undefined;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

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

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PropVal = require('@storybook/addon-info/dist/components/PropVal');

var _PropVal2 = _interopRequireDefault(_PropVal);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  component: _propTypes2.default.func
};

var PropTypesMap = new _map2.default();

(0, _keys2.default)(_propTypes2.default).forEach(function (typeName) {
  var type = _propTypes2.default[typeName];
  PropTypesMap.set(type, typeName);
  PropTypesMap.set(type.isRequired, typeName);
});

var padding = 10;
var propTableStyles = exports.propTableStyles = {
  propTable: {
    fontSize: 13,
    borderCollapse: 'collapse',
    marginLeft: -10
  },
  propTableTh: {
    color: _theme2.default.grayDarker,
    padding: padding
  },
  propTableTd: {
    borderTop: '1px solid ' + _theme2.default.grayLight,
    padding: padding
  }
};

var PropTable = function (_React$Component) {
  (0, _inherits3.default)(PropTable, _React$Component);

  function PropTable() {
    (0, _classCallCheck3.default)(this, PropTable);
    return (0, _possibleConstructorReturn3.default)(this, (PropTable.__proto__ || (0, _getPrototypeOf2.default)(PropTable)).apply(this, arguments));
  }

  (0, _createClass3.default)(PropTable, [{
    key: 'render',
    value: function render() {
      var component = this.props.component;

      if (!component) {
        return null;
      }

      var props = {};

      if (component.propTypes) {
        (0, _keys2.default)(component.propTypes).forEach(function (property) {
          var typeInfo = component.propTypes[property];
          var propType = PropTypesMap.get(typeInfo) || 'other';
          var required = typeInfo.isRequired === undefined ? 'Yes' : 'No';
          props[property] = { property: property, propType: propType, required: required };
        });
      }

      if (component.defaultProps) {
        (0, _keys2.default)(component.defaultProps).forEach(function (property) {
          var value = component.defaultProps[property];
          if (!props[property]) {
            props[property] = { property: property };
          }
          props[property].defaultValue = value;
        });
      }

      var propsList = (0, _values2.default)(props);
      if (!propsList.length) {
        return _react2.default.createElement(
          'small',
          null,
          'No propTypes defined!'
        );
      }
      propsList.sort(function (a, b) {
        return a.property > b.property;
      });

      return _react2.default.createElement(
        'table',
        { style: propTableStyles.propTable },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              { style: propTableStyles.propTableTh },
              'Property'
            ),
            _react2.default.createElement(
              'th',
              { style: propTableStyles.propTableTh },
              'PropType'
            ),
            _react2.default.createElement(
              'th',
              { style: propTableStyles.propTableTh },
              'Required'
            ),
            _react2.default.createElement(
              'th',
              { style: propTableStyles.propTableTh },
              'Default'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          propsList.map(function (row) {
            return _react2.default.createElement(
              'tr',
              { key: row.property },
              _react2.default.createElement(
                'td',
                { style: propTableStyles.propTableTd },
                row.property
              ),
              _react2.default.createElement(
                'td',
                { style: propTableStyles.propTableTd },
                row.propType
              ),
              _react2.default.createElement(
                'td',
                { style: propTableStyles.propTableTd },
                row.required
              ),
              _react2.default.createElement(
                'td',
                { style: propTableStyles.propTableTd },
                row.defaultValue === undefined ? '-' : _react2.default.createElement(_PropVal2.default, { val: row.defaultValue })
              )
            );
          })
        )
      );
    }
  }]);
  return PropTable;
}(_react2.default.Component);

exports.default = PropTable;


PropTable.displayName = 'PropTable';
PropTable.propTypes = propTypes;