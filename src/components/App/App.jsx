import React, { Component } from "react";
import { initialContacts } from "data/initialContacts";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import ContactForm from "components/ContactForm";
import { Div } from "./App.styled";

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = (id, name, number) => {
    this.setState(({ contacts }) => {
      if (contacts.find(contact => contact.name === name)) {
        alert(`${name} is already in contact list`);
        return;
      };
      return {
        contacts: [{ id, name, number }, ...contacts],
      };
      
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }))
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }

  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
    return (
      <Div>
        <h2>Phonebook</h2>
        <ContactForm
          onSubmit={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={this.changeFilter}
        />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Div>
    )
  }
}

export default App;
