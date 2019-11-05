import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemon = () => {
    return this.props.pokemon.map( poke => {
      return <PokemonCard key={poke.id} poke={poke} />
    })
  }


  render() {
    // console.log(this.state.pokemon1)
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1><br></br>
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
