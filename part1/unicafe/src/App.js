import {useState} from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Statistics from "./components/Statistics";
import ButtonRow from "./components/ButtonRow";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const stateProps = {
    good: {
      value: good,
      setState: setGood
    },
    bad: {
      value: bad,
      setState: setBad
    },
    neutral: {
      value: neutral,
      setState: setNeutral
    },
    total: {
      value: total,
      setState: setTotal
    },
    average: {
      value: average,
      setState: setAverage
    },
    positive: {
      value: positive,
      setState: setPositive
    }
  }

  const statistics = {
    good: {
    text: 'good',
    count: good
    },
    bad: {
      text: 'bad',
      count: bad
    },
    neutral: {
      text: 'neutral',
      count: neutral
    },
    total: {
      text: 'total',
      count: total
    },
    average: {
      text: 'average',
      count: average
    },
    positive: {
      text: 'positive',
      count: positive
    },
  }

  return (
    <div>
      <Header title={'give feedback'} />
      <ButtonRow stateProps={stateProps} />
      <Header title={'statistics'} />
      <Statistics statistics={statistics} />
    </div>
  )
}
export default App;
