import React from 'react';
import ReactDOM from 'react-dom';

const $hulloReact = React.createElement('h1', null, 'Hello, React!');
ReactDOM.render($hulloReact, document.querySelector('#root'));
