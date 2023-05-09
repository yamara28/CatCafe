import React from "react";
import Title from '../../ui/title/title';

import {StyledAbout, Wrapper, Description, Time, Addres} from "./styled.js";

export default function About() {
    return (
        <StyledAbout >
            <Wrapper >
            <Title size="big" >Первое котокафе</Title>
            <Description>Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый из них ищет новый дом. Животных можно гладить, фотографировать, играть с ними.</Description>
            <Time>Рабочее время с 8:00 до 23:00</Time>
            <Addres>Санкт-Петербург,  набережная реки Карповки, дом 5, литера П</Addres>
            </Wrapper>
            
        </StyledAbout>
    )
}