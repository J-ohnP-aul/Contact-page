import { useState } from 'react';
import Contact from './components/Contact.jsx';
import Form from './components/Form.jsx';

import contact_list from './contact_list.js';

function App() {
  const [contacts, setContacts] = useState(contact_list);

  function add_contact(newContact) {
    setContacts((prevContacts) => [
      { ...newContact, id: Date.now() },
      ...prevContacts,
    ]);
  }

  const contact_data = contacts.map((contact) => (
    <Contact key={contact.id} {...contact} />
  ));

  return (
    <>
      <Form add_contact={add_contact} />
      <div className="contact-list">{contact_data}</div>
    </>
  );
}

export default App;