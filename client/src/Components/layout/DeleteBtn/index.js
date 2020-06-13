import React from "react";
import "./index.css";

function DeleteBtn(props) {
    return (
        <span
            className="btn btn-danger btn-del"
            {...props}
            role="button"
            tabIndex="0"
        >
            Delete
        </span>
    );
}

export default DeleteBtn;