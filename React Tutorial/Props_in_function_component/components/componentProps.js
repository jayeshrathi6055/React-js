import React from 'react'

export default function ComponentProps(props) {
    // Props = It is an object used to collect incoming information like name in this case.
    return (
        <div>
            <h1>Hello! {props.name}</h1>
        </div>
    )
}
