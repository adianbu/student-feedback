import React,{ useState,useEffect } from "react";
import Feedback from "./Feedback.js";
import "./Card.css";
import { Avatar } from "@material-ui/core";
import { db } from "./firebase";

function Card({ src, teachName,user }) {
  const [rating, setRating] = useState([]);
  // { title: " ", rating: " " }
  const [teacherName, setTeacherName] = useState(" ");

  const handleChange = (input, title, name) => {
    // setRating([...rating, { title: title, rating: input }]);
    setRating([...rating,{ title: title, rating: input }]);

    setTeacherName(name);
    {console.log(rating)}

    console.log(teacherName);
   
  };

  const dataStored = () => {
    
    if (user && teacherName)
    {
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
  }
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
      <Avatar alt={teachName} className="card__avatar" src={src}>
        {teachName[0]}
      </Avatar>
      <h2>{teachName}</h2>
      <Feedback teachName={teachName} handleChange={handleChange} />
      {console.log(rating)}
          {console.log(teacherName)}
          {rating!==[]?
          <>
          {dataStored}
          </>:null}
    </div>
  );
}

export default Card;
