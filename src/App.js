import React, {useState} from 'react';
import NavBar from './UI/NavBar';
import UserInput from './User/UserInput';
import UserList from './User/UserList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const dummyUsers = [{
  email: 'pedroedomnunes@gmail.com',
  password: '00743540000',
  id: Math.random().toString()
}];

function App() {

  const [users, setUsers] = useState(dummyUsers);

  const addNewUser = (user) => {
    setUsers( (users) => { 
      return [user, ...users];
    });
  }

  return (
    <div className="App">
      
      <NavBar UserName={'Integrando conhecimentos de React e add BootStrap'}/>
      <UserInput addNewUser={addNewUser}/>
      <UserList users={users}/>

    </div>
  );
}

export default App;
