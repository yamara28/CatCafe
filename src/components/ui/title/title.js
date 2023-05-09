import { React } from "react";
import StyledTitle from  "./styled.js";


function Title({ children, size }) {
    return (
        <StyledTitle size={size}>{children}</StyledTitle>
    )
};

export default Title;