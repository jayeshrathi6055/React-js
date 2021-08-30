import React from 'react'

export default function User(props) {
    return (
        <div>
            <h1>This is user Component</h1>
            <button onClick = {props.data}>Click Me</button>
        </div>
    )
}
