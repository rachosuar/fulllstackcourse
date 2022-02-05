import react from "react";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerGood = () => setGood(good + 1);
  const handlerNeutral = () => setNeutral(neutral + 1);
  const handlerBad = () => setBad(bad + 1);
  const total = good + neutral + bad;

  return (
    <div>
      <h1> give feedback </h1>
      <Button value="Good" onClick={handlerGood} />
      <Button value="Neutral" onClick={handlerNeutral} />
      <Button value="Bad" onClick={handlerBad} />

      <h1> Statics </h1>
      {!good && !bad ? (
        <p> No feedback given</p>
      ) : (
        <div>
          <Statistics text={"good"} value={good} />
          <Statistics text={"neutral"} value={neutral} />
          <Statistics text={"bad"} value={bad} />
          <Statistics text={"all"} value={total} />
          <Statistics
            text={"average"}
            value={(good * 1 + neutral * 0 + bad * -1) / total}
          />
          <Statistics text={"positive"} value={(good * 100) / total} />
        </div>
      )}
    </div>
  );
};

const Button = ({ value, onClick }) => {
  return <button onClick={onClick}> {value} </button>;
};

const Statistics = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
        </tr>
        <tr>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
