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

  const handleClick = (personId) => {
    const person = people.find((item) => item.id === personId);
    console.log("person", person.id);
    setClick({
      id: person.id,
      name: person.name,
      skinColor: person.skinColor,
      hairColor: person.hairColor,
      eyeColor: person.eyeColor,
    });
  };

  console.log("films", films);
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
        <header className="heading">
          <p>{date}</p>
          <h3 className="header">StarWars Characters</h3>
          <p className="heading">{quote}</p>
        </header>
        <section className="section">
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
                  <td className="personLinks">
                    <Link
                      onClick={() => handleClick(person.id)}
                      to="/character"
                      className="personLinks2"
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
