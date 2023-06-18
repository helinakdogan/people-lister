import React from 'react'

const AddUser = (props) => {
  return (
    <form>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text'></input>
   
        <label htmlFor='username'>Age (Years)</label>
        <input id='age' type='number'></input>
   
        <button type='submit'>Add user</button>
   </form>
  )
}

export default AddUser