import { use, useState } from "react";
import "./index.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

const App = () => {
	const [searchFilter, setFilter] = useState("")
	const [newName, setNewName] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [contacts, setContacts] = useState([
		{ name: "John Doe", id: 1, email: "johndoe@gmail.com" },
		{ name: "Jane Smith", id: 2, email: "janesmith@gmail.com" },
		{ name: "Michael Johnson", id: 3, email: "michaeljohnson@gmail.com" },
		{ name: "Emily Davis", id: 4, email: "emilydavis@gmail.com" },
		{ name: "David Brown", id: 5, email: "davidbrown@gmail.com" },
	]);

	const newNameChangeHandler = (e) => {setNewName(e.target.value)}
	const newEmailChangeHandler = (e) => {setNewEmail(e.target.value)}
	const searchChangeHandler = (e) => {setFilter(e.target.value)}

	const handleSubmit = (e) => {
		e.preventDefault()
		const trimmedName = newName.trim()
		if (trimmedName === "") {
			return
		}

		const trimmedEmail = newEmail.trim()
		if (trimmedEmail === "") {
			alert(`You need to add an email address`)
			return
		}
		``
		let nameExists = false
		for (let i = 0; i < contacts.length; i++) {
			if (contacts[i].name === trimmedName) {
				nameExists = true
				break
			}
		}
		if (nameExists) {
			alert(`${trimmedName} is already in contacts`)
			return
		}
		setContacts([...contacts, { name: newName, id: Date.now(), email: newEmail }])
		setNewName("")
		setNewEmail("")
	}

	const filteredContacts = contacts.filter((contact) => 
		contact.name.toLowerCase().indexOf(searchFilter.toLowerCase()) === -1
		? false
		: true
	);

	return (
		<div className="contacts-app">
			<AddContact
				handleSubmit={handleSubmit}
				newName={newName}
				newEmail={newEmail}
				newNameChangeHandler={newNameChangeHandler}
				newEmailChangeHandler={newEmailChangeHandler}
			/>
			<ContactList
				searchFilter={searchFilter}
				searchChangeHandler={searchChangeHandler}
				filteredContacts={filteredContacts}
			/>
		</div >
	);
};

export default App;