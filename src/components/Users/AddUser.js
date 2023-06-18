import React from 'react'
import classes from './AddUser.module.css';

const AddUser = (props) => {

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (

    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text'></input>
   
        <label htmlFor='username'>Age (Years)</label>
        <input id='age' type='number'></input>
   
        <button type='submit'>Add user</button>
   </form>
  )
}

export default AddUser