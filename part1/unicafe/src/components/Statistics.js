import StatisticLine from "./StatisticLine";

const Statistics = ({statistics}) => {
	const {good, neutral, bad, total, average, positive} = statistics

	if (good.count === 0 && bad.count === 0 && neutral.count === 0) {
		return (<div><p>No feedback given</p></div>)
	}

	return (<div>
		<table>
			<tbody>
			<StatisticLine text={good.text} value={good.count}/>
			<StatisticLine text={neutral.text} value={neutral.count}/>
			<StatisticLine text={bad.text} value={bad.count}/>
			<StatisticLine text={total.text} value={total.count}/>
			<StatisticLine text={average.text} value={average.count}/>
			<StatisticLine text={positive.text} value={positive.count + ' %'}/>
			</tbody>
		</table>
	</div>)

}

export default Statistics