import React, { useState } from 'react';
import './FormField.scss';

const FormField = ({addContact, contacts}) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [city, setCity] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: contacts.length + 1,
      firstname: firstName,
      lastname: lastName,
      city: city,
      email: email,
      tel: phone,
      prev: null,
    }

    console.log(contacts);

    addContact(newContact)

    setFirstName('');
    setLastName('')
    setCity('')
    setEmail('');
    setPhone('');
  }

  return (
    <div>
      <form
        onSubmit={event => handleSubmit(event)}
        className='form'
      >

        <input
          type="text"
          placeholder='First name'
          value={firstName}
          onChange={event => {
            setFirstName(event.target.value);
          }}
          className='form__field'
          required
        />

        <input
          type="text"
          placeholder='Last name'
          value={lastName}
          onChange={event => {
            setLastName(event.target.value);
          }}
          className='form__field'
          required
        />

        <input
          type="text"
          placeholder='City'
          value={city}
          onChange={event => {
            setCity(event.target.value);
          }}
          className='form__field'
          required
        />

        <input
          type="email"
          placeholder='Email: name@gmail.com'
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
          className='form__field'
          required
        />

        <input
          type="tel"
          pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
          placeholder='Phone: 123-456-7890'
          value={phone}
          onChange={event => {
            setPhone(event.target.value);
          }}
          className='form__field'
          required
        />

        <button type='submit' className='button-add'>Add contact</button>
      </form>
    </div>
  );
};

export default FormField;