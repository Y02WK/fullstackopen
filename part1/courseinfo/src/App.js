import React from "react";

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.one} exercises={props.ex1} />
      <Part name={props.two} exercises={props.ex2} />
      <Part name={props.three} exercises={props.ex3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  )
}

const App = () => {
  const course = "Half stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        one={part1}
        two={part2}
        three={part3}
        ex1={exercises1}
        ex2={exercises2}
        ex3={exercises3}
      />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

export default App;
