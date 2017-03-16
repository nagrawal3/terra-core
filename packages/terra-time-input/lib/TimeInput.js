'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactInputMask = require('react-input-mask');

var _reactInputMask2 = _interopRequireDefault(_reactInputMask);

require('./TimeInput.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * A customized date input to use for entering and displaying the date.
   */
  startTime: _react.PropTypes.string,
  /**
  * A callback function to execute when a valid date is selected or entered.
  */
  onChange: _react.PropTypes.func
};

var defaultProps = {
  startTime: null
};

var TimeInput = function (_React$Component) {
  _inherits(TimeInput, _React$Component);

  function TimeInput(props) {
    _classCallCheck(this, TimeInput);

    var _this = _possibleConstructorReturn(this, (TimeInput.__proto__ || Object.getPrototypeOf(TimeInput)).call(this, props));

    _this.state = {
      startTime: props.startTime
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(TimeInput, [{
    key: 'handleChange',
    value: function handleChange(time) {
      this.setState({
        startTime: time
      });

      if (this.props.onChange) {
        this.props.onChange(time);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // const {
      //   startTime,
      //   ...customProps
      // } = this.props;

      var classes = (0, _classnames2.default)(['terra-TimeInput-input']);

      var defaultCharsRules = {
        t: '[AaPp]',
        9: '[0-9]',
        a: '[A-Za-z]',
        '*': '[A-Za-z0-9]'
      };

      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(_reactInputMask2.default, {
          className: 'terra-TimeInput-hour',
          mask: '99',
          maskChar: ' ',
          alwaysShowMask: false
          // maskChar={null}
          , formatChars: defaultCharsRules,
          placeholder: 'hh:'
        }),
        _react2.default.createElement(
          'label',
          null,
          ':'
        ),
        _react2.default.createElement(_reactInputMask2.default, {
          className: 'terra-TimeInput-minute',
          mask: '99',
          maskChar: ' ',
          alwaysShowMask: false,
          formatChars: defaultCharsRules,
          placeholder: 'mm AM'
        }),
        _react2.default.createElement(
          'label',
          null,
          '  AM'
        )
      );
    }
  }]);

  return TimeInput;
}(_react2.default.Component);

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;

exports.default = TimeInput;