import React from 'react';
import { Link } from 'react-router-dom';
import './ContactsTable.scss';

const ContactsTable = ({contacts, deleteContact}) => {
  return (
    <div className='contact'>
      <table className='table'>
        <thead className='table__head'>
          <tr className='table__title'>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>City</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
          return (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.firstname}</td>
              <td>{contact.lastname}</td>
              <td>{contact.city}</td>
              <td>{contact.email}</td>
              <td>{contact.tel}</td>
              <td>
                <Link
                  to={`/edit/${contact.id}`}
                  className='table__button'
                >
                  Edit
                </Link>

                <div
                  onClick={() => deleteContact(contact.id)}
                  className='table__button table__button-delete'
                >
                  Delete
                </div>

                <Link
                  to={`/contacts/${contact.id}`}
                  className='table__button'
                >
                  View
                </Link>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;