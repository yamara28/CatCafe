import React from "react";

import "./style.css";

function StarIcon({ children, className }) {
    return (
        <p className={`star__icon${className ? ` icon--${className}` : ""}`}>{children}</p>
    )
}

export default StarIcon;