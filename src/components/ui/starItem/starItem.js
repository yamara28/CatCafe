import React from "react";
import Title, { TitleSize } from "../title/title";
import StarIcon from "../starIcon/starIcon";

import "../starItem/style.css";


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
        <article className="stars__article">
            <StarIcon className={style} >{text}</StarIcon>
            <img className="stars__image" src={image} width="313" height="313" alt={name}></img>
            <Title size={TitleSize.SMALL}>{name}</Title>
            <p className="stars__text">{description}</p>

        </article>
    )
}