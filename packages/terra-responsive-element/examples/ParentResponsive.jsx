import React from 'react';
import ResponsiveElement from '../src/ResponsiveElement';

class ParentResponsive extends React.Component {
  constructor() {
    super();
    this.state = { width: '20%' };
    this.interval = null;
  }

  componentDidMount() {
    setTimeout(() => this.setState({ width: '90%' }), 1000);
    this.interval = setInterval(() => { this.setState({ width: (this.state.width === '90%' ? '20%' : '90%') }); }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }

  render() {
    const tiny = <div>Tiny</div>;
    const small = <div>Small</div>;
    const medium = <div>Medium</div>;
    const large = <div>Large</div>;
    const huge = <div>Huge</div>;
    const defaultElement = <div>Default</div>;
    return (
      <div style={{ width: this.state.width, border: '1px dashed grey', padding: '10px', transition: 'all 5.0s ease-in-out' }}>
        <ResponsiveElement
          tiny={tiny}
          small={small}
          medium={medium}
          large={large}
          huge={huge}
          defaultElement={defaultElement}
        />
      </div>
    );
  }
}

export default ParentResponsive;
