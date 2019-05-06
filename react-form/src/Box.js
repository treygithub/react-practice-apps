import React, { Component } from 'react'

export default class Box extends Component {
  render() {
      const {color,wh,ht} = this.props
    return (
      <div>
        <div style={{backgroundColor:`${color}`, width:`${wh}px`,height:`${ht}px`,display:'block'}}>

        </div>
      </div>
    )
  }
}
