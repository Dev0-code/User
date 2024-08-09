import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';

const App = () => {
  return (
    <div className="App">
      <AddUserForm />
      <UserList />
    </div>
  );
};

export default App;
