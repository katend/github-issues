import React from "react";

const Issue = (props) => {
    const {id, title} = props.issue 
    return (
        <ul>
            <li>Issue ID: {id}</li>
            <li>Title: {title}</li>
        </ul>
    )
}

export default Issue;