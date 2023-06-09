import styled from "styled-components";

const Button = styled.button.attrs(()=>({
    type: "button",
}))`
    align-self: center;
    padding: 16px 24px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;
    background: #FF732B;
    border-radius: 5px;
    border: none;
}
`;

export default Button;