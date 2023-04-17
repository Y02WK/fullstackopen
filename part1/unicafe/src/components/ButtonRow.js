import Button from "./Button";

const ButtonRow = ({stateProps}) => {
	const { good, bad, neutral, average, total, positive } = stateProps

	const calculateAverage = (good, bad, total) => {
		const score = good - bad
		return score / total
	}

	const calculatePositive = (good, total) => {
		return good / total * 100
	}

	const updateStateAndTotal = (s, t) => {
		const updatedState = s.value + 1
		const updatedTotal = t.value + 1

		s.setState(updatedState)
		t.setState(updatedTotal)

		return [updatedState, updatedTotal]
	}
	const goodHandler = () => {
		const [updatedGood, updatedTotal] = updateStateAndTotal(good, total)
		average.setState(calculateAverage(updatedGood, bad.value, updatedTotal))
		positive.setState(calculatePositive(updatedGood, updatedTotal))
	}

	const badHandler = () => {
		const [updatedBad, updatedTotal] = updateStateAndTotal(bad, total)
		average.setState(calculateAverage(good.value, updatedBad, updatedTotal))
		positive.setState(calculatePositive(good.value, updatedTotal))
	}

	const neutralHandler = () => {
		const [updatedNeutral, updatedTotal] = updateStateAndTotal(neutral, total)
		average.setState(calculateAverage(good.value, bad.value, updatedTotal))
		positive.setState(calculatePositive(good.value, updatedTotal))
	}

	return (
		<>
			<Button text="good" handleClick={goodHandler}/>
			<Button text="neutral" handleClick={neutralHandler}/>
			<Button text="bad" handleClick={badHandler}/>
		</>
	)
}

export default ButtonRow