import { useState, useEffect } from "react";
import {} from "./styles.css"
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:"Ecem",
      phone_number:123
    },
    {
      fullname:"Dilara",
      phone_number:456
    },
    {
      fullname:"Hakan",
      phone_number:789
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
