import React from "react";
import { ListGroup, Badge } from "react-bootstrap";

const UserCard = (props) => {

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
            <Badge bg="primary" pill>
            {props.id}
            </Badge>
        </ListGroup.Item>
    </ListGroup>
    )
}
export default UserCard;