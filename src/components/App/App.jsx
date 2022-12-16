import { useState } from "react";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import ContactForm from "components/ContactForm";
import { Div } from "./App.styled";
import { useEffect } from "react";
import { initialContacts } from "data/initialContacts";

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts === initialContacts) {
      return
    }
    localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])

  const addContact = (id, name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contact list`);
    }
    return setContacts([{ id, name, number }, ...contacts])
  }
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const changeFilter = e => setFilter(e.currentTarget.value)

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <Div>
        <h2>Phonebook</h2>
        <ContactForm
          onSubmit={addContact}
        />
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={changeFilter}
        />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Div>
  )
}

export default App;

