import React from 'react';
import PropTypes from 'prop-types';
import PropVal from '@kadira/react-storybook-addon-info/dist/components/PropVal';
import theme from '../theme';

const PropTypesMap = new Map();
for (const typeName in PropTypes) {
  if (!PropTypes.hasOwnProperty(typeName)) {
    continue;
  }
  const component = PropTypes[typeName];
  PropTypesMap.set(component, typeName);
  PropTypesMap.set(component.isRequired, typeName);
}

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
      for (const property in component.propTypes) {
        if (!component.propTypes.hasOwnProperty(property)) {
          continue;
        }
        const typeInfo = component.propTypes[property];
        const propType = PropTypesMap.get(typeInfo) || 'other';
        const required = typeInfo.isRequired === undefined ? 'Yes' : 'No';
        props[property] = { property, propType, required };
      }
    }

    if (component.defaultProps) {
      for (const property in component.defaultProps) {
        if (!component.defaultProps.hasOwnProperty(property)) {
          continue;
        }
        const value = component.defaultProps[property];
        if (value === undefined) {
          continue;
        }
        if (!props[property]) {
          props[property] = { property };
        }
        props[property].defaultValue = value;
      }
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
PropTable.propTypes = {
  type: PropTypes.func,
};
