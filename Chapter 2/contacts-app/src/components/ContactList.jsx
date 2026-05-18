const ContactList = ({searchFilter, searchChangeHandler, filteredContacts}) => {
    return (
        <>
            <h2>Contact List</h2>
            <input
                name="search"
                placeholder="Search contacts"
                onChange={searchChangeHandler}
                value={searchFilter}
            />
            <table className="contact-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredContacts.length === 0
                        ? (
                            <tr className="green-row">
                                <td>No Contact Found</td>
                                <td></td>
                            </tr>
                        )
                        : filteredContacts.map((contact, index) => (
                            <tr
                                key={contact.id}
                                className={index % 2 == 0 ? "green-row" : "green-row-dark"}
                            >
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                            </tr>
                        ))}

                </tbody>
            </table>
        </>
    )
}

export default ContactList