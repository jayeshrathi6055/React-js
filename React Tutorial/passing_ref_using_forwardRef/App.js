import React,{useRef} from 'react'
import User from './components/user';

export default function App() {
  let inputRef = useRef(null);

  function updateInput(){
    console.log(inputRef);
    inputRef.current.value = "change value";
    inputRef.current.style.color = "blue";
    inputRef.current.focus();
  }
  return (
    <div>
      <User ref = {inputRef}/> {/* ref attribute is used to send ref to child */}
      <button onClick = {updateInput}>Update Input</button>
    </div>
  )
}
