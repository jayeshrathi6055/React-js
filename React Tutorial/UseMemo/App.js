import React from 'react'

export default function App() {

  const [count,setCount] = React.useState(0);
  const [item,setItem] = React.useState(10);

  function countWithoutMemo(){
    console.log('Continous Calling on rerender');
    return count+5;
  }

  // Use Memo is almost same as UseEffect but the difference is it takes user defined function 
  const countWithMemo = React.useMemo(()=>{
    console.log('Memo Called');
    return count+10;
  },[count])

  return (
    <div>
      <h1>count : {count}</h1>
      <h1>item : {item}</h1>
      <h1>{countWithoutMemo()}</h1>
      <h1>{countWithMemo}</h1>  {/* Do not add brackets() it treated as variable */}
      <button onClick = {()=>setCount(count+1)}>Update Count</button>
      <button onClick = {()=>setItem(item+1)}>Update Item</button>
    </div>
  )
}
