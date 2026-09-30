import { useState } from 'react';

function Form({ add_contact }) {
  const [new_contact, setNewContact] = useState({
    name: '',
    phoneNo: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!new_contact.name.trim() || !new_contact.phoneNo.trim()) {
      return;
    }

    add_contact({
      name: new_contact.name.trim(),
      phoneNo: new_contact.phoneNo.trim(),
      image: '',
    });

    setNewContact({
      name: '',
      phoneNo: '',
    });
  }

  return (
    <form className="add-contact-f" onSubmit={handleSubmit}>
      <input
        placeholder="christian bale"
        name="name"
        type="text"
        value={new_contact.name}
        onChange={handleChange}
      />

      <input
        placeholder="07xxxxx"
        name="phoneNo"
        type="text"
        value={new_contact.phoneNo}
        onChange={handleChange}
      />

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default Form;