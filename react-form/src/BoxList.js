import React, { Component } from 'react';
import Box from './Box';

export default class BoxList extends Component {
state={
    boxs:[
        {height:'30',width:'30',color:'red'},
        {height:'30',width:'30',color:'black'}
    ]
}

hell = (this.state.boxs.map((boxs)=>(
    <Box wh={boxs.width} ht={boxs.height} color={boxs.color} />
)))

handleUpdate = (e) => {
    this.setState((state) => { return { boxs: [...state.boxs,e] }})
    
    console.log('titty', this.state.boxs)
}

render() {

return (
    <div>
    {this.hell}
    </div>
)
}
}
