import React from 'react';
import PropTypes from 'prop-types';
import PropVal from '@storybook/addon-info/dist/components/PropVal';
import theme from '../theme';

const propTypes = {
  component: PropTypes.func,
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
    const component = this.props.component;

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

    return (
      <table style={propTableStyles.propTable}>
        <thead>
          <tr>
            <th style={propTableStyles.propTableTh}>Property</th>
            <th style={propTableStyles.propTableTh}>PropType</th>
            <th style={propTableStyles.propTableTh}>Required</th>
            <th style={propTableStyles.propTableTh}>Default</th>
          </tr>
        </thead>
        <tbody>
          {propsList.map(row => (
            <tr key={row.property}>
              <td style={propTableStyles.propTableTd}>{row.property}</td>
              <td style={propTableStyles.propTableTd}>{row.propType}</td>
              <td style={propTableStyles.propTableTd}>{row.required}</td>
              <td style={propTableStyles.propTableTd}>{row.defaultValue === undefined ? '-' : <PropVal val={row.defaultValue} />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

PropTable.displayName = 'PropTable';
PropTable.propTypes = propTypes;
