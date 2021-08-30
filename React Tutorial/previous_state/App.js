import React from 'react'

export default function App() {
  let [count,setCount] = React.useState(0);
  // Get previous value of count
  function value(){
    setCount((prev)=>{ // "prev" is a previous value of count
      console.log(prev);
      return count+1;
    })
  }
  return (
    <div>
      <h1>count is {count}</h1>
      <button onClick = {value}>Update</button>
    </div>
  )
}
