import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    toggled: false,
  }

  findHP = () => {
    let hp = null
    this.props.poke.stats.find(stat => {
      if(stat.name === "hp") {
        hp = stat.value
      }   
    })
    return hp
  }

  switchView = () => {
    // console.log(this.state.toggled)
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render() {
    // console.log(this.props.poke.sprites)
    
    return (
      <Card>
        <div >
          <div className="image" onClick={() => this.switchView()}>
            {/* <img src={ 
              this.props.toggled ? 
              this.props.poke.sprites.back :
              this.props.poke.sprites.front
              }
              alt="oh no!" /> */}
              { 
              this.state.toggled ? 
              <img src={this.props.poke.sprites.back} alt="oh no!" /> :
              <img src={this.props.poke.sprites.front} alt="oh no!" />
              }
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHP()} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
