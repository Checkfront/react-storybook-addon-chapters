import React from 'react';
import PropVal from '@kadira/react-storybook-addon-info/dist/components/PropVal';
import theme from '../theme';

const PropTypesMap = new Map();
for (const typeName in React.PropTypes) {
  if (!React.PropTypes.hasOwnProperty(typeName)) {
    continue;
  }
  const component = React.PropTypes[typeName];
  PropTypesMap.set(component, typeName);
  PropTypesMap.set(component.isRequired, typeName);
}

const padding = 10;
const styles = {
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
      <table style={styles.propTable}>
        <thead>
          <tr>
            <th style={styles.propTableTh}>Property</th>
            <th style={styles.propTableTh}>PropType</th>
            <th style={styles.propTableTh}>Required</th>
            <th style={styles.propTableTh}>Default</th>
          </tr>
        </thead>
        <tbody>
          {propsList.map(row => (
            <tr key={row.property}>
              <td style={styles.propTableTd}>{row.property}</td>
              <td style={styles.propTableTd}>{row.propType}</td>
              <td style={styles.propTableTd}>{row.required}</td>
              <td style={styles.propTableTd}>{row.defaultValue === undefined ? '-' : <PropVal val={row.defaultValue} />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

PropTable.displayName = 'PropTable';
PropTable.propTypes = {
  type: React.PropTypes.func,
};
