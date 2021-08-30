import React,{forwardRef} from 'react'

function user(props,ref) {  // ref is used to recieve ref comming from parent
    return (
        <div>
            <input type = 'text' ref = {ref} /> {/* Here we apply ref */}
        </div>
    )
}

export default forwardRef(user);  // forwardRef is used to passing a ref through a component to one of its children.