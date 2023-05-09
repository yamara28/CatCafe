import React from "react";

import Icon from  "./styled.js";

function StarIcon({ children, color }) {
    return (
        <Icon color={color}>{children}</Icon>
    )
}

export default StarIcon;