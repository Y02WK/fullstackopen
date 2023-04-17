import React from 'react';
import personService from "../services/personService";

const PersonForm = ({props}) => {
	const {name, number, persons} = props

	const handleNameInputChange = (e) => {
		console.log('name input: ' + e.target.value)
		name.setState(e.target.value)
	}

	const handleNumberInputChange = (e) => {
		console.log('number input: ' + e.target.value)
		number.setState(e.target.value)
	}

	const addOrUpdateName = (e) => {
		e.preventDefault()
		console.log('button clicked', e.target)

		const filteredNames = persons.value.filter(p => p.name === name.value)
		let apiPromise

		if (filteredNames.length > 0) {
			if (window.confirm(name.value + ' is already added to phonebook, replace the old number with a new one?')) {
				const nameObject = {...filteredNames[0]}
				nameObject.number = number.value
				apiPromise = personService.updateUser(nameObject)
			} else {
				return
			}
		} else {
			console.log('Number is', number.value)
			const nameObject = {
				name: name.value,
				number: number.value,
				id: persons.length + 1
			}
			apiPromise = personService.addUser(nameObject)
		}
		apiPromise
			.then(res => {
				personService.getAll()
					.then(data => {
						persons.setState(data)
					})
					.catch(err => console.log(err))
				name.setState('')
				number.setState('')
			})
			.catch(err => console.log(err))
	}

	return (
		<form onSubmit={addOrUpdateName}>
			<div>
				name: <input value={name.value} onChange={handleNameInputChange}/>
			</div>
			<div>number: <input value={number.value} onChange={handleNumberInputChange}/></div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	)
}

export default PersonForm