import React from "react";
import Title from "../title/title";
import Icon from "../starIcon/starIcon";

import {Article, ItemImage, ItemText } from "./styled";



export default function StarItem(
    {
        name,
        image,
        description,
        text,
        style
    }
) {
    return (
        <Article >
            <Icon color={style} >{text}</Icon>
            <ItemImage src={image} width="313" height="313" alt={name}></ItemImage>
            <Title size="small">{name}</Title>
            <ItemText >{description}</ItemText>
        </Article>
    )
}