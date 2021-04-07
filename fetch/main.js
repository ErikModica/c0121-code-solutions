const pokemonID = 25;

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
  .then(res => res.json())
  .then(data => console.log(data));
