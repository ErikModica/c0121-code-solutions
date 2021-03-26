import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics = [
  { id: 1, heading: 'Cool Stuff', body: 'super duper cool stuff is involved with this' },
  { id: 2, heading: 'Fun Stuff', body: 'super duper fun stuff is involved with this' },
  { id: 3, heading: 'Amazing Stuff', body: 'super duper amazing stuff is involved with this' },
  { id: 4, heading: 'Sugoi Stuff', body: 'super duper sugoi stuff is involved with this' },
  { id: 5, heading: 'Crazy Stuff', body: 'super duper crazy stuff is involved with this' }
];

ReactDOM.render(<Accordion topics={topics} />, document.querySelector('#root'));
