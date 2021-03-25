import React from 'react';

class HotButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let clicks = this.state.clicks;
    clicks++;
    this.setState({ clicks: clicks });
  }

  render() {
    const clicks = this.state.clicks;
    if (clicks <= 3) {
      return <button onClick={this.handleClick} className="purple">Hot Button</button>;
    } else if (clicks <= 6) {
      return <button onClick={this.handleClick} className="lavender">Hot Button</button>;
    } else if (clicks <= 9) {
      return <button onClick={this.handleClick} className="red">Hot Button</button>;
    } else if (clicks <= 12) {
      return <button onClick={this.handleClick} className="orange">Hot Button</button>;
    } else if (clicks <= 15) {
      return <button onClick={this.handleClick} className="yellow">Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className="white">Hot Button</button>;
    }
  }
}

export default HotButton;
