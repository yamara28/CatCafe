import React from "react";

import Title, { TitleSize } from "../../ui/title/title";
import Button from "../../ui/button/button";
import StarItem from "../../ui/starItem/starItem";
import "../starList/style.css";

export default function StarList({ stars }) {
    return (
        <section className="about__stars stars">
            {stars?.length ? (
                <>
                    <Title size={TitleSize.DEFAULT}>Наши звезды</Title>
                    <ul className="stars__list">
                        {stars.map((star) => {
                            return (
                                <li className="stars__item" key={star.id}>
                                    <StarItem {...star}/>
                                </li>
                            ) 
                        })}
                    </ul>
                    <Button />
                </>
            )
                : null }
        </section>
    )
}