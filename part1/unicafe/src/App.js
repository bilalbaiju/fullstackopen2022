import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

//StatisticLine component
//const StatisticLine = ({text, value}) => (  <div>{text} {value}</div>)

const StatisticTable = ({text1, value1, text2, value2, text3, value3, text4, value4, text5, value5, text6, value6}) => (
  <table>
  <tbody>
  <tr>
  <td>{text1}</td>
  <td>{value1}</td>
  </tr>
  <tr>
  <td>{text2}</td>
  <td>{value2}</td>
  </tr>
  <tr>
  <td>{text3}</td>
  <td>{value3}</td>
  </tr>
  <tr>
  <td>{text4}</td>
  <td>{value4}</td>
  </tr>
  <tr>
  <td>{text5}</td>
  <td>{value5}</td>
  </tr>
  <tr>
  <td>{text6}</td>
  <td>{value6}</td>
  </tr>
  </tbody>
  </table>

)

const Statistics = ({Good, Neutral, Bad}) => {

  const total = () => Good + Neutral + Bad
  const average = () => (Good*1 + Neutral*0 + Bad*-1)/total()
  const positive = () => {
    let pos  = (Good/total())*100 + "%"
    return pos
  } 

    if (total() === 0) {
      return (
      <div> No feedback given</div>
      )
    }
    
return (
<div>
<StatisticTable text1='Good' value1={Good} text2='Neutral' value2={Neutral} value3={Bad} text3='Bad' 
text4='All' value4={total()} text5='Average' value5={average()} text6='Positive' value6={positive()}/>  
</div>  
)
//Rendering with component statistic line
//return (
//<div>
//<StatisticLine text='Good' value={Good} />
//<StatisticLine text='Neutral' value={Neutral} />
//<StatisticLine text='Bad' value={Bad} />
//<StatisticLine text='All' value={total()} />
//<StatisticLine text='Average' value={average()} />
//<StatisticLine text='Positive' value={positive()}/>
//</div> )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const ClickGood = () => setGood(good + 1)
  const ClickNeutral = () => setNeutral(neutral + 1)
  const ClickBad = () => setBad (bad + 1)

  return (
    <div>
    <h1>Give Feedback</h1>
    <Button handleClick={ClickGood} text='Good' />
    <Button handleClick={ClickNeutral} text='Neutral' />
    <Button handleClick={ClickBad} text='Bad' />
    <h1>Statistics</h1>
    <Statistics Good={good} Neutral={neutral} Bad={bad} />
    </div>
  )
}

export default App