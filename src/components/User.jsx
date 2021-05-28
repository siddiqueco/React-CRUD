import React from 'react'
import {Link} from 'react-router-dom'
import {Button,} from 'react-bootstrap'

const User = ({user, deleteUser,handleShow}) => {
   return (
      <tr>
         <td>{user.name}</td>
         <td>{user.email}</td>
         {/* <td>{user.gender}</td>
         <td>{user.birthDate}</td>
         <td>{user.bio}</td>
         <td>{user.address}</td> */}
         <td>
            <Button variant='success' className="mr-2" onClick={(e) => handleShow(user.id)}>
               <i className="fab fa-readme"></i>
            </Button>
            <Link to={`/edit/${user.id}`}>
               <Button variant='info' className="mr-2"><i className="fas fa-edit"></i></Button>
            </Link>
            <Button variant='danger' className="" onClick={(e) => deleteUser(user.id)}>
               <i className="fas fa-trash"></i>
            </Button>
         </td>
      </tr>
   )
}

export default User
