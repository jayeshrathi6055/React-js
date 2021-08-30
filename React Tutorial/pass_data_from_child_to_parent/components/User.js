import React from 'react'

export default function User(props) {

    let name = "Jayesh";
    let obj = {skill:'skillf'};

    return (
        <div>
            <h1>This is user Component</h1>
            {/* Send data to parent(String) */}
            <button onClick = {()=>props.data({name})}>For Name</button> 
            {/* Send data to parent(Object) */}
            <button onClick = {()=>props.data1({obj})}>For Skill</button>
        </div>
    )
}
