const AddContact = ({ handleSubmit, newName, newEmail, newNameChangeHandler, newEmailChangeHandler}) => {
    return (
        <>
            <h2>Add a New Contact</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="contactName"
                    placeholder="Enter contact name"
                    onChange={newNameChangeHandler}
                    value={newName}
                />
                <input
                    name="contactEmail"
                    placeholder="Enter email"
                    onChange={newEmailChangeHandler}
                    value={newEmail}
                />
                <button type="submit">Add Contact</button>
            </form>
        </>
    )
}

export default AddContact