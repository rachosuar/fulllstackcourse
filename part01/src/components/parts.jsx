import React, { Component } from "react";

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

export default Part;
