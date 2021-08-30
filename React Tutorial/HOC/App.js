import React,{useState} from 'react'

export default function App() {
  return (
    <div>
      {/* HOC takes component as input and also return as output. It is used to do small changes in your component. */}
      <h1 style = {{textAlign:'center'}}>Higher order Component(HOC)</h1>
      {/* Normal Component */}
      <Counter /> 
      {/* With HOC */}
      <HOCBLACK cmp = {Counter} /> {/* Here "cmp" means component */}
      <HOCBLUE cmp = {Counter} />
    </div>
  )
}

// Making new component
function Counter(){
  const [count,setCount] = useState(0);
  return(
    <div style = {{textAlign:'center'}}>
      <h2>{count}</h2>
      <button onClick = {()=>setCount(count+1)}>Update count</button>
    </div>
  )
}

// Use of HOC
function HOCBLACK(props){
  return(
    <h2 style = {{color:'white',backgroundColor:'black',textAlign:'center'}}><props.cmp /></h2>
  )
}

function HOCBLUE(props){
  return(
    <h2 style = {{color:'white',backgroundColor:'blue',textAlign:'center'}}><props.cmp /></h2>
  )
}
