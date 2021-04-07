import React from 'react';

class StopWatch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { timerOn: false, time: 0 };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.resetTime = this.resetTime.bind(this);
  }

  startTimer() {
    this.setState({ timerOn: true });
    this.intervalID = setInterval(this.tick, 1000);
  }

  tick() {
    let time = this.state.time;
    time++;
    this.setState({ time: time });
  }

  stopTimer() {
    this.setState({ timerOn: false });
    clearInterval(this.intervalID);
  }

  resetTime() {
    this.setState({ time: 0 });
  }

  render() {
    const timerOn = this.state.timerOn;
    if (!timerOn) {
      return (
        <div className="stopwatch-container">
          <div onClick={this.resetTime} className="face">
            <div className="time">{this.state.time}</div>
          </div>
          <i onClick={this.startTimer} className="fas fa-play"></i>
        </div>
      );
    } else if (timerOn) {
      return (
        <div className="stopwatch-container">
          <div className="face">
            <div className="time">{this.state.time}</div>
          </div>
          <i onClick={this.stopTimer} className="fas fa-pause"></i>
        </div>
      );
    }
  }
}

export default StopWatch;
