import React from "react";
import styled from "styled-components";

import ImageLogo from "./logo-image.js";

const StyledLogo = styled.p`
    display: flex;
    align-items: center;
    gap: 24px;
`;

const StyledSpan = styled.span`
font-weight: 700;
font-size: 28px;
line-height: 42px;
color: #333333;
`;

export default function Logo() {
    return (
        <StyledLogo>
            <ImageLogo />
            <StyledSpan>Котокафе</StyledSpan>
        </StyledLogo>
    )
}