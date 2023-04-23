import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
// import {uuid} from 'uuidv4';

function App() {
  const LOCAL_STORAGE_KEY="contacts1";
  const [contacts,setContacts]=useState([]);

  const addContactHandler=(contact)=>{
    // console.log(contact)
    setContacts([...contacts,contact]);
  }
  
  const removeContactHandler = (id) => {
    const temp = contacts.filter((t)=>{
      return t.id !== id;
    })
    setContacts(temp);
  }

  // useEffect(()=>{
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   console.log("retriveContacts",retriveContacts)
  //   if(retriveContacts){
  //     setContacts(retriveContacts);
  //   }  
  //   },[]
  // );

  // useEffect(()=>{
  //   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))},
  //   [contacts]
  // );

  
  
  return (
    <div className='ui container'>
      <Header /><br></br><br></br><br></br>
      <AddContact addContactHandler={addContactHandler}/><br></br>
      <ContactList contacts={contacts} getContactId = {removeContactHandler}/>
    </div>
  );
}

export default App;
