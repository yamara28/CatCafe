import React from "react";

import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import StarItem from "../../ui/starItem/starItem";
import {StyledList, StyledArticle} from "./styled.js";

export default function StarList({ stars }) {
    return (
        <StyledArticle >
            {stars?.length ? (
                <>
                    <Title>Наши звезды</Title>
                    <StyledList>
                        {stars.map((star) => {
                            return (
                                <li className="stars__item" key={star.id}>
                                    <StarItem {...star}/>
                                </li>
                            ) 
                        })}
                    </StyledList>
                    <Button />
                </>
            )
                : null }
        </StyledArticle>
    )
}