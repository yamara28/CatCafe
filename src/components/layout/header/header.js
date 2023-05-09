import React from "react";
import styled from "styled-components";

import Button from "../../ui/button/button";
import Logo from "../../ui/logo/logo";

const StyledHeader = styled.header`
max-width: 1280px;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 90px;
`;


export default function Header () {
    return (
        <StyledHeader >
            <Wrapper >
            <Logo />
            <Button />
            </Wrapper>
        </StyledHeader>
    )
}