import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Badge, Jumbotron } from "react-bootstrap";
import "./loggedIn.css";
import { Link, useHistory } from "react-router-dom";
import add from './add.png';
import lOut from './logOut.png';
import edit from './edit.png';
import del from './delete.png';
 
export default function LoggedIn(props) {
  let name = localStorage.getItem("name");
  const [allRecipe, setAllRecipe] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [prevIngredients, setPrevIngredients] = useState("");
  const id = localStorage.getItem("id");
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (foodName, ingredients) => {
    setShow1(true);
    setFoodName(foodName);
    setIngredients(ingredients);
    setPrevIngredients(ingredients);
  };

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

  function showRecipe() {
    fetch("http://localhost:8000/userRecipe" + id)
      .then((response) => response.json())
      .then((data) => {
        setAllRecipe(data);
      });
  }

  useEffect(() => {
    showRecipe();
  }, []);

  function saveRecipe() {
    if (foodName !== "" && ingredients !== "") {
      let url = "http://localhost:8000/postRecipe";
      let data = { foodName, ingredients, id };
      let params = {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      };
      fetch(url, params)
        .then((response) => response.json())
        .then((data) => {
          setFoodName("");
          setIngredients("");
          showRecipe();
        });
      handleClose();
    } else {
      alert("Please fill the form again");
      handleClose();
      setFoodName("");
      setIngredients("");
    }
  }

  function deleteRecipe(foodName, ingredients) {
    let url = "http://localhost:8000/deleteRecipe";
    let data = { foodName, id, ingredients };
    let params = {
      method: "delete",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(url, params).then(() => {
      showRecipe();
    });
  }

  function changeRecipe() {
    let url = "http://localhost:8000/changeRecipe";
    let data = { id, foodName, ingredients, prevIngredients };
    let params = {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(url, params).then(() => {
      showRecipe();
      handleClose1();
      setFoodName("");
      setIngredients("");
    });
  }

  async function logOut(){
    localStorage.removeItem('token');
    console.log('hello');
    props.check();
    if(window.confirm('Are you sure')){
      props.check();
      history.push('/');
    }
  }

  return (
    <div>
      <div className="container2">
        <h1>Recipe Store</h1>
        <div>
          <Button className = "add" variant="primary" onClick={handleShow}>
            <img src={add} alt="Add your Recipe" />
          </Button>
          <Link to="/recipes">
            <Button variant="primary">See all Recipies</Button>
          </Link>
          <Button className = "add" variant = "danger" onClick = {()=>logOut()}>
            <img src= {lOut} alt="Log Out" />
          </Button>
        </div>
      </div>
      <h1 className="my-3 mx-4">
        WELCOME <Badge variant="dark">{name.toUpperCase()}</Badge>{" "}
      </h1>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Food Name</Form.Label>
              <Form.Control
                type="text"
                autoComplete = 'off'
                onChange={(e) => setFoodName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Steps</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={saveRecipe}>
              Save Your Recipe
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {allRecipe.map((element, index) => (
        <Jumbotron className="container3" key={index}>
          <h1>{element.foodName.toUpperCase()}</h1>
          {makeArray(element.ingredients.replaceAll("\n", "<br/>")).map((item,i)=>
          <p key = {i}>{item}</p>
          )}
          <p>
            <Button
              className = "add"
              variant="primary"
              onClick={() => handleShow1(element.foodName, element.ingredients)}
            >
              <img src={edit} alt="Edit" />
            </Button>
            <Button
              className = "add"
              variant="danger"
              onClick={() =>
                deleteRecipe(element.foodName, element.ingredients)
              }
            >
              <img src={del} alt="Delete" />
            </Button>
          </p>
        </Jumbotron>
      ))}

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Change Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Food Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setFoodName(e.target.value)}
                value={foodName}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea2">
              <Form.Label>Change in Steps</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
              />
            </Form.Group>
            <Button variant="primary" onClick={changeRecipe}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
