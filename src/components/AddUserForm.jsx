import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
import { Button, Form } from 'react-bootstrap';

const AddUserForm = () => {
  const [user,setUser]=useState({id:"",name:"",email:"",phone:"",address:""})
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    
    dispatch(addUser(user));
    setUser({id:"",name:"",email:"",phone:"",address:""})
  };

  return (
    <div className="container mt-5">
      <h2>Add User</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={(e) => setUser({...user,id:e.target.value})}/>
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={(e) => setUser({...user,name:e.target.value})}/>
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUser({...user,email:e.target.value})}/>
        </Form.Group>

        <Form.Group controlId="formPhone" className="mt-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" onChange={(e) => setUser({...user,phone:e.target.value})}/>
        </Form.Group>

        <Form.Group controlId="formAddress" className="mt-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" onChange={(e) => setUser({...user,address:e.target.value})}/>
        </Form.Group>

        <Button type="submit" className="mt-3">
           Add User
        </Button>    
      </Form>
   </div>
  );
};

export default AddUserForm;
