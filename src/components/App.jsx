import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filer from './Filter/Filter';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);

  // const [, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div style={{ paddingLeft: 15 }}>
      <h1 className="contact_title">Phonebook</h1>
      <ContactForm />
      <h2 className="contact__title">Contacts</h2>
      <Filer />
      {visibleContacts.length > 0 && (
        <ContactList visibleContacts={visibleContacts} />
      )}
    </div>
  );
}
