import React from 'react'
import ReactDOM from 'react-dom'

class Car extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return <h2>I am a {this.props.color}Car!</h2>
    }
}
export default Car;


