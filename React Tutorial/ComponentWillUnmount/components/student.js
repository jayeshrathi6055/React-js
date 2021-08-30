import React from 'react'

export default class Student extends React.Component {
    componentWillUnmount(){ // It is invoked immediately before a component is unmounted and destroyed. It means if this component is not used anywhere then it will invoked. It is used to clear all running things if it is not used.
        console.log('componentWillUnmount');
      }
    render(){
        return (
            <div>
                <h3>Student component activated</h3>
            </div>
        )
    }
}
