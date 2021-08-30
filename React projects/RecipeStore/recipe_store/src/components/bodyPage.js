import React from "react";
import { Carousel } from "react-bootstrap";
import './body.css';

export default function BodyPage(props) {

  React.useEffect(()=>{
    props.check();
  },[])
  return (
    <div>
      <Carousel className = 'container4 container'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1600x600/?food"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Save Any Recipe You Find on the Web with Recipe Store</h3>
            <p>
              Recipe Store grabs key recipe information like ingredients,
              directions, servings, cook time, prep time, and images from the
              web page and saves all of that to your account.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1600x600/?recipe"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Easily View Key Recipe Details with Recipe Store</h3>
            <p>
              View your saved recipes any time in an easy-to-read format that is
              perfect for busy kitchen work. Check off ingredients as you use
              them, adjust the font size for readability, and edit the recipe to
              make it your own.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1600x600/?food,recipe"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Never Lose a Recipe Again with Recipe Store</h3>
            <p>
              You can search for recipes by name, ingredient, and direction.
              Reciplay will also automatically suggest folders for new recipes
              so it's easy to keep things organized.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 style = {{textAlign:'center',fontSize:'70px', fontWeight:'bolder'}}>Features</h1>

      <div className="container5">
        <div>
            <h1>Save Any Recipe You Find on the Web with Recipe Store</h1>
            <p>Reciplay grabs key recipe information like ingredients, directions, servings, cook time, prep time, and images from the web page and saves all of that to your account.</p>
        </div>
        <div>
            <h1>Easily View Key Recipe Details with Recipe Store</h1>
            <p>View your saved recipes any time in an easy-to-read format that is perfect for busy kitchen work. Check off ingredients as you use them, adjust the font size for readability, and edit the recipe to make it your own.</p>
        </div>
        <div>
            <h1>Never Lose a Recipe Again with Recipe Store</h1>
            <p>You can search for recipes by name, ingredient, and direction. Recipe Store will also automatically suggest folders for new recipes so it's easy to keep things organized.</p>
        </div>
      </div>

        <footer className = 'container6'>
            <p>Copyright © 2021 Jayesh Rathi</p>
        </footer>

    </div>
  );
}
