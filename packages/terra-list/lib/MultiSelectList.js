'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: _react.PropTypes.node,
  /**
   * Whether or not the child list items should have a border color applied.
   */
  isDivided: _react.PropTypes.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: _react.PropTypes.func,
  /**
   * The maximum number of list items that can be selected.
   */
  maxSelectionCount: _react.PropTypes.number
};

var defaultProps = {
  children: [],
  isDivided: false,
  onChange: undefined,
  maxSelectionCount: undefined
};

var MultiSelectList = function (_React$Component) {
  _inherits(MultiSelectList, _React$Component);

  _createClass(MultiSelectList, null, [{
    key: 'selectedIndexesFromItems',
    value: function selectedIndexesFromItems(items, maxSelectionCount) {
      var selectedIndexes = [];
      for (var i = 0; i < items.length; i += 1) {
        if (selectedIndexes.length >= maxSelectionCount) {
          break;
        }

        if (items[i].props.isSelected) {
          selectedIndexes.push(i);
        }
      }

      return selectedIndexes;
    }
  }]);

  function MultiSelectList(props) {
    _classCallCheck(this, MultiSelectList);

    var _this = _possibleConstructorReturn(this, (MultiSelectList.__proto__ || Object.getPrototypeOf(MultiSelectList)).call(this, props));

    _this.handleSelection = _this.handleSelection.bind(_this);
    _this.state = { selectedIndexes: MultiSelectList.selectedIndexesFromItems(_this.props.children, _this.validatedMaxCount()) };
    return _this;
  }

  _createClass(MultiSelectList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextIndexes = MultiSelectList.selectedIndexesFromItems(nextProps.children, this.validatedMaxCount());

      if (this.shouldUpdateIndexes(nextIndexes)) {
        this.setState({ selectedIndexes: nextIndexes });
      }
    }
  }, {
    key: 'shouldUpdateIndexes',
    value: function shouldUpdateIndexes(indexes) {
      if (indexes.length !== this.state.selectedIndexes.length) {
        return true;
      }

      for (var i = indexes.length - 1; i >= 0; i -= 1) {
        if (this.state.selectedIndexes.includes(indexes[i]) !== true) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: 'handleSelection',
    value: function handleSelection(event, index) {
      var newIndexes = [];
      if (this.state.selectedIndexes.length) {
        if (this.state.selectedIndexes.includes(index)) {
          newIndexes = this.state.selectedIndexes.slice();
          newIndexes.splice(newIndexes.indexOf(index), 1);
        } else {
          newIndexes = this.state.selectedIndexes.concat([index]);
        }
      } else {
        newIndexes.push(index);
      }

      this.setState({ selectedIndexes: newIndexes });
    }
  }, {
    key: 'shouldHandleSelection',
    value: function shouldHandleSelection(index) {
      if (this.state.selectedIndexes.length < this.validatedMaxCount()) {
        return true;
      }
      if (this.state.selectedIndexes.includes(index)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'cloneChildItems',
    value: function cloneChildItems(items) {
      var _this2 = this;

      var disableUnselectedItems = this.state.selectedIndexes.length >= this.validatedMaxCount();

      return items.map(function (item, index) {
        var wrappedOnClick = _this2.wrappedOnClickForItem(item, index);
        var newProps = _this2.newPropsForItem(item, index, wrappedOnClick, disableUnselectedItems);

        return _react2.default.cloneElement(item, newProps);
      });
    }
  }, {
    key: 'wrappedOnClickForItem',
    value: function wrappedOnClickForItem(item, index) {
      var _this3 = this;

      var initialOnClick = item.props.onClick;
      return function (event) {
        if (_this3.shouldHandleSelection(index)) {
          _this3.handleSelection(event, index);

          if (_this3.onChange) {
            _this3.onChange(event, _this3.state.selectedIndexes);
          }
        }

        if (initialOnClick) {
          initialOnClick(event);
        }
      };
    }
  }, {
    key: 'newPropsForItem',
    value: function newPropsForItem(item, index, onClick, disableUnselectedItems) {
      var isSelected = this.state.selectedIndexes.includes(index);

      var newProps = { onClick: onClick };
      if (isSelected !== item.isSelected) {
        newProps.isSelected = isSelected;
      }

      if (item.props.isSelectable === undefined) {
        newProps.isSelectable = true;
      } else if (!item.props.isSelectable) {
        newProps = {};
      }

      if (disableUnselectedItems && isSelected !== true) {
        newProps.isSelectable = false;
      }
      return newProps;
    }
  }, {
    key: 'validatedMaxCount',
    value: function validatedMaxCount() {
      if (this.props.maxSelectionCount !== undefined) {
        return this.props.maxSelectionCount;
      }
      return this.props.children.length;
    }
  }, {
    key: 'unusedVariables',
    value: function unusedVariables(variable) {
      return variable === this;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isDivided = _props.isDivided,
          onChange = _props.onChange,
          maxSelectionCount = _props.maxSelectionCount,
          customProps = _objectWithoutProperties(_props, ['children', 'isDivided', 'onChange', 'maxSelectionCount']);

      var clonedChildItems = this.cloneChildItems(children);

      // Figure out how to handle this scenario.
      this.unusedVariables(onChange);
      this.unusedVariables(maxSelectionCount);

      return _react2.default.createElement(
        _List2.default,
        _extends({
          isDivided: isDivided
        }, customProps),
        clonedChildItems
      );
    }
  }]);

  return MultiSelectList;
}(_react2.default.Component);

MultiSelectList.propTypes = propTypes;
MultiSelectList.defaultProps = defaultProps;
MultiSelectList.Item = _List2.default.Item;

exports.default = MultiSelectList;