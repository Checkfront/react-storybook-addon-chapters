/* eslint-disable no-unused-expressions, import/no-extraneous-dependencies */
import { expect } from 'chai';
import addon, { setDefaults } from '../index';

const { describe, it } = global;

const DEFAULTS = {
  addonInfo: {
    inline: false,
    header: true,
    source: true,
    propTables: [],
    maxPropsIntoLine: 3,
    maxPropObjectKeys: 3,
    maxPropArrayLength: 3,
    maxPropStringLength: 50,
  },
  sectionOptions: {
    showSource: true,
    allowSourceToggling: true,
    showPropTables: false,
    allowPropTablesToggling: true,
    useTheme: true,
  },
};

describe('Chapters Addon', () => {
  describe('addWithChapters method', () => {
    it('does not break if no arguments are passed', () => {
      const scope = {
        add(name, callback) {
          callback();
        },
      };
      const fn = addon.addWithChapters.bind(scope);
      expect(fn).to.not.throw();
    });

    it('passes all expected params to the underlying Story component', () => {
      const context = {};
      const content = {
        subtitle: 'Story subtitle',
        info: 'Story info',
        chapters: [],
      };
      const scope = {
        add(name, callback) {
          const story = callback(context);
          expect(story.props.title).to.equal('Story title');
          expect(story.props.subtitle).to.equal(content.subtitle);
          expect(story.props.info).to.equal(content.info);
          expect(story.props.chapters).to.equal(content.chapters);
          expect(story.props.context).to.equal(context);
        },
      };
      addon.addWithChapters.call(scope, 'Story title', content);
    });
    it('can be passed a function as a configuration argument', () => {
      const expected = {
        subtitle: 'Story subtitle',
        info: 'Story info',
        chapters: [],
      };
      const content = () => expected;
      const scope = {
        add(name, callback) {
          const story = callback({});
          const actual = story.props;
          expect(actual).to.include.all.keys(expected);
        },
      };
      addon.addWithChapters.call(scope, 'Story title', content);
    });
  });

  describe('default options', () => {
    it('are what we expect', () => {
      const scope = {
        add(name, callback) {
          const story = callback({});
          expect(story.props.addonInfo).to.deep.equal(DEFAULTS.addonInfo);
          expect(story.props.sectionOptions).to.deep.equal(DEFAULTS.sectionOptions);
        },
      };
      addon.addWithChapters.call(scope);
    });

    it('can be overridden by setDefaults', () => {
      const addonInfo = { header: false, source: false };
      const sectionOptions = { showSource: false, showPropTables: true };

      setDefaults({ addonInfo, sectionOptions });
      const scope = {
        add(name, callback) {
          const story = callback({});
          expect(story.props.addonInfo.header).to.be.false;
          expect(story.props.addonInfo.header).to.be.false;
          expect(story.props.sectionOptions.showSource).to.be.false;
          expect(story.props.sectionOptions.showPropTables).to.be.true;
          // reset to default values
          setDefaults(DEFAULTS);
        },
      };
      addon.addWithChapters.call(scope);
    });
  });
});
