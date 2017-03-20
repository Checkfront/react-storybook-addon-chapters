'use strict';

import _Object$defineProperty from 'babel-runtime/core-js/object/define-property';
import _Object$keys from 'babel-runtime/core-js/object/keys';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Theme = undefined;

var _Chapter = require('./components/Chapter');

_Object$keys(_Chapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Chapter[key];
    }
  });
});

var _PropTable = require('./components/PropTable');

_Object$keys(_PropTable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PropTable[key];
    }
  });
});

var _Section = require('./components/Section');

_Object$keys(_Section).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Section[key];
    }
  });
});

var _Story = require('./components/Story');

_Object$keys(_Story).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Story[key];
    }
  });
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Story2 = _interopRequireDefault(_Story);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Theme = _theme2.default;
exports.default = {
  addWithChapters: function addWithChapters(storyName) {
    var storyContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return this.add(storyName, function (context) {
      return _react2.default.createElement(_Story2.default, {
        context: context,
        title: storyName,
        subtitle: storyContent.subtitle,
        info: storyContent.info,
        chapters: storyContent.chapters
      });
    });
  }
};