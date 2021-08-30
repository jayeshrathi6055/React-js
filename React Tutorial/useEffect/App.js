import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(10);

  // useEffect is a part of hooks and all hooks work only in functional components.

  useEffect(() => {
    // It will invoked initially and any updates of both variable
    console.log("It will run for both");
  });
  useEffect(() => {
    // It will invoked for initially
    console.log("It will run initially");
  }, []);
  useEffect(() => {
    // It will invoked initially and any updates of data
    console.log("It will only for data");
  }, [data]);
  useEffect(() => {
    // It will invoked initially and any updates of count
    console.log("It will only for count");
  }, [count]);

  // useEffect work also for props

  return (
    <div>
      <h1>Data is : {data}</h1>
      <h1>Count is : {count}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Update Data
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
    </div>
  );
}
