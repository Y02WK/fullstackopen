import React from 'react';
const Filter = ({value, setValue}) => {
	const handleFilterChange = (e) => {
		console.log('filter input: ' + e.target.value)
		setValue(e.target.value)
	}

	return (
		<div>
			filter show with <input value={value} onChange={handleFilterChange}/>
		</div>
	)
}

export default Filter