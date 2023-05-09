import styled from "styled-components";

const IconBackground = {
    new: "#FFB334",
    kind: "#7FC92E"
}

const Icon = styled.p`
    position: absolute;
    top: 4%;
    left: 6%;
    z-index: 2;
    align-self: flex-start;
    margin: 0;
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;
    border-radius: 8px 8px 8px 0px;
    ${(props)=> {
        const backgroundColor = IconBackground[props.color];
        return `
        background: ${backgroundColor}`;
    }}
`;

export default Icon;