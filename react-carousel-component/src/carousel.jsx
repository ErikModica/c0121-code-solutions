import React from 'react';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({ currentIndex: 0 });
    this.renderBalls = this.renderBalls.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.chevronClick = this.chevronClick.bind(this);
    this.goToBall = this.goToBall.bind(this);
    this.intervalID = setInterval(this.changeImage, 3000);
  }

  changeImage() {
    if (this.state.currentIndex < this.props.images.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    } else {
      this.setState({ currentIndex: 0 });
    }
  }

  chevronClick(event) {
    this.resetInterval();
    if (event.target.className === 'fas fa-chevron-left') {
      if (this.state.currentIndex > 0) {
        this.setState({ currentIndex: this.state.currentIndex - 1 });
      } else {
        this.setState({ currentIndex: this.props.images.length - 1 });
      }
    } else {
      if (this.state.currentIndex < this.props.images.length - 1) {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
      } else {
        this.setState({ currentIndex: 0 });
      }
    }
  }

  goToBall(event) {
    this.resetInterval();
    this.setState({ currentIndex: parseInt(event.target.id) });
  }

  resetInterval() {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.changeImage, 3000);
  }

  renderBalls() {
    const ballList = [];
    for (let i = 0; i < this.props.images.length; i++) {
      ballList.push(<i onClick={this.goToBall} id={i} key={i} className={this.state.currentIndex === i ? 'ball fas fa-circle' : 'ball far fa-circle'} ></i>);
    }
    return ballList;
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="bumper-column">
            <i onClick={this.chevronClick} className="fas fa-chevron-left"></i>
          </div>
          <div className="img-column">
            <img src={this.props.images[this.state.currentIndex]}></img>
          </div>
          <div className="bumper-column">
            <i onClick={this.chevronClick} className="fas fa-chevron-right"></i>
          </div>
        </div>
          <div className="row">
            <div className="cycle-column">{this.renderBalls()}</div>
          </div>
       </>
    );
  }
}

export default Carousel;
