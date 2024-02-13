const pokemonDetails = document.getElementById('pokemonDetails')

function convertPokemonDetailsToLi(pokemon) {
  return `
    <li class="about-info">
      <ol class="info">
        <li class="info-header">Species:</li>
        <li>${pokemon.species}</li>
      </ol>
    </li>
    <li class="about-info">
      <ol class="info">
        <li class="info-header">Height:</li>
        <li>${pokemon.height}</li>
      </ol>
    </li>
    <li class="about-info">
      <ol class="info">
        <li class="info-header">Weight:</li>
        <li>${pokemon.weight}</li>
      </ol>
    </li>
    <li class="about-info">
      <ol class="info">
        <li class="info-header">Abilities:</li>
        <li>Overgrow, Chlorophyl</li>
      </ol>
    </li>
  `
}



function loadPokemonDetails() {
  pokeApi.getPokemons(offset = 0 , limit = 1).then((pokemons = []) => {
    pokemonDetails.innerHTML = pokemons.map(convertPokemonDetailsToLi).join('')
  })
    // .then((pokemons = []) => {
    //   const newHtml = pokemons.map(convertPokemonDetailsToLi).join('')
    //   pokemonDetails.innerHTML += newHtml
    // })
}

loadPokemonDetails()