import React, {useState, useRef} from 'react';
import styles from "./NewContact.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Header from "../Header";
import Menu from "../Menu";

const NewContact = (props) => {
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const collectNewContact = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const eteredLastName = lastNameInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    props.addNewContact(enteredName, eteredLastName, enteredPhoneNumber);
    nameInputRef.current.value = '';
    lastNameInputRef.current.value = '';
    phoneNumberInputRef.current.value = '';
  }

  return (
    <>
      <Header>
        <h1>{props.headerTitle}</h1>
      </Header>
      <Menu
        button1="Home"
        button2="All"
        setPage={props.setPage}
      ></Menu>
      <Card className={styles.cardForm}>
        <form onSubmit={collectNewContact}>
          <label>
            Name <input type="text" ref={nameInputRef}></input>
          </label>
          <label>
            Last name <input type="text" ref={lastNameInputRef}></input>
          </label>
          <label>
            Phone number <input type="text" ref={phoneNumberInputRef}></input>
          </label>
          <Button type="submit">Save</Button>
        </form>
      </Card>
    </>
  );
};

export default NewContact;
