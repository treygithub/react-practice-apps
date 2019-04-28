import React, { Component } from 'react';
import Button1 from './Button1'

export default class ButtonApp extends Component {
    state={
        count:0
    }

    handleClick=(e)=>{
        let randNum = Math.floor(Math.random() * 10)
        console.log('randNum', randNum)
        this.setState((state,props)=>{
           return { count: randNum }
    })
    }
  render() {
      const {count} = this.state
    return (
      <div>
        {count}
        <p>{(count !== 7 ? <Button1 handleClick={this.handleClick}/>: 'winner')}</p>
      </div>
    );
  };
};
