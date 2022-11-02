import React, { useState } from "react";
import styles from "./Contacts.module.css";
import Card from "../UI/Card";
import Header from "../Header";
import Menu from "../Menu";
import Button from "../UI/Button";

const Contacts = (props) => {
  return (
    <>
      <Header>
        <h1>{props.headerTitle}</h1>
      </Header>
      <Menu button1="Home" button2="New" setPage={props.setPage}></Menu>
      <Card className={styles.cardList}>
        {props.contactsList.map((co) => {
          return (
            <Card className={styles.cardContact} key={co.id}>
              <div className={styles.namePlusLastName}>
                <h3>{co.firstName}</h3>
                <h3>{co.lastName}</h3>
              </div>
              <div className={styles.phoneNumber}>
                <h3>{co.phoneNumber}</h3>
              </div>
              <Button>Delete</Button>
            </Card>
          );
        })}
      </Card>
    </>
  );
};

export default Contacts;
