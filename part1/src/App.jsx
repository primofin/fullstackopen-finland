import { useState } from 'react';

const Button = (props) => {
  const { onClick, children } = props;
  return <button onClick={onClick}>{children}</button>;
};

const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad, all, average, positive } = props.stats;
  return (
    <div>
      <h1>Statistics</h1>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <table>
            <tr>
              <StatisticLine text='good' value={good} />
            </tr>
            <tr>
              <StatisticLine text='neutral' value={neutral} />
            </tr>
            <tr>
              <StatisticLine text='bad' value={bad} />
            </tr>
            <tr>
              <StatisticLine text='all' value={all} />
            </tr>
            <tr>
              <StatisticLine text='average' value={average} />
            </tr>
            <tr>
              <StatisticLine text='positive' value={positive} />
            </tr>
          </table>
        </>
      )}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = ((good + bad * -1) / all).toFixed(2);
  const positive = (good / all).toFixed(2) + '%';
  const stats = { good, neutral, bad, all, average, positive };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={() => setGood(good + 1)}>good</Button>
        <Button onClick={() => setNeutral(neutral + 1)}>neutral</Button>
        <Button onClick={() => setBad(bad + 1)}>bad</Button>
      </div>
      <Statistics stats={stats}></Statistics>
    </div>
  );
};

export default App;
