import React from "react";
import "../styles/Character.css";
import face from "../styles/ian-dooley-d1UPkiFd04A-unsplash.jpg";

const Character = ({ data, click }) => {
  return (
    <div className="con">
      <img src={face} />
      <p className="values">Name:{click.name}</p>
      <p className="values">EyeColor:{click.eyeColor}</p>
      <p className="values">HairColor:{click.hairColor}</p>
      <p className="values">SkinColor:{click.skinColor}</p>
    </div>
  );
};

export default Character;
