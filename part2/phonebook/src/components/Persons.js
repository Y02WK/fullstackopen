import React from 'react';
const Persons = ({filteredPersons, deleteHandler}) => {

	const handleDelete = (id, name) => {
		if (window.confirm(`delete ${name}?`)) {
			deleteHandler(id)
		}
	}

	return (
		<div>
			{filteredPersons.map(p => <div key={p.id}>{p.name} {p.number} <button onClick={() => handleDelete(p.id, p.name)}>delete</button></div>)}
		</div>
	)
}

export default Persons