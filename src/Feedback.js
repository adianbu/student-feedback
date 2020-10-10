import React, { useState } from "react";
import { Rating } from "@material-ui/lab";
import { FormControl, NativeSelect } from "@material-ui/core";

import data from "./config/data";
import "./Feedback.css";

const Feedback = ({ name, handleChange }) => {
  return (
    <div className="feedback">
      {data.feedbackTitles.map((title, index) => (
        <div key={index} className="feedback__titles">
          <p>{title}</p>
          <FormControl className="">
            <NativeSelect
              onChange={(e) => handleChange(e.target.value, title, name)}
            >
              <option value="">None</option>
              {data.feedbackOpinions.length
                ? data.feedbackOpinions.map((name, i) => (
                    <option key={i} value={name}>
                      {name}
                    </option>
                  ))
                : "Loading"}
            </NativeSelect>
          </FormControl>
          {/* <Rating onChange={() => ratingChange} /> */}
          {/* <TrackTitle title={title} /> */}
        </div>
      ))}
    </div>
  );
};

export default Feedback;
