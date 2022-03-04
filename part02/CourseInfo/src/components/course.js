import React from "react";
import Header from "./header";
import Total from "./total";
import Content from "./content";

const Course = ({ course }) => {
  return (
    <React.Fragment>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map((item) => item.exercises)} />
    </React.Fragment>
  );
};

export default Course;
