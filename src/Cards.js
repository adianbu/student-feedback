import React from "react";

import "./Cards.css";
import Card from "./Card";
import data from "./config/data";

function Cards({ user }) {
  return user ? (
    <>
      <div className="cards__card">
        {data.list.map((teacher) => (
          <Card name={teacher.name} />
        ))}
      </div>
      <button>Submit</button>
    </>
  ) : (
    <div className="cards__login">
      <h2>Please Login to give feedback</h2>
    </div>
  );
}

export default Cards;
