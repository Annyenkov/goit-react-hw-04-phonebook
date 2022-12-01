import React from "react";
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

export default ContactList;