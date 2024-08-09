import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table ,Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { editUser,deleteUser } from '../store/userSlice';


const UserList = () => {
  const dispatch = useDispatch();
  const [List,setList]=useState([])
  const users = useSelector((state) => state.userSlice.users);
const [edit,setEdit]=useState({id:"",name:"", phone:"",email:"",address:""})

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (user) =>{
    setEdit({id:user.id,name:user.name,phone:user.phone,email:user.email,address:user.address})
    setShow(true)

  };


  useEffect(() => {
    setList(users)
  }, [users]);
  console.log(List);

  const saveEdit=(e)=>{
    e.preventDefault()
    console.log(edit);
    dispatch(editUser({id:edit.id,updatedData:edit}))
    setEdit({id:"",name:"", phone:"",email:"",address:""})
    handleClose()
  }
  

  return (
 <>
      <div className="container mt-5">
      
          <>
            <h2>User List</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {List && List.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>
                      <Button variant="warning" onClick={() => handleShow(user)}className="me-2">
                      <i className="fa-regular fa-pen-to-square" style={{color: "#000000",}} />
                      </Button>
                      <Button variant="danger" onClick={() => dispatch(deleteUser(user.id))}>
                      <i className="fa-solid fa-trash" style={{color: "#000000",}} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={edit.name} placeholder="Enter name" onChange={(e) => setEdit({...edit,name:e.target.value})}/>
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={edit.email} placeholder="Enter email" onChange={(e) => setEdit({...edit,email:e.target.value})}/>
        </Form.Group>

        <Form.Group controlId="formPhone" className="mt-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" value={edit.phone} placeholder="Enter phone number" onChange={(e) => setEdit({...edit,phone:e.target.value})}/>
        </Form.Group>

        <Form.Group controlId="formAddress" className="mt-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={edit.address} placeholder="Enter address" onChange={(e) => setEdit({...edit,address:e.target.value})}/>
        </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveEdit}>Save</Button>
        </Modal.Footer>
      </Modal>
 </>

  );
};

export default UserList;
