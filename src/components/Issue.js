import React from "react";

const Issue = (props) => {
    const {issue, active, onHighlight} = props 
    return (
        <ul 
            className={active ? "highlight" : "pointer"} 
            onClick={() => onHighlight(issue)}
        >
            <li>Issue ID: {issue.id}</li>
            <li>Title: {issue.title}</li>
        </ul>
    )
}

export default Issue;