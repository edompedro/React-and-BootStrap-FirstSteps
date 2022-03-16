import React, {useState} from 'react';
import NavBar from './UI/NavBar';
import UserInput from './User/UserInput';
import UserList from './User/UserList';
import style from './User/UserList.module.css';
import { Alert } from 'react-bootstrap';
import { render } from '@testing-library/react';
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

  const deletando = (id) => {

    const userDeletado = users.filter(user => user.id === id);
    //mensagem avisando que deeltou corretamente
    function Alertando() {
      const [show, setShow] = useState(true);
    
      if (show) {
        return (
          <div className='alerta'>
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Usuário removido com sucesso!</Alert.Heading>
            <p>
              O usuário: {userDeletado[0].email} foi removido do sistema com exito. Em caso de engano,
              basta adicionar o mesmo novamente à aplicação por meio do formulário acima.
            </p>
          </Alert>
          </div>
        );
      }
      return null;
    }
    render(<Alertando/>);
    //renderizando o alerta


    setUsers( users => {
      const userUpdate = users.filter(user => user.id !== id); 
      return userUpdate;
    });
    return null;
  }

  let conteudo = (
    <div className={style.userList}>
      <p>Não foi encontrado nenhum usuário.</p>
    </div>
    );
  if (users.length > 0) {conteudo = (<UserList users={users} onDeletar={deletando}/>)};

  return (
    <div className="App">
      
      <NavBar UserName={'Integrando conhecimentos de React e add BootStrap'}/>
      <UserInput addNewUser={addNewUser}/>
      {conteudo};

    </div>
  );
}

export default App;
