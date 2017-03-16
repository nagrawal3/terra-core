'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = function SvgIcon(customProps) {
  var attributes = _extends({}, customProps);

  return _react2.default.createElement(
    _IconBase2.default,
    attributes,
    _react2.default.createElement('path', { d: 'M28 30.2V2c0-1.1-.9-2-2-2H5C3.9 0 3 .9 3 2v34c0 1.1.9 2 2 2h18.5l4.5-7.8zM12.5 3.9c0-.5.4-.9.9-.9h4.1c.5 0 .9.4.9.9V4c0 .5-.4.9-.9.9h-4.1c-.5 0-.9-.4-.9-1zM6 8h19v20H6V8zm9.5 27c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' }),
    _react2.default.createElement('path', { fill: '#E50000', d: 'M21.6 48c-.5 0-.8-.4-.5-.9l11.4-19.8c.3-.5.7-.5 1 0l11.4 19.8c.3.5 0 .9-.5.9H21.6z' }),
    _react2.default.createElement('path', { fill: '#FFF', d: 'M32 46h2v-2h-2v2zm0-13v9h2v-9h-2z' })
  );
};

SvgIcon.displayName = "IconDeviceAlert";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */