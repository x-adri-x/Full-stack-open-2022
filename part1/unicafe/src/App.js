import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1> 
const Button = ({onClick, name}) => <button onClick = {onClick}>{name}</button>
// const StatisticLine = ({text, value}) => <p>{text} {value}</p>
// const Total = ({all}) => <p>All {all}</p>
// const Average = (props) => <p>Average {(props.stats.good - props.stats.bad)/(props.stats.all)}</p>
// const Positive = (props) => <p>Positive {(props.stats.good/props.stats.all) * 100}%</p>
const Statistics = (props) => {
  return(
    <>
      {/* <StatisticLine text = 'good' value = {props.stats.good} />
      <StatisticLine text = 'neutral' value = {props.stats.neutral} />
      <StatisticLine text = 'bad' value = {props.stats.bad} />
      <Total all = {props.stats.all} />
      <Average stats = {props.stats} />
      <Positive stats = {props.stats} /> */}
      <table>
        <tbody>
        <tr>
          <td>good</td>
          <td>{props.stats.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.stats.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.stats.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{props.stats.all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{(props.stats.good - props.stats.bad)/(props.stats.all)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{(props.stats.good/props.stats.all) * 100}%</td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: good + neutral + bad
  }

  if(stats.all === 0) {
    return(
      <div>
      <Header title = 'give feedback'/>
      <Button onClick = {() => setGood(good + 1)} name = 'good' />
      <Button onClick = {() => setNeutral(neutral + 1)} name = 'neutral' />
      <Button onClick = {() => setBad(bad + 1)} name = 'bad' />
      <Header title = 'statistics' />
      <p>No feedback given</p>
    </div>
    )
  }

  return (
    <div>
      <Header title = 'give feedback'/>
      <Button onClick = {() => setGood(good + 1)} name = 'good' />
      <Button onClick = {() => setNeutral(neutral + 1)} name = 'neutral' />
      <Button onClick = {() => setBad(bad + 1)} name = 'bad' />
      <Header title = 'statistics' />
      <Statistics stats = {stats} />
    </div>
  )
}

export default App;
