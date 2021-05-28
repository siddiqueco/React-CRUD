import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import shortid from 'shortid'



export const usersContext = createContext()

const UsersContextProvider = (props) => {

   const [users, setUsers] = useState(() => {
      const localData = localStorage.getItem('users')
      return localData ? JSON.parse(localData) : []
   })

   const addUser = (name, email, gender, bio, birthDate, address) => {
      setUsers([...users, { id: shortid.generate(), name, email, bio, gender, birthDate, address }])
   }

   const deleteUser = (id) => {
      const newUsers = users.filter(user => user.id !== id)
      setUsers(newUsers)
      toast.error('User deleted successfully')
   }

   const updateUser = (id, name, email, gender, birthDate, bio, address) => {
      let userList = [...users]
      const newUser = { id, name, email, gender, birthDate, bio, address }
      const filterUser = userList.find(user => user.id == id)
      const index = userList.indexOf(filterUser)
      userList[index] = newUser

      setUsers(userList)
   }

   useEffect(() => {
      localStorage.setItem('users' , JSON.stringify(users))
   },[users])

   return (
      <usersContext.Provider value={{ users, addUser, deleteUser, updateUser }}>
         {props.children}
      </usersContext.Provider>
   )

}

export default UsersContextProvider