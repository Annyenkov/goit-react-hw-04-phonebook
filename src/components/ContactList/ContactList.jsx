import React from "react";
import PropTypes from "prop-types";
import { Button, Icon, ListItem } from "./ContactList.styled";

const ContactList = ({ contacts, onDeleteContact }) => {

  return (
    <ul>
      {contacts.map(({id, name, number}) => {
        return (
          <ListItem key={id}>
            <Icon></Icon>
            <span>{name}:</span>
            <span>{number}</span>
            <Button
              onClick={() => onDeleteContact(id)}
            >Delete</Button>
          </ListItem>
        )
      })}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }))
}


export default ContactList;