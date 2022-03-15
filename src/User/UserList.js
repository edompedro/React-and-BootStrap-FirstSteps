import React from "react";
import UserCard from "./UserCard";
import style from './UserList.module.css';
const UserList = (props) =>{

    return (
        <div className={style.userList}>
            {props.users.map( user => <UserCard key={user.id} email={user.email} password={user.password} id={user.id}/>)}
        </div>
    )
}
export default UserList;