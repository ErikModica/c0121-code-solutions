import React from 'react';

class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentID: null };
    this.closeBody = this.closeBody.bind(this);
    this.decipherID = this.decipherID.bind(this);
  }

  decipherID(event) {
    for (let i = 0; i < this.props.topics.length; i++) {
      if (this.props.topics[i].heading === event.target.textContent && this.state.currentID !== this.props.topics[i].id) {
        this.setState({ currentID: this.props.topics[i].id });
        break;
      } else if (this.state.currentID === this.props.topics[i].id) {
        this.setState({ currentID: null });
      }
    }
  }

  closeBody() {
    this.setState({ currentID: null });
  }

  render() {
    const topicsList = this.props.topics.map(topic => (
      <div key={topic.id}>
        <h1 onClick={this.decipherID} className="head">{topic.heading}</h1>
        <p onClick={this.closeBody} className={topic.id === this.state.currentID ? 'body' : 'body hidden'}>{topic.body}</p>
      </div>
    ));
    return topicsList;
  }
}

export default Accordion;
