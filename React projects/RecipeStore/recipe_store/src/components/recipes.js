import React from "react";
import { Link } from "react-router-dom";
import "./recipe.css";
import { Jumbotron, Button, Form, FormControl } from "react-bootstrap";

export default function Recipes() {
  let [item, setItem] = React.useState([]);
  const [find,setFind] = React.useState();

  function makeArray(str) {
    let a = str;
    let arr = [];
    let k = "";

    for (let index = 0; index < a.length; index++) {
      if (a[index] === "<") {
        arr.push(k);
        index = index + 4;
        k = "";
      } else if (index === a.length - 1) {
        k += a[index];
        arr.push(k);
        k = "";
      } else {
        k += a[index];
      }
    }
    return arr;
  }

  function allRecipe(){
    fetch("http://localhost:8000/allRecipe")
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      });
  }

  React.useEffect(() => {
    allRecipe();
  }, []);

  function search(find){
    if(find!=undefined){
    let arr = []
    find = find.toLowerCase();
    find = new RegExp(find);
    for (const iterator of item) {
      let result = find.test(iterator.foodName.toLowerCase());
      if(result){
        arr.push(iterator);
      }
    }
    setItem(arr);
  }else{
    allRecipe();
  }
  }

  React.useEffect(()=>{
    search();
  },[find])

  return (
    <div>
      <nav className="container1">
        <h1>Recipe Store</h1>
        <div className="container7">
          <span className="home newHome">
            <Link to="/">Home</Link>
          </span>
          <span className="recipes newRecipes">
            <Link to="/recipes">Recipes</Link>
          </span>
        </div>
        <div> 
        <Form inline onSubmit = {(e)=>e.preventDefault()}>
      <FormControl type="text" placeholder="Search by Food Name" className="mr-sm-2" onChange = {(e)=>setFind(e.target.value)}/>
      <Button variant="outline-primary" style = {{marginRight:'10px'}} onClick = {()=>search(find)} >Search</Button>
    </Form>
        </div>
      </nav>
      
      {item.map((element, index) => (
        <Jumbotron className="container8" key = {index}>
          <h1>{element.foodName.toUpperCase()}</h1>
          {makeArray(element.ingredients.replaceAll("\n", "<br/>")).map(
            (item, i) => (
              <p key={i}>{item}</p>
            )
          )}
          <p>
            <Link to="/signup">
              <Button variant="primary">Add your Recipe By Joining Us</Button>
            </Link>
          </p>
        </Jumbotron>
      ))}
    </div>
  );
}
