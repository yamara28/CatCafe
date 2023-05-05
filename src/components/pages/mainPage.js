import React from "react";
import About from '../blocks/about/about';
import StarList from '../blocks/starList/starList';

import "../pages/style.css";

export default function MainPage({stars}) {
    return (
        <main className="main">
            <About />
            <StarList stars={stars}/>
        </main>
    )
}