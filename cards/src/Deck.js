import React, { Component } from 'react'
import axios from 'axios'

const url = "https://deckofcardsapi.com/api/deck/new/shuffle/"

export class Deck extends Component {
    constructor(props){
        super(props);
        this.state={
            deck:[]
        }
    }
    async componentDidMount(){
        try {
            const res = await axios.get(`${url}`);
            this.setState((state, props) => { return { deck:res.data }})
            console.log('this.state', this.state.deck)
        } catch (error) {
            console.log('Trey you got an error', error)
        }
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Deck