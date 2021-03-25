import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = () => <button>Click Me!</button>;
const $root = document.querySelector('#root');

ReactDOM.render(<CustomButton />, $root);
