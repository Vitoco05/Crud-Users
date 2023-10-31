import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import { EMPTY_VALUES_FORM } from './shared/contents'

const BASE_URL = "https://user-api-dev-baqn.3.us-1.fl0.io/api/v1/"

function App() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [isUserToUpdate, setIsUserToUpdate] = useState(null)
  const [users, setUsers] = useState([])
  

  const getAllUsers = () => {
    axios
    .get(BASE_URL + "users/")
    .then(({data}) => setUsers(data))
    .catch((error) => console.log(error))
  }

  const createUser = (newUser, reset) => {
    axios
    .post(BASE_URL + "users/", newUser)
    .then(() => {
      getAllUsers()
      setIsShowModal(false)
      reset(EMPTY_VALUES_FORM)
    })
    .catch((error) => console.log(error))
  }

  const deleteUser = (idUser) => {
    axios
    .delete(BASE_URL + `users/${idUser}/`)
    .then(() => getAllUsers())
    .catch((error) => console.log(error))
  }

  const updateUser = (userUpdated, reset) => {
    axios
    .put(BASE_URL + `users/${isUserToUpdate.id}/`, userUpdated)
    .then(() => {
      getAllUsers()
      setIsShowModal(false)
      reset(EMPTY_VALUES_FORM)
      setIsUserToUpdate(false)
    })
    .catch((error) => console.error(error))
  }
  
  const handleClickUpdateUser = (user) => {
    setIsShowModal(true)
    setIsUserToUpdate(user)
  }

  const handleClickOpenModal = () => {
    setIsShowModal(true)
  }
  
  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <main className='main'>

      <header className='header'>
        <h1 className='text-3xl principal-title'>Users Crud Academlo</h1>
        <button onClick={handleClickOpenModal} className='main__button absolute top-2 right-3' >
          <i className="fa-solid fa-plus"></i> Create an User
        </button>
      </header>
      
      <UsersForm 
        isShowModal={isShowModal} 
        createUser={createUser}
        isUserToUpdate={isUserToUpdate}
        updateUser={updateUser}
        setIsShowModal={setIsShowModal}
        setIsUserToUpdate={setIsUserToUpdate}
      />

      <UsersList 
        users={users}
        deleteUser={deleteUser}
        handleClickUpdateUser={handleClickUpdateUser}
      />
    </main>
  )
}

export default App
