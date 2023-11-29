import React from 'react';
// import './infocard.css';
import Router from 'next/router';

var nextIcon = require("../../public/Icon awesome-arrow-right.svg");

const InfoCard = ({ category, title, text, help1, help2, help3, help4, buttonid, button }) => <div id='info-card'>
    <div id='card-category'>{category}</div>
    <div id='card-content'>
        <div id='card-title'>{title}<hr></hr></div>
        <div id='card-text'>
            <div>{text}</div>
            <div className='paragraphs'>{help1}</div>
            <div className='paragraphs'>{help2}</div>
            <div className='paragraphs'>{help3}</div>
            <div className='paragraphs'>{help4}</div>
        </div>
        <div id='button-id' onClick={() => {Router.push(buttonid)}}>
            <div id='card-button'>
                <div>{button}</div>
                <img id="next-icon" src='Icon awesome-arrow-right.svg'/>
            </div>
        </div>
        <div id='white-space'></div>
    </div>
</div>

InfoCard.defaultProps = {
    category: "Category",
    title: "What is it?",
    text: "Wildfires are fires that are out of control and burn in the wildland vegetation. They can burn forests, savannas, grasslands, and many other ecosystems. Wildfires can start from either natural occurrence or by humans. For instance, a natural occurrence would be a lightning strike, and a human cause could be from making a spark. Wildfires are most prone to start when the ecosystem is dry. This is why areas where it does not rain often are most likely to have wildfires. Sometimes wildfires can be good for the ecosystems by killing bad diseases and insects that harm trees, but quite often wildfires spread fast and are very dangerous."
}

export default InfoCard;