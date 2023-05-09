import styled from "styled-components";
import BackgroundImage from "../../../images/about.png";
import Image from "../../../images/about_back.png";
import MapSign from "../../../images/flag.svg";

const StyledAbout = styled.section`
    position: relative;
    padding: 160px 90px;
    padding-right: 540px;
    background-color: #FFF6D9;

    &::before {
        position: absolute;
        right: 7%;
        content: "";
        width: 446px;
        height: 446px;
        background-image: url(${BackgroundImage}), url(${Image});
        background-repeat: no-repeat;
    }
`;

const Wrapper = styled.div`
    min-width: 650px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Description = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #333333;
`;

const Time = styled.p`
    align-self: flex-start;
    margin: 0;
    padding: 8px;
    background: #FFEEAD;
    border-radius: 8px;
`;


const Addres = styled.p`
    position: relative;
    padding-left: 20px;

    &::before {
        position: absolute;
        left: 0;
        content: "";
        width: 16px;
        height: 16px;
        background-image: url(${MapSign});
    }
`;

export { StyledAbout, Wrapper, Description, Time, Addres };