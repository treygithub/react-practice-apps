import React, { Component } from 'react'
import axios from 'axios'

export default class KillingTime extends Component {
    state={
        email:'',
        password:''
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let {hhh} = this.state
            let request = await axios.get('https://www.google.com',hhh)
        } catch (error) {
            console.log('error', error)
        }

    }
    HandleChange = (e) => {
     this.setState({ [e.target.name] : e.target.value })
    }

  render() {

      const { email, password } = this.state

    return (

      <div>
        <div>
            <form onSubmit={this.handleSubmit}>
                <lable htmlFor="e1"> Email</lable>
                <input 
                type="text" 
                name="email" 
                value={email} 
                id="e1"
                onChange={(e)=>this.HandleChange(e)}
                />
                <lable htmlFor="e1"> Password</lable>
                <input 
                type="text" 
                name="password" 
                value={password} 
                id="p1"
                onChange={(e)=>this.HandleChange(e)}
                />
                <button>Submit</button>
            </form>
        </div>
      </div>

    )
  }
}
