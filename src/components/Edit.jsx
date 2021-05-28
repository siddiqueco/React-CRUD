import React, { useContext, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { usersContext } from '../contexts/usersContext'
import { toast } from 'react-toastify'



const Edit = () => {
   const { users, updateUser } = useContext(usersContext)
   const history = useHistory()
   const { id } = useParams()

   const user = [...users].filter(user => user.id == id)

   const [name, setName] = useState(user[0].name)
   const [email, setEmail] = useState(user[0].email)
   const [gender, setGender] = useState(user[0].gender)
   const [birthDate, setBirthDate] = useState(user[0].birthDate)
   const [bio, setBio] = useState(user[0].bio)
   const [address, setAddress] = useState(user[0].address)


   const handleSubmit = (e) => {
      e.preventDefault()
      updateUser(id, name, email, gender, birthDate, bio, address)
      history.push('/')
      toast.info('updated successfully')
   }

   return (
      <div>
         <h1>ID: {id}</h1>
         <form className='mt-2' onSubmit={handleSubmit}>
            <Form.Group>
               <Form.Label>Name</Form.Label>
               <Form.Control
                  type="text"
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </Form.Group>
            <Form.Group >
               <Form.Label>Email</Form.Label>
               <Form.Control
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </Form.Group>
            <Form.Group >
               <Form.Label>Date of Birth</Form.Label>
               <Form.Control
                  type="date"
                  name='birthDate'
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
               />
            </Form.Group>
            <Form.Group >
               <Form.Label>Bio</Form.Label>
               <Form.Control
                  type="text"
                  name='bio'
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
               />
            </Form.Group>
            <Form.Group >
               <Form.Label>Address</Form.Label>
               <Form.Control
                  type="text"
                  name='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
               />
            </Form.Group>
            <div>
               <Form.Group>
                  <Form.Label>
                     Gender:
               </Form.Label>
                  <Form.Check
                     type="radio"
                     label="Male"
                     checked={gender == 'male'}
                     value='male'
                     id="male"
                     inline
                     onChange={(e) => setGender(e.target.value)}
                  />
                  <Form.Check
                     type="radio"
                     label="Female"
                     checked={gender == 'female'}
                     value='female'
                     id="female"
                     inline
                     onChange={(e) => setGender(e.target.value)}
                  />
               </Form.Group>
            </div>
            <Link to='/'>
               <Button ><i className="fas fa-chevron-circle-left"></i></Button>
            </Link>
            <Button variant="primary" type="submit" className='ml-2'>
               Update
             </Button>
         </form>
      </div>
   )
}

export default Edit
