import React, { Component } from "react";
import { nanoid } from 'nanoid'
import { Button, Form, Input, Label } from "./ContactForm.styled";

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  nameId = nanoid(4)
  numberId = nanoid(4)

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(nanoid(4), this.state.name, this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const {name, number} = this.state
    return (
      <Form onSubmit={this.handleSubmit}>  
        <Label htmlFor={this.nameId}>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            id={this.nameId}
          />
        </Label>  
        <Label htmlFor={this.numberId}>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            id={this.numberId}
          />            
        </Label>
        <Button>Add contact</Button>
      </Form>
    )
  }
}

export default ContactForm;


