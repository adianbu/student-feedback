import React,{ useState,useEffect } from "react";
import Feedback from "./Feedback.js";
import "./Card.css";
import { Avatar } from "@material-ui/core";
import { db } from "./firebase";

function Card({ src, name,user }) {
  const [rating, setRating] = useState([]);
  // { title: " ", rating: " " }
  const [teacherName, setTeacherName] = useState(" ");

  const handleChange = (input, title, name) => {
    // setRating([...rating, { title: title, rating: input }]);
    setRating([...rating,{ title: title, rating: input }]);

    setTeacherName(name);
    console.log(teacherName);
    setTimeout(() => {
      if (user && teacherName) {
        db.collection("users")
          .doc(user?.uid)
          .collection("teachers")
          .doc(teacherName)
          .update('array',rating)
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    }, 1000);
  };

  // useEffect(() => {
  //   const storage = () => {
     
  //   };

  //   return () => {
  //     storage();
  //   };
  // }, [user, teacherName, rating]);
  return (
    <div className="card">
      {/* <img alt="" src={src} /> */}
      <Avatar alt={name} className="card__avatar" src={src}>
        {name[0]}
      </Avatar>
      <h2>{name}</h2>
      <Feedback name={name} handleChange={handleChange} />
      {console.log(rating)}
          {console.log(teacherName)}
    </div>
  );
}

export default Card;
