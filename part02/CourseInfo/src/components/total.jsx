import React from "react";

const Total = ({ exercises }) => {
  return (
    <div>
      <h3>
        Total of {exercises.reduce((sum, total) => sum + total)} exercises
      </h3>
    </div>
  );
};

export default Total;
