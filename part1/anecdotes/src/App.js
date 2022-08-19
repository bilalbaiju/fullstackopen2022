import { useState } from 'react'

const MostVotes = ({votes,anecdotes,selected}) => {

 const anecMax = () => {
 const max = Math.max(...votes)
 const index = votes.indexOf(max)
 return index
}

 return (
  <div>
  {anecdotes[anecMax()]} <br></br>
  has {votes[anecMax()]} votes
  </div>
 )

}

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
  const [votes, setVotes] = useState([0,0,0,0,0,0,0])
  const copy = [...votes]

  const ClickAnecdote = () => {
  const RandomNumber = () => Math.floor(Math.random() * (7));
  setSelected(RandomNumber)
  }

  const Voting = () => {
   setVotes(copy, copy[selected]+=1)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} <br></br>
      has {votes[selected]} votes</p>
      <p>
      <button onClick={ClickAnecdote}>Next Anecdote</button>
      <button onClick={Voting}>Vote</button>
      </p>
      <h1>Anecdote with most votes</h1>
      <MostVotes votes={votes} anecdotes={anecdotes} selected={selected} />
    </div>
  )
}

export default App