import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, addContact }) => {
 
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() => {
    const foundDuplicate = contacts.find((contact) => contact.name === name)
    if (foundDuplicate !== undefined) {
      setDuplicate(true);
      alert('That name is already in use, please choose another.')
    } else {
      setDuplicate(false);
    };
  }, [name, contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          tiles={contacts}
        />
      </section>
    </div>
  );
};
