import React, { useContext, useState } from 'react'
import { Button, Table, Modal, ModalBody, ModalTitle, ModalFooter, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { usersContext } from '../contexts/usersContext';
import User from './User';


const Home = () => {
   const { users, deleteUser } = useContext(usersContext)


   const [user, setUser] = useState()

   const [show, setShow] = useState(false)

   const handleShow = (id) => {
      setShow(true)
      setUser(users.find(item => item.id === id))
   }
   const handleClose = () => {
      setShow(false)
   }

   return (
      <div>
         <div>
            <h1 >List of users</h1>
            <Link to='/create'>
               <Button variant='primary' className='mb-2' style={{ width: '20%' }}>
                  Add user  <i className="fas fa-user-plus"></i>
               </Button>
            </Link>
         </div>


         <div>
            {users.length === 0 ? <h3 className='no-user'>Add user to see list</h3> : (
               <Table striped bordered hover>
                  <thead className="text-center">
                     <tr>
                        <th>Name</th>
                        <th>Email</th>
                        {/* <th>Gender</th>
                                 <th>Birthdate</th>
                                 <th>Bio</th>
                                 <th>Address</th> */}
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody className="text-center">
                     {users.map(user => (
                        <User key={user.id} user={user} deleteUser={deleteUser} handleShow={handleShow} />
                     ))}
                  </tbody>
               </Table>
            )}
         </div>

         {/* <div>
            <Row>
               <Col xs={8} md={6}>
                  Name
                  </Col>
               <Col xs={8} md={6}>
                  Action
                  </Col>
            </Row>
            <hr />
            {users.map(user => (
               <>
               <Row>
                  <Col xs={12} md={6}>
                     <p>{user.name}</p>
                  </Col>
                  
                  <Col xs={12} md={6}>
                     <Button variant='danger' className="action_btn mr-2" onClick={(e) => handleShow(user.id)}>
                        <i className="fab fa-readme"></i>
                     </Button>
                     <Link to={`/edit/${user.id}`}>
                        <Button variant='info' className="action_btn mr-2"><i className="fas fa-edit"></i></Button>
                     </Link>
                     <Button variant='danger' className="action_btn" onClick={(e) => deleteUser(user.id)}>
                        <i className="fas fa-trash"></i>
                     </Button>
                  </Col>
                  <Col xs={12} md={6}>
                  </Col>
               </Row>
               <hr/>
               </>
            ))}
         </div> */}


         {/* user details with modal */}
         <Modal show={show} onHide={handleClose} >
            <Modal.Header >
               <ModalTitle style={{ margin: "0 auto" }}>User Info</ModalTitle>
            </Modal.Header>
            <ModalBody>
               {user &&
                  <div className='card p-3'>
                     <h4>Name: {user.name}</h4> <br />
                     <h5>Email: {user.email}</h5> <br />
                     <h5>Gender: {user.gender}</h5> <br />
                     <h5>BirthDate: {user.birthDate}</h5> <br />
                     <h5>Bio: {user.bio}</h5> <br />
                     <h5>Address: {user.address}</h5>
                  </div>
               }
            </ModalBody>
            <ModalFooter>
               <Button variant="warning" onClick={handleClose}>
                  <i className="fas fa-times"></i>
               </Button>
            </ModalFooter>
         </Modal>
      </div>
   )
}
export default Home
