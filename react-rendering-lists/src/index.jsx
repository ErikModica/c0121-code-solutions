import React from 'react';
import ReactDOM from 'react-dom';

class RenderMon extends React.Component {
  constructor(props) {
    super(props);
    this.pokedex = props.pokedex;
  }

  render() {
    const listItems = this.props.pokedex.map(pokemon => <li key={pokemon.number}>{pokemon.name}</li>);
    return <ul>{listItems}</ul>;
  }
}

const pokeman = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(<RenderMon pokedex={pokeman}/>, document.querySelector('#root'));
