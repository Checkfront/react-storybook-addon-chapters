import React from 'react';
import PropTypes from 'prop-types';
import PropVal from '@storybook/addon-info/dist/components/PropVal';
import theme from '../theme';

const propTypes = {
  component: PropTypes.func,
  useTheme: PropTypes.object,
};

const PropTypesMap = new Map();

Object.keys(PropTypes).forEach((typeName) => {
  const type = PropTypes[typeName];
  PropTypesMap.set(type, typeName);
  PropTypesMap.set(type.isRequired, typeName);
});

const padding = 10;
export const propTableStyles = {
  propTable: {
    fontSize: 13,
    borderCollapse: 'collapse',
    marginLeft: -10,
  },
  propTableTh: {
    color: theme.grayDarker,
    padding,
  },
  propTableTd: {
    borderTop: `1px solid ${theme.grayLight}`,
    padding,
  },
};

export default class PropTable extends React.Component {
  render() {
    const { component, useTheme } = this.props;

    if (!component) {
      return null;
    }

    const props = {};

    if (component.propTypes) {
      Object.keys(component.propTypes).forEach((property) => {
        const typeInfo = component.propTypes[property];
        const propType = PropTypesMap.get(typeInfo) || 'other';
        const required = typeInfo.isRequired === undefined ? 'Yes' : 'No';
        props[property] = { property, propType, required };
      });
    }

    if (component.defaultProps) {
      Object.keys(component.defaultProps).forEach((property) => {
        const value = component.defaultProps[property];
        if (!props[property]) {
          props[property] = { property };
        }
        props[property].defaultValue = value;
      });
    }

    const propsList = Object.values(props);
    if (!propsList.length) {
      return <small>No propTypes defined!</small>;
    }
    propsList.sort(function (a, b) {
      return a.property > b.property;
    });

    const thStyle = useTheme ? propTableStyles.propTableTh : {};
    const tdStyle = useTheme ? propTableStyles.propTableTd : {};

    return (
      <table style={useTheme ? propTableStyles.propTable : {}} className="propTable">
        <thead>
          <tr>
            <th style={thStyle} className="propTable-th">Property</th>
            <th style={thStyle} className="propTable-th">PropType</th>
            <th style={thStyle} className="propTable-th">Required</th>
            <th style={thStyle} className="propTable-th">Default</th>
          </tr>
        </thead>
        <tbody>
          {propsList.map(row => (
            <tr key={row.property}>
              <td style={tdStyle} className="propTable-td">{row.property}</td>
              <td style={tdStyle} className="propTable-td">{row.propType}</td>
              <td style={tdStyle} className="propTable-td">{row.required}</td>
              <td style={tdStyle} className="propTable-td">{row.defaultValue === undefined ? '-' : <PropVal val={row.defaultValue} />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

PropTable.displayName = 'PropTable';
PropTable.propTypes = propTypes;
