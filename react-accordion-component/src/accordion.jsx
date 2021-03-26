import React from 'react';

class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = { bodyVisible: false };
    this.showBody = this.showBody.bind(this);
  }

  showBody(event) {
    this.setState({ bodyVisible: true });
    // console.log(this.props);
    // console.log(event.target);
  }

  render() {
    const topicsList = this.props.topics.map(topic => (
      <div key={topic.id}>
        <h1 key={topic.id} onClick={this.showBody} className="head">{topic.heading}</h1>
        <p className="body hidden">{topic.body}</p>
      </div>
    ));
    return topicsList;
  }
}

export default Accordion;
