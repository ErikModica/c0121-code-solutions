const library = [
  {
    isbn: '10101010',
    title: 'Cool Book',
    author: 'Gerald'
  },
  {
    isbn: '20202020',
    title: 'Rad Book',
    author: 'George'
  },
  {
    isbn: '30303030',
    title: 'Good Book',
    author: 'Gregory'
  }
];

console.log('library array: ', library);
console.log('type of library array: ', typeof library);

const jsonLibrary = JSON.stringify(library);
console.log('JSON library array: ', jsonLibrary);
console.log('type of JSON library array: ', typeof jsonLibrary);

const jsonManualString = '{"id":111222333,"name":"Gunther"}';
console.log('JSON manual string: ', jsonManualString);
console.log('type of JSON manual string: ', typeof jsonManualString);

const parsedString = JSON.parse(jsonManualString);
console.log('parsed string: ', parsedString);
console.log('type of parsed string: ', typeof parsedString);
