import React from "react";
import About from '../blocks/about/about';
import StarList from '../blocks/starList/starList';

import StyledMain from  "./styled.js";

export default function MainPage({stars}) {
    return (
        <StyledMain >
            <About />
            <StarList stars={stars}/>
        </StyledMain>
    )
}