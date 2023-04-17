import Header from "./Header";
import Part from "./Part";
import Total from "./Total";

const ContentGroup = ({ course }) => {
	return (
		<div>
			<Header name={course.name} />
			{course.parts.map(p => <Part part={p} key={p.id}/>)}
			<Total parts={course.parts}/>
		</div>
	)
}

export default ContentGroup