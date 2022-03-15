import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import style from './UserInput.module.css';
const UserInput = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const submitUser = (event) => {
        event.preventDefault();

        const user = {
            email: email,
            password: password,
            id: Math.random().toString()
        };
        props.addNewUser(user);
        setEmail('');
        setPassword('');
    }

    return(
        // <div className={style.formUser}>
        <Form className="justify-content-md-center" onSubmit={submitUser}>
            
            <div className={style.formUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={updateEmail} />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={updatePassword} />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </div>
            
        </Form>
    )
}

export default UserInput;