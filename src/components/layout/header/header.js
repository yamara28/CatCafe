import React from "react";
import Button from "../../ui/button/button";
import Logo from "../../ui/logo/logo";

import "../header/style.css";

export default function Header () {
    return (
        <header className="header">
            <div className="header__wrapper">
            <Logo />
            <Button />
            </div>
        </header>
    )
}