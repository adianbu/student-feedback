import React, { useState } from "react";
import { Rating } from "@material-ui/lab";

import data from "./config/data";
import TrackTitle from "./TrackTitle";
import "./Feedback.css";

const Feedback = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState({ title: "", rating: 0 });

  const ratingChange = (event, value) => {
    setRating({ ...rating, rating: value });
  };

  const divChange = (title) => {
    setRating({ ...rating, title: title });
  };

  return (
    <div className="feedback">
      {data.feedbackTitles.map((title, index) => (
        <>
          <div className="feedback__titles">
            <p>{title}</p>

            <Rating onChange={ratingChange} />
            {/* <TrackTitle title={title} /> */}
          </div>
        </>
      ))}
      {console.log(rating)}
      {/* <p>{rating}</p> */}
    </div>
  );
};

export default Feedback;
