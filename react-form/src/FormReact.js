import React, { Component } from 'react';
import Box from './Box';
import BoxList from './BoxList'

export default class FormReact extends Component {
    state={
        ht:'',
        wh:'',
        cr:'',
        box:[]
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //this.props.handleUpdate(this.state)
    }
    handleChange = (e) => {
      this.setState({ [e.target.name] : e.target.value})
    }
  render() {
      const {ht,wh,cr} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <lable htmlFor="height">height</lable>
            <input onChange={this.handleChange} value={ht} name="ht" id="height" type="text"/>

            <lable  htmlFor="width">width</lable>
            <input onChange={this.handleChange} value={wh} name="wh" id="width" type="text"/>

            <lable htmlFor="color">color</lable>
            <input onChange={this.handleChange} value={cr} name="cr" id="color" type="text"/>
            <button>Submit</button>
        </form>
        <BoxList/>
      </div>
    )
  }
}
