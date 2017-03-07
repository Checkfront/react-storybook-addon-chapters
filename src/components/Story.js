import React, { Component, PropTypes } from 'react';
import { baseFonts } from '@kadira/react-storybook-addon-info/dist/components/theme';
import Chapter from './Chapter';
import renderInfoContent from './info-content';
import theme from './theme';

const styles = {
  story: {
    ...baseFonts,
  },
  header: {
    marginBottom: 60,
  },
  title: {
    color: theme.grayDarkest,
    fontSize: 36,
    marginBottom: 10,
  },
  subtitle: {
    color: theme.grayDark,
    fontSize: 24,
    marginBottom: 20,
    marginTop: 0,
  },
  info: theme.infoStyle,
};

export default class Story extends Component {
  render() {
    const { context, subtitle, title, info, chapters } = this.props;
    return (
      <div style={styles.story}>
        <div style={styles.header}>
          {title && <h1 style={styles.title}>{title}</h1>}
          {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
          {info && <div style={styles.info}>{renderInfoContent(info)}</div>}
        </div>
        {chapters.map((chapter, index) => <Chapter key={index}
          context={context}
          { ...chapter}
          />
        )}
      </div>
    );
  }
}

Story.displayName = 'Story';
Story.propTypes = {
  context: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  info: PropTypes.string,
  chapters: PropTypes.arrayOf(PropTypes.object),
};
Story.defaultProps = {
  context: {},
  title: '',
  subtitle: '',
  info: '',
  chapters: [],
};
