import React from "react";

export default function App() {
  const students = ["jayesh", "aman", "devesh", "divyank"];
  const obj = [
    { name: "jayesh", language: "python" },
    { name: "aman", language: "javascript" },
    { name: "devesh", language: "java" },
  ];
  return (
    <div>
      {/* Use of Map function with Array */}
      {students.map((element,index) => (
        // key is used to identify each child uniquely
        <h1 key={index}>{element}</h1>
      ))}

      {/* Use of map function with Array Objects */}
      <table border="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {obj.map((data, index) => (
            // key is used to identify each child uniquely
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
