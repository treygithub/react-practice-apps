import React, { Component } from 'react';
import Ball from './Ball';
import  './Lotto.css'


export class Lotto extends Component {
    static defaultProps={
        title: 'Texas Lotto',
        maxBalls:6,
        maxNum:40
    };

    state={
        nums: Array.from({length:this.props.maxBalls})
    };

    generator = () => {
        this.setState((prevState) => { 
            return { nums: prevState.nums.map(
                e =>  Math.floor(Math.random() * this.props.maxNum) + 1
            )}
        })
    };

    handleClick = () => {
        this.generator();
    };

  render() {
      const {title,maxBalls,maxNum} = this.props;
      const {nums} = this.state;
    return (
      <section className="Lotto">
        <h1 className="Lotto-title">{title}</h1>
            <div className="Lotto-ball-container"> 
                {nums.map(e => <Ball num={e} />)}
            </div>
        <button className="Lotto-btn" onClick={this.handleClick}> Genorate Your Winning Numbers</button>
      </section>
    )
  }
}

export default Lotto
