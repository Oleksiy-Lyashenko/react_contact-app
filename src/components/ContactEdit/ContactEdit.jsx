import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ContactEdit.scss';

const ContactEdit = ({contacts, setContacts}) => {
  const { personalId } = useParams();

  let newContact = contacts.find(x => x.id === +personalId);

  const [firstName, setFirstName] = useState(newContact.firstname);
  const [lastName, setLastName] = useState(newContact.lastname);
  const [city, setCity] = useState(newContact.city);
  const [email, setEmail] = useState(newContact.email);
  const [phone, setPhone] = useState(newContact.tel);

  const handleSubmit = (event) => {
    event.preventDefault();

    let change = window.confirm('Do you want to change?');

    if (change) {
      alert(`Your contact was changed. Please, click Back.`);

      const newArr = contacts.map(contact => {
        if (contact.id === newContact.id) {
          const oldContact = {...contact};

          contact.firstname = firstName;
          contact.lastName = lastName;
          contact.email = email;
          contact.tel = phone;
          contact.prev = oldContact;
        }

        return contact;
      })

      setContacts([...newArr])
    } else {
      alert(`Your contact wasn't change. Please, click Back.`);

      setFirstName(newContact.firstName)
      setLastName(newContact.lastName)
      setCity(newContact.city)
      setEmail(newContact.email)
      setPhone(newContact.tel)
    }

    console.log(contacts);
  }

  const changeContact = () => {
    if (newContact.prev !== undefined) {
      
      setFirstName(newContact.prev.firstname)
      setLastName(newContact.prev.lastname)
      setCity(newContact.prev.city)
      setEmail(newContact.prev.email)
      setPhone(newContact.prev.tel)
    }
  }

  return (
    <>
      {newContact && (
        <>
          <form 
            onSubmit={event => handleSubmit(event)}
            className='form'
          >

            <input
              type="text"
              value={firstName}
              onChange={event => {
                setFirstName(event.target.value)
              }}
              className='form__field'
              required
            />

            <input
              type="text"
              value={lastName}
              onChange={event => {
                setLastName(event.target.value)
              }}
              className='form__field'
              required
            />

            <input
              type="text"
              value={city}
              onChange={event => {
                setCity(event.target.value)
              }}
              className='form__field'
              required
            />

            <input
              type="email"
              value={email}
              onChange={event => {
                setEmail(event.target.value)
              }}
              className='form__field'
              required
            />

            <input 
              type="tel"
              pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
              value={phone}
              onChange={event => {
                setPhone(event.target.value)
              }}
              className='form__field'
              required
            />

            <div>
              <button type='submit' className='button__edit'>Change</button>

              <Link to='/react_contact-app/'>
                <button className='button__edit'>
                  Back
                </button>
              </Link>

              <button
                type='button'
                className='button__edit button__edit-return'
                onClick={changeContact}
              >
                Return
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default ContactEdit;