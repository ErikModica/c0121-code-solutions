import React from 'react';

class AppDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({ menuHidden: true });
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu() {
    this.setState({ menuHidden: false });
  }

  hideMenu() {
    this.setState({ menuHidden: true });
  }

  render() {
    const menuHidden = this.state.menuHidden;
    if (!menuHidden) {
      return (
        <div className="page">
          <div className="menu-container">
            <h1 onClick={this.hideMenu}>Menu</h1>
            <h2 onClick={this.hideMenu}>About</h2>
            <h2 onClick={this.hideMenu}>Get Started</h2>
            <h2 onClick={this.hideMenu}>Sign In</h2>
          </div>
          <div onClick={this.hideMenu} className="background"></div>
        </div>
      );
    } else {
      return (
        <i onClick={this.showMenu} className="fas fa-bars"></i>
      );
    }
  }
}

export default AppDrawer;
