import axios from 'axios'
const host = 'http://localhost:3001/persons'

const getAll = () => {
	return axios
		.get(host)
		.then(res => {
			console.log('fetched persons from api: ', res)
			return res.data
		})
}

const addUser = (userObject) => {
	return axios
		.post(host, userObject)
		.then(res => {
			console.log('added user ', userObject)
		})
}

const deleteUser = (id) => {
	return axios
		.delete(host+`/${id}`)
		.then(res => {
			console.log(res)
		})
}

const updateUser = (nameObject) => {
	return axios
		.put(host+`/${nameObject.id}`, nameObject)
		.then(res => {
			console.log(res)
		})
}

export default { getAll, deleteUser, addUser, updateUser }