import ContentGroup from "./ContentGroup";

const Content = ({ courses }) => {
	console.log(courses)
	return (
		<div>
			{courses.map(c => <ContentGroup course={c} key={c.id}/>) }
		</div>
	)
}

export default Content