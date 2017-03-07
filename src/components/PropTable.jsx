import React from 'react';
import PropVal from '@kadira/react-storybook-addon-info/dist/components/PropTable';
import theme from '../theme';

const PropTypesMap = new Map();
for (const typeName in React.PropTypes) {
  if (!React.PropTypes.hasOwnProperty(typeName)) {
    continue;
  }
  const type = React.PropTypes[typeName];
  PropTypesMap.set(type, typeName);
  PropTypesMap.set(type.isRequired, typeName);
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
    const type = this.props.type;

    if (!type) {
      return null;
    }

    const props = {};

    if (type.propTypes) {
      for (const property in type.propTypes) {
        if (!type.propTypes.hasOwnProperty(property)) {
          continue;
        }
        const typeInfo = type.propTypes[property];
        const propType = PropTypesMap.get(typeInfo) || 'other';
        const required = typeInfo.isRequired === undefined ? 'Yes' : 'No';
        props[property] = { property, propType, required };
      }
    }

    if (type.defaultProps) {
      for (const property in type.defaultProps) {
        if (!type.defaultProps.hasOwnProperty(property)) {
          continue;
        }
        const value = type.defaultProps[property];
        if (value === undefined) {
          continue;
        }
        if (!props[property]) {
          props[property] = { property };
        }
        props[property].defaultValue = value;
      }
    }

    const array = Object.values(props);
    if (!array.length) {
      return <small>No propTypes defined!</small>;
    }
    array.sort(function (a, b) {
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
          {array.map(row => (
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
