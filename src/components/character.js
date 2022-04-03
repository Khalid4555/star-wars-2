import React from "react";
import "../styles/Character.css";
import face from "../styles/ian-dooley-d1UPkiFd04A-unsplash.jpg";

const Character = ({ filmData, click }) => {
  const { films } = filmData.data.allFilms;

  const movieConnections = films.map((film) => {
    const arr = [];
    film.characterConnection?.edges?.forEach((edge) => {
      if (edge.node.id === click.id) {
        arr.push(film.title);
      }
    });
    return arr;
  });
  console.log("movieConnections", movieConnections);

  return (
    <div className="con">
      <img src={face} alt="face" />
      <p className="values">Name:{click.name}</p>
      <p className="values">EyeColor:{click.eyeColor}</p>
      <p className="values">HairColor:{click.hairColor}</p>
      <p className="values">SkinColor:{click.skinColor}</p>
      <p className="values">Movies:{movieConnections}</p>
    </div>
  );
};

export default Character;
