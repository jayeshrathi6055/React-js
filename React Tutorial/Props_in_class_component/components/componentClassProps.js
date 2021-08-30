import React from 'react';

class ComponentClassProps extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello! {this.props.name}</h1>
                <h1>EmailId : {this.props.email}</h1>
            </div>
        )
    }
}

export default ComponentClassProps;