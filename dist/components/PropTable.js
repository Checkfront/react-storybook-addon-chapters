'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTable = require('@kadira/react-storybook-addon-info/dist/components/PropTable');

var _PropTable2 = _interopRequireDefault(_PropTable);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypesMap = new _map2.default();
for (var typeName in _react2.default.PropTypes) {
  if (!_react2.default.PropTypes.hasOwnProperty(typeName)) {
    continue;
  }
  var type = _react2.default.PropTypes[typeName];
  PropTypesMap.set(type, typeName);
  PropTypesMap.set(type.isRequired, typeName);
}

var padding = 10;
var styles = {
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
      var type = this.props.type;

      if (!type) {
        return null;
      }

      var props = {};

      if (type.propTypes) {
        for (var property in type.propTypes) {
          if (!type.propTypes.hasOwnProperty(property)) {
            continue;
          }
          var typeInfo = type.propTypes[property];
          var propType = PropTypesMap.get(typeInfo) || 'other';
          var required = typeInfo.isRequired === undefined ? 'Yes' : 'No';
          props[property] = { property: property, propType: propType, required: required };
        }
      }

      if (type.defaultProps) {
        for (var _property in type.defaultProps) {
          if (!type.defaultProps.hasOwnProperty(_property)) {
            continue;
          }
          var value = type.defaultProps[_property];
          if (value === undefined) {
            continue;
          }
          if (!props[_property]) {
            props[_property] = { property: _property };
          }
          props[_property].defaultValue = value;
        }
      }

      var array = (0, _values2.default)(props);
      if (!array.length) {
        return _react2.default.createElement(
          'small',
          null,
          'No propTypes defined!'
        );
      }
      array.sort(function (a, b) {
        return a.property > b.property;
      });

      return _react2.default.createElement(
        'table',
        { style: styles.propTable },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              { style: styles.propTableTh },
              'Property'
            ),
            _react2.default.createElement(
              'th',
              { style: styles.propTableTh },
              'PropType'
            ),
            _react2.default.createElement(
              'th',
              { style: styles.propTableTh },
              'Required'
            ),
            _react2.default.createElement(
              'th',
              { style: styles.propTableTh },
              'Default'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          array.map(function (row) {
            return _react2.default.createElement(
              'tr',
              { key: row.property },
              _react2.default.createElement(
                'td',
                { style: styles.propTableTd },
                row.property
              ),
              _react2.default.createElement(
                'td',
                { style: styles.propTableTd },
                row.propType
              ),
              _react2.default.createElement(
                'td',
                { style: styles.propTableTd },
                row.required
              ),
              _react2.default.createElement(
                'td',
                { style: styles.propTableTd },
                row.defaultValue === undefined ? '-' : _react2.default.createElement(_PropTable2.default, { val: row.defaultValue })
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
PropTable.propTypes = {
  type: _react2.default.PropTypes.func
};