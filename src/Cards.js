import React from "react";
import Card from "./Card";
import data from "./config/data";

function Cards() {
  return (
    <div>
      {data.list.map((teacher) => (
        <Card name={teacher.name} />
      ))}
    </div>
  );
}

export default Cards;
