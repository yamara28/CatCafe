import React from "react";
import styled from "styled-components";

import Logo from "../../ui/logo/logo";

const StyledFooter = styled.footer`
    display: flex;
    max-width: 1280px;
    padding: 10px 90px;`;

export default function Footer () {
    return (
        <StyledFooter className="footer">
            <Logo />
        </StyledFooter>
    )
}