import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  'https://www.snowmonkeyresorts.com/wp-content/uploads/2017/03/3333868_m-768x1024.jpg',
  'https://media.newyorker.com/photos/59095c501c7a8e33fb38c107/master/pass/Monkey-Selfie-DailyShouts.jpg',
  'https://i.natgeofe.com/n/f71dca54-6c24-4457-ae5d-3db951ca0634/rhesus-macaque_thumb.JPG',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLI04TTp7RWlbMtzVsErRjnwWdlotD2ajE1_SRmgPzTorYGzmnfySe_Pe8kDyoRCcM9U&usqp=CAU'
];

ReactDOM.render(<Carousel images={images} />, document.querySelector('#root'));
