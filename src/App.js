import styles from "./App.module.css";
import React, { useState } from "react";
import Homepage from "./components/Pages/Homepage";
import NewContact from "./components/Pages/NewContact";
import Contacts from "./components/Pages/Contacts";
import Card from "./components/UI/Card";

const DUMMY_CONTACTS = [
  {
    id: "1",
    firstName: "Francesca",
    lastName: "Verdi",
    phoneNumber: "123456789"
  },
  {
    id: "2",
    firstName: "Mario",
    lastName: "Rossi",
    phoneNumber: "123456788"
  },
  {
    id: "3",
    firstName: "Ciro",
    lastName: "Esposito",
    phoneNumber: "123456787"
  }
];

function App() {
  const [contactsList, setContactsList] = useState(DUMMY_CONTACTS);
  const [page, setPage] = useState("Home");
  let view = "";

  const addNewContact = (enteredName, enteredLastName, eneteredPhoneNumber) => {
    setContactsList((prevContactsList) => {
      return [
        ...prevContactsList,
        {
          id: Math.random().toString(),
          firstName: enteredName,
          lastName: enteredLastName,
          phoneNumber: eneteredPhoneNumber
        }
      ];
    });
  };

  switch (page) {
    case "Home":
      view = <Homepage headerTitle="Phone book" setPage={setPage} />;
      break;
    case "All":
      view = (
        <Contacts
          headerTitle="Contacts"
          setPage={setPage}
          contactsList={contactsList}
        />
      );
      break;
    case "New":
      view = (
        <NewContact
          headerTitle="New contact"
          setPage={setPage}
          addNewContact={addNewContact}
        />
      );
      break;
    default:
      view = <h1>Somthing went wrong</h1>;
  }

  return <Card className={styles.mainPage}>{view}</Card>;
}

export default App;
