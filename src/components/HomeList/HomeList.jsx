import React from 'react';
import ContactsTable from '../ContactsTable/ContactsTable';
import FormField from '../FormField/FormField';

const HomeList = ({
  addContact,
  contacts,
  deleteContact,
}) => {
  return (
    <>
      <FormField
        addContact={addContact}
        contacts={contacts}
      />

      {contacts.length ? (
        <ContactsTable
          contacts={contacts}
          deleteContact={deleteContact}
        />
      ) : (
        <p></p>
      )}
      
    </>
  );
};

export default HomeList;