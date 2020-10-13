import React, { useState } from "react";

import "./Cards.css";
import Card from "./Card";
import data from "./config/data";
import { db } from "./firebase";
import { useEffect } from "react";

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
  const [onSubmit, setOnSubmit] = useState(false);


  return user ? (
    <>
      {!onSubmit ? (
        <>
          <div className="cards__card">
            {data.list.map((teacher, index) => (
              <Card
                key={index}
                teachName={teacher.name}
                name={teacher.name}
                user={user}
                // handleChange={handleChange}
              />
            ))}
          </div>
          <button className="cards__button" onClick={() => setOnSubmit(true)}>
            Submit
          </button>
          
        </>
      ) : (
        <div className="cards__submit">You have successfully submitted</div>
      )}
    </>
  ) : (
    <div className="cards__login">
      <h2>Please Login to give feedback</h2>
    </div>
  );
}

export default Cards;
