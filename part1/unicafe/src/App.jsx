import { useState } from "react";

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {props.value} {props.postText}
      </td>
    </tr>
  );
};

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = (props.good * 1 + props.neutral * 0 + props.bad * -1) / all;
  const positive = (props.good / all) * 100;

  if (all == 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text={"good"} value={props.good} />
          <StatisticsLine text={"neutral"} value={props.neutral} />
          <StatisticsLine text={"bad"} value={props.bad} />
          <StatisticsLine text={"all"} value={all} />
          <StatisticsLine text={"average"} value={average} />
          <StatisticsLine text={"positive"} value={positive} postText={"%"} />
        </tbody>
      </table>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text={"good"} onClick={() => setGood(good + 1)} />
        <Button text={"neutral"} onClick={() => setNeutral(neutral + 1)} />
        <Button text={"bad"} onClick={() => setBad(bad + 1)} />
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
