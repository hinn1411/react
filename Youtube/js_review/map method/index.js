
// Challenge 1:
const nums = [1, 2, 3, 4];
// output: [1,4,9,14]
let squared = nums.map(number => number * number);
console.log(squared);


// Challenge 2:
const names = ['alice', 'bob', 'charlie', 'danielle'];
// output: ['Alice', 'Bob', 'Charlie', 'Danielle']
let res = names.map(x => x[0].toUpperCase() + x.slice(1));
console.log(res);

// Challenge 3:
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// output: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
let paraOfPokemon = pokemon.map(pokemon => "<p>" + pokemon + "</p>");
console.log(paraOfPokemon);