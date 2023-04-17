const Total = ({ parts }) => {
	const totalExercises = parts.reduce(
		(accumulator, currentValue) => accumulator + currentValue.exercises, 0
	)

	return (
		<div>
			<p>total of {totalExercises} exercises</p>
		</div>
		)

}

export default Total