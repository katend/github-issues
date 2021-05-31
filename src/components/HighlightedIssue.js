import React from "react";

const HighlightedIssue = (props) => {
    const {id, title} = props.issue; 
    return (
        <ul>
            <li>Issue ID: {id}</li>
            <li>Title: {title}</li>
        </ul>
    )
}

export default HighlightedIssue;