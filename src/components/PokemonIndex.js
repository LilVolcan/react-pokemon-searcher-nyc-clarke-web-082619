import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [], 
    search: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemon => {
        this.setState({
          pokemon: pokemon
        })
      })
  }

  // handleSearch = (event) => {
  //   event.persist();
  //   console.log(event.target.value)
  // }

  // addPokemon = () => {
    
    // if we are making a copy -- longhand
    // let pokemonCopy = [...this.state.pokemon]

    // if we are adding single pokemong to our copy -- longhand
    // pokemonCopy.push(pokemon)

    // the above is equal to the below

    // shorthand
    // this.setState({
    //    pokemon: [...this.state.pokemon, newPokemon]
    // })

  // }


  handleNewPokemon = (name, hp, front, back) => {
    console.log("fetch info ", name, hp, front, back )
    fetch('http://localhost:3000/pokemon', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name, 
        stats: [{
          "value": hp,
          "name": "hp"
        }],
        sprites: {
          "front": front,
          "back": back
        }
      })
    }).then(resp => resp.json())
      .then(newPoke => {
        this.setState({
          pokemon: [...this.state.pokemon, newPoke]
        })
    })
  }
  

  render() {
    // console.log(this.state.pokemon)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleNewPokemon={this.handleNewPokemon} />
        <br />
        {/* <Search onSearchChange={_.debounce(() => console.log('hey')), 500)} showNoResults={false} /> */}
        <br />
        <PokemonCollection pokemon={this.state.pokemon} />
      </div>
    )
  }
}

export default PokemonPage
