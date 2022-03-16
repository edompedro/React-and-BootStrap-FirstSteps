import React from "react";
import UserCard from "./UserCard";
import style from './UserList.module.css';

const UserList = (props) =>{

    const deletar = (id) => {
        props.onDeletar(id);
    }
    return (
        <div className={style.userList}>
            {props.users.map( user => <UserCard key={user.id} 
                                                email={user.email} 
                                                password={user.password} 
                                                id={user.id} 
                                                delete={deletar}
                                                                />)}
        </div>
    )
}
export default UserList;