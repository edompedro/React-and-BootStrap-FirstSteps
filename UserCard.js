import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const UserCard = (props) => {

    const onDelete = (event) => {
        event.preventDefault();
        // console.log(props);
        // console.log(props.id);
        props.delete(props.id);

    }
    return(
        <ListGroup as="ol" className="mb-3">
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
            <div className="fw-bold">{props.email}</div>
                {props.password}
            </div>
            <Button variant="outline-danger" onClick={onDelete}>Remover</Button>
        </ListGroup.Item>
    </ListGroup>
    )
}
export default UserCard;