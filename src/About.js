import React from "react";
function About(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <div className="aboutSection-container">
        <div>
          <quote>We are a family owned Mediteranean restaurant, focused on traditional recipes served with a modern twist.<br /><br /></quote>
        </div>
        <div>
          <img src={require('./restaurant.jpg')} style={{"maxWidth" : "200px"}} alt="Restaurant"/>
        </div>
    </div>
    </>
  );
}

export default About;
