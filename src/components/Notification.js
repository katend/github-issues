import React from "react";

import HighlightedIssue from "./HighlightedIssue";

const Notification = (props) => {
    return (
        <div>
            {[...props.uniqueRecentIssues].reverse().map((issue, index) => (
            <HighlightedIssue
            key={index}
            issue={issue}
            />
            ))}
        </div>
    )
}

export default Notification;