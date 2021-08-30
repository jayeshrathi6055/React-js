import React,{useRef} from 'react'

export default function App() {
  let inputRef = useRef(null);  // It is use to manipulate DOM directly but it is not recommended.

  function getVal(){
    console.log(inputRef);
    inputRef.current.value = 'hello';
    inputRef.current.style.backgroundColor = 'black';
    inputRef.current.style.color = 'white';
    inputRef.current.focus();
  }
  return (
    <div>
        <h1>Use REF Component</h1>
        {/* Don't forget to write attribute ref where you want to manipulate */}
        <input type="text" ref={inputRef} />{"  "}
        <button onClick={() => getVal()}>Click Me</button>{"  "}
    </div>
  )
}
