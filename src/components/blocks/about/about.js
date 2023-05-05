import React from "react";
import Title, { TitleSize } from '../../ui/title/title';

import "./style.css";

export default function About() {
    return (
        <section className="about">
            <div className="about__wrapper">
            <Title size={TitleSize.BIG}>Первое котокафе</Title>
            <p className="about__description">Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый из них ищет новый дом. Животных можно гладить, фотографировать, играть с ними.</p>
            <p className="about__time">Рабочее время с 8:00 до 23:00</p>
            <p className="about__addres">Санкт-Петербург,  набережная реки Карповки, дом 5, литера П</p>
            </div>
            
        </section>
    )
}