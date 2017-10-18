

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.propTableStyles = undefined;

let _values = require('babel-runtime/core-js/object/values');

let _values2 = _interopRequireDefault(_values);

let _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

let _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

let _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

let _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

let _createClass2 = require('babel-runtime/helpers/createClass');

let _createClass3 = _interopRequireDefault(_createClass2);

let _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

let _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

let _inherits2 = require('babel-runtime/helpers/inherits');

let _inherits3 = _interopRequireDefault(_inherits2);

let _map = require('babel-runtime/core-js/map');

let _map2 = _interopRequireDefault(_map);

let _react = require('react');

let _react2 = _interopRequireDefault(_react);

let _propTypes = require('prop-types');

let _propTypes2 = _interopRequireDefault(_propTypes);

let _PropVal = require('@storybook/addon-info/dist/components/PropVal');

let _PropVal2 = _interopRequireDefault(_PropVal);

let _theme = require('../theme');

let _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let propTypes = {
  type: _propTypes2.default.func,
};

let PropTypesMap = new _map2.default();
for (let typeName in _propTypes2.default) {
  if (!_propTypes2.default.hasOwnProperty(typeName)) {
    continue;
  }
  let component = _propTypes2.default[typeName];
  PropTypesMap.set(component, typeName);
  PropTypesMap.set(component.isRequired, typeName);
}

let padding = 10;
let propTableStyles = exports.propTableStyles = {
  propTable: {
    fontSize: 13,
    borderCollapse: 'collapse',
    marginLeft: -10,
  },
  propTableTh: {
    color: _theme2.default.grayDarker,
    padding,
  },
  propTableTd: {
    borderTop: `1px solid ${  _theme2.default.grayLight}`,
    padding,
  },
};

let PropTable = (function (_React$Component) {
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
        for (var property in component.propTypes) {
          if (!component.propTypes.hasOwnProperty(property)) {
            continue;
          }
          var typeInfo = component.propTypes[property];
          var propType = PropTypesMap.get(typeInfo) || 'other';
          var required = typeInfo.isRequired === undefined ? 'Yes' : 'No';
          props[property] = { property: property, propType: propType, required: required };
        }
      }

      if (component.defaultProps) {
        for (var _property in component.defaultProps) {
          if (!component.defaultProps.hasOwnProperty(_property)) {
            continue;
          }
          var value = component.defaultProps[_property];
          if (value === undefined) {
            continue;
          }
          if (!props[_property]) {
            props[_property] = { property: _property };
          }
          props[_property].defaultValue = value;
        }
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
}(_react2.default.Component));

exports.default = PropTable;


PropTable.propTypes = propTypes;
