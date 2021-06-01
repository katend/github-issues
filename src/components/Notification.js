import React from "react";

import HighlightedIssue from "./HighlightedIssue";

const Notification = (props) => {
    return (
        <div>
            {[...props.highlighedIssues].reverse().slice(0, 5).map((issue, index) => (
            <HighlightedIssue
            key={index}
            issue={issue}
            />
            ))}
        </div>
    )
}

export default Notification;