import { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.scss';
import ContactEdit from './components/ContactEdit/ContactEdit';
import ContactPerson from './components/ContactView/ContactView';
import HomeList from './components/HomeList/HomeList';

function App() {

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || [],
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  }

  const deleteContact = (contactId) => {
    let del = window.confirm('Do you want delete?');

    if(del) {
      setContacts(contacts.filter(contact => contact.id !== contactId));
    }

  }

  return (
    <div className="App">
      <header className='header'>
        <Link to='/' className='header__title'>
          Contact App
        </Link>
      </header>
      <Routes>
        <Route
          path='/'
          element={<HomeList
            addContact={addContact}
            contacts={contacts}
            deleteContact={deleteContact}
          />}
        />

        <Route
          path='/contacts/:personalId'
          element={<ContactPerson 
            contacts={contacts}
            deleteContact={deleteContact}
            />
          }
        />

        <Route
          path='/edit/:personalId'
          element={<ContactEdit
            contacts={contacts}
            setContacts={setContacts}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
