import React, { PropTypes } from 'react';
import classNames from 'classnames';
import InputElement from 'react-input-mask';
import './TimeInput.scss';

const propTypes = {
  /**
   * A customized date input to use for entering and displaying the date.
   */
  startTime: PropTypes.string,
    /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  startTime: null,
};

class TimeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: props.startTime,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(time) {
    this.setState({
      startTime: time,
    });

    if (this.props.onChange) {
      this.props.onChange(time);
    }
  }

  render() {
    // const {
    //   startTime,
    //   ...customProps
    // } = this.props;

    const classes = classNames(['terra-TimeInput-input']);

    const defaultCharsRules = {
      t: '[AaPp]',
      9: '[0-9]',
      a: '[A-Za-z]',
      '*': '[A-Za-z0-9]',
    };

    return (
      <div className={classes}>
        <InputElement
          className="terra-TimeInput-hour"
          mask="99"
          maskChar=" "
          alwaysShowMask={false}
          // maskChar={null}
          formatChars={defaultCharsRules}
          placeholder="hh:"
        />
        <label>:</label>
        <InputElement
          className="terra-TimeInput-minute"
          mask="99"
          maskChar=" "
          alwaysShowMask={false}
          formatChars={defaultCharsRules}
          placeholder="mm AM"
        />
        <label>  AM</label>
      </div>
    );
  }
}

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;

export default TimeInput;
