import React from "react";
import "../styles/Main.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Main = (props) => {
  const date = new Date().toString();
  const { people } = props.data.data.allPeople;
  const { filmData } = props;
  const { setClick } = props;
  const { films } = filmData.data.allFilms;
  const [quote, setQuote] = useState("");

  useEffect(() => {
    try {
      return axios
        .get(
          `http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote`
        )
        .then((response) => {
          const quotes = response.data.content;
          setQuote(quotes);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleClick = () => {
    people.map((item) => {
      return setClick({
        name: item.name,
        skinColor: item.skinColor,
        hairColor: item.hairColor,
        eyeColor: item.eyeColor,
      });
    });
  };

  return (
    <div className="container">
      <div className="container1">
        <a className="link1" href="#">
          Home
        </a>
        <a className="link2" href="#">
          Star Wars
        </a>
      </div>
      <div className="container2">
        <header className="header">{date}</header>
        <section className="section">
          <h1 className="heading">StarWars Characters</h1>
          <h4 className="heading">{quote}</h4>
          <table className="table">
            <tr>
              <th>Name</th>
              <th>Hair Color</th>
              <th>Skin Color</th>
              <th>Eye Color</th>
              <th>Gender</th>
              <th>Home world name</th>
            </tr>
            {people.map((person) => {
              return (
                <tr key={person.id}>
                  <td>
                    <Link
                      onClick={handleClick}
                      to="/character"
                      className="personLinks"
                    >
                      {person.name}
                    </Link>
                  </td>
                  <td>{person.hairColor}</td>
                  <td>{person.skinColor}</td>
                  <td>{person.eyeColor}</td>
                  <td>{person.gender}</td>
                  <td>{person.homeworld.name}</td>
                </tr>
              );
            })}
          </table>
        </section>
      </div>
    </div>
  );
};

export default Main;
