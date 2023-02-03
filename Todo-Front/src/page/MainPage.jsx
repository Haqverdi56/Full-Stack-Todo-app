import React from 'react'
import { useState } from 'react'
import { axiosNetwork, BASE_URL } from '../axiosNetwork/axiosInstance';

function MainPage() {
  const [title, setTitle] = useState('')

  const formSubmit = (e) => {
    e.preventDefault();
    axiosNetwork.add(BASE_URL, title)
  }

  return (
    <div>
      <h2>Todo App</h2>
      <div>
        <form className='formTodo' onSubmit={formSubmit}>
          <input defaultValue={title} onChange={(e)=>setTitle({title:e.target.value})} type="text" placeholder='Add Todo' />
          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default MainPage
