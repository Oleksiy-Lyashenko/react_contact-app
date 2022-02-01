import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ContactView.scss'

const ContactPerson = ({ contacts, deleteContact }) => {
  const { personalId } = useParams();

  const newContact = contacts.find(x => x.id === +personalId);
  console.log(newContact);

  return (
    <div className='contact-view'>
      <div className='contact-view__info'>
        {newContact ? (
          <>
            <p>Id: {newContact.id}</p>
            <p>First name: {newContact.firstname}</p>
            <p>Last name: {newContact.lastname}</p>
            <p>City: {newContact.city}</p>
            <p>Email: {newContact.email}</p>
            <p>Phone: {newContact.tel}</p>
          </>
        ) : (
          <>
            <p className=''>You deleted this contact</p>
            <p className=''>Please, click <b>Back</b>.</p>
          </>
        )}
      </div>

      <div className='contact-view__bottom'>
        {newContact ? (
          <>
            <Link to='/react_contact-app/' className='contact-view__button'>Back</Link>

            <button
              className='contact-view__button contact-view__button-delete'
              onClick={() => deleteContact(newContact.id)}
            >
              Delete
            </button>

            <Link to={`/react_contact-app/edit/${newContact.id}`} className='contact-view__button'>Edit</Link> 
          </>
        ) : (
          <>
            <Link to='/react_contact-app/' className='contact-view__button'>Back</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactPerson;