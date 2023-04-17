import {useEffect, useState} from 'react'
import React from 'react';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/personService";

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')
	const [notification, setNotification] = useState('')

	useEffect(() => {
		personService
			.getAll()
			.then(data => {
				setPersons(data)})
			.catch(err => console.log(err))
	}, [])

	const filteredPersons = filter.length === 0 ? persons : persons.filter(p => p.name.includes(filter) === true)

	const formProps = {
		name: {
			value: newName, setState: setNewName
		},
		number: {
			value: newNumber, setState: setNewNumber
		},
		persons: {
			value: persons, setState: setPersons
		},
		notification: {
			value: notification, setState: setNotification
		}
	}

	const deleteHandler = (id) => {
		personService
			.deleteUser(id)
			.then(res => {
				setPersons(persons.filter(p => p.id !== id))
			})
			.catch(err => console.log(err))
	}

	return (<div>
			<h2>Phonebook</h2>

			<Filter value={filter} setValue={setFilter}/>
			<h2>add a new</h2>
			<PersonForm props={formProps}/>
			<h2>Numbers</h2>
			<Persons filteredPersons={filteredPersons} deleteHandler={deleteHandler}/>
		</div>)
}

export default App