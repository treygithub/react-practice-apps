import React, {Component} from 'react'

class Button1 extends Component{
    render(){
  return (
    <div>
      <button onClick={this.props.handleClick}>
          CLICK ME
      </button>
    </div>
  )
}
}

export default Button1
