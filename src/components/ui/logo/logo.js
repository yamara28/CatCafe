import React from "react";
import logo from  "../../../images/logo.svg";

import "../logo/style.css";

export default function Logo () {
    return (
        <p className="logo">
            <img src={logo} width="44" height="44" alt="logo"></img>
            <span>Котокафе</span>
        </p>
    )
}