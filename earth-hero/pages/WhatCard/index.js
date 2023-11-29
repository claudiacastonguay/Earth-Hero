import React, { useState } from 'react';
// import './information.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import InfoCard from '../../comps/Information Cards';
import Router from 'next/router';

import {data} from '../../data';

// var CardSideImg = require('../../public/card-side.png');
// var wildfires1 = require('../../public/wildfire_1.png');
// var watershortage1 = require('../../public/water-shortage-1.svg');
// var famine1 = require('../../public/famine-1.svg');
// var wildlife1 = require('../../public/wildlife-1.svg');
// var icebergmelting1 = require('../../public/iceberg-melting-1.svg');
// var cities1 = require('../../public/cities-floods-1.svg');
// var carbonfootprint1 = require('../../public/carbon-footprint-1.svg');
// var acidrain1 = require('../../public/acid-rain-1.svg');
// var respiratoryproblems1 = require('../../public/respiratory-problems-1.svg');
// var marinelife1 = require('../../public/marine-life-1.svg');
// var eutrophication1 = require('../../public/eutrophication-1.svg');
// var citiesdroughts1 = require('../../public/cities-droughts-1.svg');

const WhatCard = () => {
    var text = "";
    var category = "";
    var whatcardimg = "";
    if(data.subcategory === "wildfires"){
        text = "Wildfires are fires that are out of control and burn in the wildland vegetation. They can burn forests, savannas, grasslands, and many other ecosystems. Wildfires can start from either natural occurrence or by humans. For instance, a natural occurrence would be a lightning strike, and a human cause could be from making a spark. Wildfires are most prone to start when the ecosystem is dry. This is why areas where it does not rain often are most likely to have wildfires. Sometimes wildfires can be good for the ecosystems by killing bad diseases and insects that harm trees, but quite often wildfires spread fast and are very dangerous.";
        category = "Wildfires";
        whatcardimg = 'wildfire_1.png';
    }else if(data.subcategory === "watershortage"){
        text = "Water shortage, or water scarcity, is the lack of available water resources to meet the demands of water usage in an area. In other words, it’s running out of clean water supply in a certain area. There are several countries around the world that have dry environments and suffer from water shortage. You might think that if 70% of the earth is just water that this wouldn’t be a problem! However, most of that water is the ocean which consists of salt water, and that is not drinkable.";
        category = "Water Shortage";
        whatcardimg = 'water-shortage-1.svg';
    }else if(data.subcategory === "famine"){
        text = "Famine is when there is a shortage of food for people within an area. This can occur from crop failure, droughts, floods, or other natural disasters. If an environment is too dry or flooded, crops will not grow. Crops can often develop diseases that prevent them from growing, leading to famines in severe cases. There have been multiple instances of famines in the past, and they are still an ongoing problem today.";
        category = "Famine";
        whatcardimg = 'famine-1.svg';
    }else if(data.subcategory === "wildlife"){
        text = "Wildlife is greatly impacted by droughts. In general, droughts cause a large decrease in the population of animals. This is because of droughts, plants do not grow and animals lose their supply of food. Droughts can also cause diseases that harm wildlife, and their environments that they live in could also be negatively impacted. Droughts can also cause wildlife to migrate, and their habitats could be destroyed.";
        category = "Wildlife";
        whatcardimg = 'wildlife-1.svg';
    }else if(data.subcategory === "icebergmelting"){
        text = "Because of global warming and the gradual increase of Earth’s temperature, icebergs are beginning to melt year after year. Research has shown that over the past several years the icebergs have been gradually decreasing in size. This is because they are slowly melting from the increase in temperature. Why is the temperature increasing? That is because of air pollution and carbon dioxide that has accumulated in the atmosphere and collects sunlight reflecting off of Earth’s surface. This heat is trapped within the atmosphere and causes the planet to get hotter.";
        category = "Iceberg Melting";
        whatcardimg = 'iceberg-melting-1.svg';
    }else if(data.subcategory === "cities"){
        text = "Many cities around the world are being affected by floods on the regular. These floods can be caused by heavy precipitation, icebergs melting from global warming, or sometimes drains could be plugged. Low lying cities are even more prone to flooding. And since global warming has just continued to get worse over the years, more and more cities are going to be experiencing floods.";
        category = "Cities";
        whatcardimg = 'cities-floods-1.svg';
    }else if(data.subcategory === "carbonfootprint"){
        text = "A carbon footprint is the amount of carbon dioxide released into the air from a person’s activities. You can think of it like the footprint humans leave behind when they emit carbon dioxide. Some people like to keep track of their carbon footprint by recording how much greenhouse gas they release into the air each day to help out the planet.";
        category = "Carbon Footprint";
        whatcardimg = 'carbon-footprint-1.svg';
    }else if(data.subcategory === "acidrain"){
        text = "Acid rain is precipitation that contains acidic components in it. These acidic components include sulfuric or nitric acid. But don’t worry! Acid rain is never acidic enough to harm you. Also, acid rain doesn’t just come in the form of rain. It could also be in the form of snow, hail, fog, or even dust. Acid rain is a result of air pollution because when fuels are burned, chemicals that harm the environment are released and eventually add up to air pollution.";
        category = "Acid Rain";
        whatcardimg = 'acid-rain-1.svg';
    }else if(data.subcategory === "respiratoryproblems"){
        text = "Respiratory problems cover a large amount of problems one can have with their lungs and ability to breathe. When it comes to air pollution, there’s a wide variety of different lung diseases and conditions people can develop. Respiratory problems could include symptoms like coughing, difficulty breathing, or a disease that physically affects the lungs.";
        category = "Respiratory Problems";
        whatcardimg = 'respiratory-problems-1.svg';
    }else if(data.subcategory === "marinelife"){
        text = "The ocean has been known to be getting more polluted over the years. This pollution comes in the form of garbage, waste, and primarily plastic. When people litter and when plastic is transported to landfill sites, it sometimes ends up in rivers and streams, eventually leading to the ocean. Also, there is an extraordinary amount of plastic that is being generated each year, and only 9% of it is being recycled. The rest is garbage, and some of it is contributing to polluting the ocean and causing great harm to all sorts of marine life.";
        category = "Marine Life";
        whatcardimg = 'marine-life-1.svg';
    }else if(data.subcategory === "eutrophication"){
        text = "Eutrophication is the gradual increase of phosphorus in an aging body of water. This increase in phosphorus leads to an increase of plant growth, and forms extensive mats of floating mats. It can be caused from multiple factors including sewage being dumped in bodies of water, natural events like floods, and many others.";
        category = "Eutrophication";
        whatcardimg = 'eutrophication-1.svg';
    }else if(data.subcategory === "drinkingwater"){
        text = "There may be more water than there is land on Earth, but the large majority of that water is salt water, which is no use for drinking. Even worse, some water that isn’t salt water is still contaminated with poisonous chemicals which adds to the total percentage of contaminated water on Earth. Since everyone produces water waste, water that comes out from sinks, showers, and toilets, this all is collected and ends up polluting the water.";
        category = "Drinking Water";
        whatcardimg = 'marine-life-1.svg';
    }else if(data.subcategory === "pollutioncities"){
        text = "Countless amounts of cities are suffering from pollution all around the globe. Some cities are cleaner than others, but the ones that are very polluted are facing a number of problems. These cities are facing air pollution from too many vehicles going around, pollution in their water, and pollution laying around on the ground such as garbage and litter. The cities that are most polluted tend to be the most populated and crowded. The more people there are in a city, the more cars there are and the more people there are to produce water waste.";
        category = "Cities";
        whatcardimg = 'cities-droughts-1.svg';
    }else if(data.subcategory === "pollutionwildlife"){
        text = "Not only are people being affected by the increase of pollution around the world, but it’s also harming wildlife. Pollution is causing a big effect on the habitats of wildlife and their well-being. Pollution harms wildlife just as much as it does to humans. This pollution could be the increase in temperature, acid rain, or garbage that has been littered.";
        category = "Wildlife";
        whatcardimg = 'wildlife-1.svg';
    }
    return <div id="whatcard">
        <img id='whatcardimg' src={whatcardimg}/>
    <Icon />
    <div>
        <InfoCard
            category={category}
            title="What is it?"
            text={text}
            button="Got it!"
            buttonid='/ProblemCard'/>
    </div>
    <Menu />
    <img id='card-side-right' src='card-side.png' onClick={() => {Router.push('/ProblemCard')}}/>
    </div>
}

export default WhatCard;

// const Cards = () => { 
//     const [button, setButton] = useState("Got it!");

// return <div>
//     <Icon />
//     <div id="next-button" onClick={() => {
//         setButton("Next");
//         document.getElementById('card-button').style.width = "90px";}}>
//             <InfoCard button={button}/>
//     </div>
//     <Menu />
// </div>
// }