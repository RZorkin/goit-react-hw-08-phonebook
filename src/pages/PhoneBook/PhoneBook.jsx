import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/contactsOperations';

import { useSelector } from 'react-redux';
import { selectorContscts } from '../../redux/contacts/selectors';
import { selectorIsLoading } from '../../redux/contacts/selectors';
import { selectorError } from '../../redux/contacts/selectors';

import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { Section } from '../../components/Section/Section';

const Contacts = () => {
  const contacts = useSelector(selectorContscts);
  const error = useSelector(selectorError);
  const isLoading = useSelector(selectorIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {error && error}
        <ContactList />
        {contacts.length > 0 && <ContactList />}
      </Section>
    </>
  );
};

export default Contacts;
