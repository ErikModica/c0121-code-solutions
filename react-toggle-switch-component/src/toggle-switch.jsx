import React from 'react';

class ToggleSwitch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.toggleOn = this.toggleOn.bind(this);
    this.toggleOff = this.toggleOff.bind(this);
  }

  toggleOn() {
    this.setState({ isOn: true });
  }

  toggleOff() {
    this.setState({ isOn: false });
  }

  render() {
    const isOn = this.state.isOn;
    if (isOn) {
      return (
        <div className="switch-container">
          <div className="switch on-switch">
            <div onClick={this.toggleOff} className="slider on-slider"></div>
          </div>
          <div className="status">ON</div>
        </div>
      );
    } else {
      return (
        <div className="switch-container off-container">
          <div className="switch">
            <div onClick={this.toggleOn} className="slider"></div>
          </div>
          <div className="status">OFF</div>
        </div>
      );
    }
  }

}

export default ToggleSwitch;
