import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>
const Button = ({title, onClick}) => <button onClick = {onClick}>{title}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const selectRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const vote = () => {
    const arr = [...votes]
    arr[selected] += 1
    setVotes(arr)
  }

  return (
    <div>
      <Header title = 'Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button title = 'vote' onClick = {vote} />
      <Button title = 'next anecdote' onClick = {selectRandom} />
      <Header title = 'Anecdote with most votes' />
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
      <p>has {Math.max(...votes)} votes</p>
    </div>
  )
}

export default App
