'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _comment = require('terra-icon/lib/icon/themeable/comment.svg');

var _comment2 = _interopRequireDefault(_comment);

var _Display = require('./Display');

var _Display2 = _interopRequireDefault(_Display);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  className: _react.PropTypes.string,
  text: _react.PropTypes.string,
  isTruncated: _react.PropTypes.bool
};

var defaultProps = {
  className: '',
  text: '',
  isTruncated: false
};

var Comment = function Comment(_ref) {
  var className = _ref.className,
      text = _ref.text,
      isTruncated = _ref.isTruncated,
      customProps = _objectWithoutProperties(_ref, ['className', 'text', 'isTruncated']);

  var commentClassNames = (0, _classnames2.default)(['terra-CompactCard-comment', className]);

  var commentIcon = _react2.default.createElement(_comment2.default, null);

  return _react2.default.createElement(_Display2.default, _extends({
    text: text,
    isTruncated: isTruncated,
    icon: commentIcon,
    className: commentClassNames
  }, customProps));
};

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

exports.default = Comment;