import React from "react";

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  const array1 = props.parts
  return (
    <>
    <Part part={array1[0]} />
    <Part part={array1[1]} />
    <Part part={array1[2]} />
    </>
  )
}

const Total = (props) => {
  const array1 = props.parts
  return (
    <p>Number of exercises {array1[0].exercises + array1[1].exercises + array1[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      {
      name: "Fundamentals of React",
      exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
