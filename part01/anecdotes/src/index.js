import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [counters = [0, 0, 0, 0, 0, 0], setCounters] = useState([
    0, 0, 0, 0, 0, 0,
  ]);
  const [top, setTop] = useState(0);

  let handleClick = () => {
    setSelected(Math.trunc(Math.random() * anecdotes.length));
  };
  const handleVotes = () => {
    let copy = [...counters];
    copy[selected] += 1;
    setCounters(copy);
    let max = Math.max(...copy);

    setTop(copy.indexOf(max));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h3>{props.anecdotes[selected]}</h3>
      <h4>has {counters[selected]} votes</h4>

      <button onClick={handleClick}> Next anecdote!</button>
      <button onClick={handleVotes}> Vote!</button>

      <h1>Anecdote with most votes</h1>
      <h3>{props.anecdotes[top]}</h3>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
