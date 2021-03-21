import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “Nothing is original. Steal from anywhere that resonates with inspiration or fuels your imagination. Devour old films, new films, music, books, paintings, photographs, poems, dreams. Select only things to steal from that speak directly to your soul”
      </span>
      <span>− Jim Jarmusch</span>
    </div>
  );
}

export default About;