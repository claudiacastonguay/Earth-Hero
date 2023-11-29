import React, { useState } from 'react';
// import './problem.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import InfoCard from '../../comps/Information Cards';
import Router from 'next/router';

import {data} from '../../data';

// var respiratoryproblems1 = require('../../public/respiratory-problems-1.svg');
// var wildlife1 = require('../../public/wildlife-1.svg');
// var CardSideImg = require('../../public/card-side.png');
// var CardSideImgLeft = require('../../public/card-left.svg');
// var wildfires2 = require('../../public/wildfire_2.png');
// var watershortage2 = require('../../public/water-shortage-2.svg');
// var famine2 = require('../../public/famine-2.svg');
// var wildlife2 = require('../../public/wildlife-2.svg');
// var icebergmelting2 = require('../../public/iceberg-melting-2.svg');
// var cities2 = require('../../public/cities-floods-2.svg');
// var carbonfootprint2 = require('../../public/carbon-footprint-2.svg');
// var acidrain2 = require('../../public/acid-rain-2.svg');
// var respiratoryproblems2 = require('../../public/respiratory-problems-2.svg');
// var marinelife2 = require('../../public/marine-life-2.svg');
// var eutrophication2 = require('../../public/eutrophication-2.svg');

const ProblemCard = () => {
    var text = "";
    var category = "";
    var problemcardimg = "";
    if(data.subcategory === "wildfires"){
        text = "Wildfires destroy homes of humans and animals and are also a major health risk. Because of wildfires, many are left without their homes, but also animals who live in the forests. Approximately 800 million animals have died due to wildfires so far. Wildfires also produce smoke that is inhaled by adults and children who live in the affected areas. This is very dangerous, causing breathing problems and even lung damage for many.";
        category = "Wildfires";
        problemcardimg = 'wildfire_2.png';
    }else if(data.subcategory === "watershortage"){
        text = "Water shortage is a huge issue to many countries as many cannot find clean water for drinking or cleaning. In severe cases, water shortage can cause dehydration and other health problems. Also, many people have access to water, but it is polluted water which is very dangerous to drink. Water shortage is no joke, and hundreds of thousands of people get very ill, or even worse, die from a lack of water or from ingesting polluted water.";
        category = "Water Shortage";
        problemcardimg = 'water-shortage-2.svg';
    }else if(data.subcategory === "famine"){
        text = "Famines cause people to develop serious diseases, and quite often death from starvation. Famines cause millions to suffer from hunger and starvation. Depending on how severe the famine is or how long it lasts, it can wipe out large numbers of people.";
        category = "Famine";
        problemcardimg = 'famine-2.svg';
    }else if(data.subcategory === "wildlife"){
        text = "Droughts harming the wildlife is no good. Imagine the place you live in being destroyed, and you have no supply of food or water. And on top of that, you are at risk of deadly diseases! This is why droughts affecting the wildlife is a huge concern that should be taken seriously.";
        category = "Wildlife";
        problemcardimg = 'wildlife-2.svg';
    }else if(data.subcategory === "icebergmelting"){
        text = "If icebergs are melting over the years, where is all that ice going? Well, it’s being melted into water right into the ocean which is now causing sea levels to rise. These rising sea levels can now lead to more problems such as flooding and erosion in some areas. Iceberg melting even puts polar bears in harm! This is because they have to swim farther between icebergs when hunting for food and are exerting more energy. This causes them to physically suffer and are struggling to reproduce. They are now listed as a threatened species.";
        category = "Iceberg Melting";
        problemcardimg = 'iceberg-melting-2.svg';
    }else if(data.subcategory === "cities"){
        text = "Flooding cities is definitely a problem because people’s homes are sinking and being destroyed. Hundreds of thousands of houses have been destroyed by floods, causing people to have to move out (which is expensive!). It’s not just homes that are sinking, but other buildings have the capability of sinking too. Floods may just be excess amounts of water, but they can be more dangerous than you think when it comes to parts of the ground sinking when they can’t absorb all the water.";
        category = "Cities";
        problemcardimg = 'cities-floods-2.svg';
    }else if(data.subcategory === "carbonfootprint"){
        text = "If you were to record your carbon footprint, you may or may not discover a problem with it in regards to creating too much carbon dioxide throughout your day. Some people produce air pollution way more than others. For instance, it would not be ideal to drive to every single place you went, never turned the lights off, and never recycled if you were trying to keep your carbon footprint low. If your carbon footprint is too high, you are contributing to the already high pollution on Earth!";
        category = "Carbon Footprint";
        problemcardimg = 'carbon-footprint-2.svg';
    }else if(data.subcategory === "acidrain"){
        text = "When acid rain develops, it can harm forests, fish, plants, lakes, and rivers. Acid rain can cause trees to have a slower growth rate, and sometimes it can completely kill trees. In lakes, once the acid rain gets into the water it starts to kill off certain types of fish that cannot live with the different pH level. Overall, acid rain is quite toxic to many animals, plants, and the environment in general.";
        category = "Acid Rain";
        problemcardimg = 'acid-rain-2.svg';
    }else if(data.subcategory === "respiratoryproblems"){
        text = "Respiratory problems can be very dangerous to most people’s lives, and it impacts people’s quality of life. Air pollution can cause conditions such as asthma, or something much more severe like lung cancer. Also, air pollution can affect other organs in the body besides the lungs. This includes the digestive system, nervous system, heart, and urinary system.";
        category = "Respiratory Problems";
        problemcardimg = 'respiratory-problems-2.svg';
    }else if(data.subcategory === "marinelife"){
        text = "Pollution in the ocean is a huge problem as it’s causing a huge threat to marine life. Whales are sometimes found with plastic bags wrapped around their fins causing them physical harm. Turtles and many other marine life are found dead with plastics and garbage in their stomach. Pollution in the ocean is causing starvation, suffering, and death to a large majority of marine life.";
        category = "Marine Life";
        problemcardimg = 'marine-life-2.svg';
    }else if(data.subcategory === "eutrophication"){
        text = "Eutrophication is very dangerous for the Earth’s well-being for many reasons. It threatens the lives of fish, and it reduces the quality of water and is making more water around the world not safe for drinking. If eutrophication is making water dangerous to drink in some areas, this leads to a risk of people being poisoned from the water.";
        category = "Eutrophication";
        problemcardimg = 'eutrophication-2.svg';
    }else if(data.subcategory === "drinkingwater"){
        text = "It’s quite concerning that such a small percentage of the world’s water is safe to drink. You could probably imagine why it would be a big problem if we were to run out of fresh drinking water. People would have poor hygiene, we wouldn’t be able to keep things clean, people would catch diseases from drinking contaminated water, and in extreme cases people would probably get really thirsty! In addition, wildlife and ecosystems would also suffer.";
        category = "Drinking Water";
        problemcardimg = 'water-shortage-2.svg';
    }else if(data.subcategory === "pollutioncities"){
        text = "People in these cities are suffering from all sorts of health problems including disease from ingesting toxic water and respiratory problems from breathing in polluted air. Overall, it is not safe to live in a polluted city for an extended amount of time. But some people have no choice but to live in these areas.";
        category = "Cities";
        problemcardimg = 'respiratory-problems-1.svg';
    }else if(data.subcategory === "pollutionwildlife"){
        text = "The higher pollution rates unfortunately ends up killing a lot of the wildlife out there. Some wildlife accidentally eat garbage that has been left on the ground because they think it’s food, and this kills a lot of animals. Also, since pollution is contributing to the increase in temperatures, this harms types of wildlife that are adapted to living in colder environments. Overall, air pollution is doing no good for the lungs of wildlife either.";
        category = "Wildlife";
        problemcardimg = 'wildlife-1.svg';
    }

    return <div id="helpcard">
        <img id='problemcardimg' src={problemcardimg}/>
        <Icon />
        <InfoCard 
            category= {category}
            title= "Why is this a problem?"
            text= {text}
            buttonid='/HelpCard'
            button= "Next"/>
        <img id='card-side-right' src='card-side.png' onClick={() => {Router.push('/HelpCard')}}/>
        <img id='card-side-left' src='card-left.svg' onClick={() => {Router.push('/WhatCard')}}/>
        <Menu />
    </div>
}

export default ProblemCard;