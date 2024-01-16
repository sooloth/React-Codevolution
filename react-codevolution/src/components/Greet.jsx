import React from 'react'

// function component
const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello Group{props.className}</h1>
        </div>
    )
}

export default Greet;
