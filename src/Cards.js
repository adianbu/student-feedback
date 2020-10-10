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
  const [rating, setRating] = useState({ title: " ", rating: " " });
  const [teacherName, setTeacherName] = useState(" ");
  const [onSubmit, setOnSubmit] = useState(false);

  const handleChange = (input, title, name) => {
    // setRating([...rating, { title: title, rating: input }]);
    setRating({ title: title, rating: input });

    setTeacherName(name);
    console.log(teacherName);
  };

  useEffect(() => {
    const storage = () => {
      if (user && teacherName) {
        db.collection("users")
          .doc(user?.uid)
          .collection("teachers")
          .doc(teacherName)
          .set(rating)
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    };

    return () => {
      storage();
    };
  }, [user, teacherName, rating]);

  return user ? (
    <>
      {!onSubmit ? (
        <>
          <div className="cards__card">
            {data.list.map((teacher, index) => (
              <Card
                key={index}
                name={teacher.name}
                handleChange={handleChange}
              />
            ))}
          </div>
          <button className="cards__button" onClick={() => setOnSubmit(true)}>
            Submit
          </button>
          {console.log(rating)}
          {console.log(teacherName)}
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
