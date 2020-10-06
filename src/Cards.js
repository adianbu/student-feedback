import React from "react";

import "./Cards.css";
import Card from "./Card";
import data from "./config/data";
import { db } from "./firebase";

function Cards({ user }) {
  // const handleSubmit = () => {
  //   db.collection("users")
  //     .doc(user?.uid)
  //     .collection("orders")
  //     .doc(paymentIntent.id)
  //     .set({
  //       basket: basket,
  //       amount: paymentIntent.amount,
  //       created: paymentIntent.created,
  //     });
  // };
  return user ? (
    <>
      <div className="cards__card">
        {data.list.map((teacher, index) => (
          <Card key={index} name={teacher.name} />
        ))}
      </div>
      <button className="cards__button">Submit</button>
    </>
  ) : (
    <div className="cards__login">
      <h2>Please Login to give feedback</h2>
    </div>
  );
}

export default Cards;
