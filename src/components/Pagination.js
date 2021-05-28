import React from "react";

const Pagination = (props) => {
    return (
        <div className="nextButton">
            <button className="btn btn-primary" onClick={() => props.onPageChange()}>Next</button>
        </div>
    )
}

export default Pagination;