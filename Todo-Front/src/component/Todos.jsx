import React from 'react'
import '../css/todos.css'
import { useEffect } from 'react';
import { useState } from 'react'
import { axiosNetwork, BASE_URL } from '../axiosNetwork/axiosInstance';
import { FiDelete } from 'react-icons/fi'
import { GrUpdate } from 'react-icons/gr'
import { Modal } from 'antd';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [updateItem, setUpdateItem] = useState({id: undefined,title: ""});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const todoFetch = () => {
    axiosNetwork.getAll(BASE_URL)
    .then(res => setTodos(res))
  }
  useEffect(() => {
    todoFetch()
  }, [todos])

  const deleteTodo = (id) => {
    axiosNetwork.delete(BASE_URL, id)
  }

  
  const productUpdate = (item) => {
    setIsModalOpen(true);
    setUpdateItem({
      id: item._id,
      title: item.title,
    })
  }
  const handleUpdate = () => {
    setIsModalOpen(false);
    axiosNetwork.update(BASE_URL, updateItem.id, updateItem)
  };
  const isUpdated = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUpdateItem(
      {
        ...updateItem,
        [name]: value
      }
    )
  }
  return (
    <div>
      <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                todos && todos.map((el,i) => (
                  <tr key={i}>
                    <td>{el.title}</td>
                    <td><button onClick={()=>deleteTodo(el._id)}><FiDelete /> Delete</button></td>
                    <td><button onClick={() => productUpdate(el)}><GrUpdate /> Update</button></td>
                  </tr>
                ))
              }
              <Modal open={isModalOpen} onOk={handleUpdate} onCancel={() => setIsModalOpen(false)} >
              {
                updateItem && (
                  <div className='modal'>
                    <div>
                      <label htmlFor="Name">Title</label>
                      <input type="text" value={updateItem.name} name='title' id='title' onChange={(e) => isUpdated(e)} />
                    </div>
                  </div>
                )
              }
            </Modal>
          </tbody>
        </table>
    </div>
  )
}

export default Todos
