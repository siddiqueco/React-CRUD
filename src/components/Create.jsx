import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { usersContext } from '../contexts/usersContext'



const Create = () => {
   const history = useHistory()
   const { addUser } = useContext(usersContext)

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [bio, setBio] = useState('')
   const [gender, setGender] = useState('')
   const [birthDate, setBirthDate] = useState('')
   const [address, setAddress] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      if (gender === '') {
         toast.warn('some fields are empty')
      } else {
         addUser(name, email, gender, bio, birthDate, address)
         history.push('/')
      }

   }

   return (
      <div>
         <h3 className='mt-3'>Create New User</h3>
         <Form onSubmit={handleSubmit} className='mt-2'>
            <Form.Group controlId="name">
               <Form.Label>Name</Form.Label>
               <Form.Control
                  type="text"
                  placeholder="Name"
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
               />
            </Form.Group>
            <Form.Group controlId="email">
               <Form.Label>Email</Form.Label>
               <Form.Control
                  type="email"
                  placeholder="email"
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
            </Form.Group>
            <Form.Group controlId="birthDate">
               <Form.Label>Date of Birth</Form.Label>
               <Form.Control
                  type="date"
                  name='birthDate'
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
               />
            </Form.Group>
            <Form.Group controlId="bio">
               <Form.Label>Bio</Form.Label>
               <Form.Control
                  type="text"
                  placeholder="bio"
                  name='bio'
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  required
               />
            </Form.Group>
            <Form.Group controlId="address">
               <Form.Label>Address</Form.Label>
               <Form.Control
                  type="text"
                  name='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
               />
            </Form.Group>
            <Form.Group>
               <Form.Label>
                  Gender: 
               </Form.Label>
               <Form.Check
                  className='ml-2'
                  type="radio"
                  label="Male"
                  name="gender"
                  value='male'
                  id="male"
                  inline
                  onChange={(e) => setGender(e.target.value)}
               />
               <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  value="female"
                  id="female"
                  inline
                  onChange={(e) => setGender(e.target.value)}
               />
            </Form.Group>


            <Link to='/'><Button ><i className="fas fa-chevron-circle-left"></i></Button></Link>
            <Button variant="primary" type="submit" className='ml-2'>
               Add <i className="fas fa-plus-circle"></i>
            </Button>
         </Form>
      </div>
   )
}

export default Create
