import React, { Component } from 'react';
import './Ball.css'


export class Ball extends Component {
  render() {
    return (
        <div className="Ball">
           <h3 className="Ball-balls"> {this.props.num} </h3>
        </div>
    )
  }
}

export default Ball
