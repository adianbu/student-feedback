import React, { useState } from "react";
import { Rating } from "@material-ui/lab";
import { FormControl, NativeSelect } from "@material-ui/core";

import data from "./config/data";
import "./Feedback.css";

const Feedback = ({ teachName, handleChange }) => {
  return (
    <div className="feedback">
      {data.feedbackTitles.map((title, index) => (
        <div key={index} className="feedback__titles">
          <p>{title}</p>
          <FormControl className="">
            <NativeSelect
              onChange={(e) => handleChange(e.target.value, title, teachName)}
            >
              {data.feedbackOpinions.length
                ? data.feedbackOpinions.map((name, i) => (
                    <option  key={i} value={name}>
                      {name}
                    </option>
                    
                  ))
                : "Loading"}
            </NativeSelect>
          </FormControl>         
        </div>
      ))}
    </div>
  );
};

export default Feedback;
