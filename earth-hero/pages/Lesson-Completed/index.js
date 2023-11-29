import React from 'react';
// import './lessoncompleted.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import GreenButton from '../../comps/Green-button';
import Link from 'next/link';

import {data, ChangeData} from '../../data';
import Router from 'next/router';

// var CardsStack = require('../../public/cards-stack.svg');

const LessonCompleted = () => {
    var category = "";
    if(data.lessons === "wildfireslesson"){
        category = "wildfires";
        ChangeQuiz("wildfiresquiz");
    }else if(data.lessons === "watershortagelesson"){
        category = "water shortage";
        ChangeQuiz("watershortagequiz");
    }else if(data.lessons === "faminelesson"){
        category = "famine";
        ChangeQuiz("faminequiz");
    }else if(data.lessons === "wildlifelesson"){
        category = "wildlife affected by global warming";
        ChangeQuiz("wildlifequiz");
    }else if(data.lessons === "icebergmeltinglesson"){
        category = "iceberg melting";
        ChangeQuiz("icebergmeltingquiz");
    }else if(data.lessons === "citieslesson"){
        category = "cities affected by global warming";
        ChangeQuiz("citiesquiz");
    }else if(data.lessons === "carbonfootprintlesson"){
        category = "carbon footprints";
        ChangeQuiz("carbonfootprintquiz");
    }else if(data.lessons === "acidrainlesson"){
        category = "acid rain";
        ChangeQuiz("acidrainquiz");
    }else if(data.lessons === "respiratoryproblemslesson"){
        category = "respiratory problems from pollution";
        ChangeQuiz("respiratoryproblemsquiz");
    }else if(data.lessons === "marinelifelesson"){
        category = "marine life";
        ChangeQuiz("marinelifequiz");
    }else if(data.lessons === "eutrophicationlesson"){
        category = "eutrophication";
        ChangeQuiz("eutrophicationquiz");
    }else if(data.lessons === "drinkingwaterlesson"){
        category = "drinking water affected by pollution";
        ChangeQuiz("drinkingwaterquiz");
    }else if(data.lessons === "pollutioncitieslesson"){
        category = "cities affected by pollution";
        ChangeQuiz("pollutioncitiesquiz");
    }else if(data.lessons === "pollutionwildlifelesson"){
        category = "wildlife affected by pollution";
        ChangeQuiz("pollutionwildlifequiz");
    }



    return <div>
        <Icon />
    <div id='lesson-completed'>
        <div id='take-quiz-text'> 
            <p>Great! You know a lot more about {category} now. <br /> Ready to take the Quiz?</p>
        </div>
        {/* <Link href='/Quiz1'><div id='take-quiz'>
            <GreenButton onClick={Nothing} text='Take the Quiz'/>
        </div></Link> */}
        <div id='take-quiz'>
        <GreenButton text = 'Take the Quiz' onClick={() => {Router.push('/Quiz1')}} />
        </div>
        <img src='cards-stack.svg' id='cards-stack'/>
    </div>
    <Menu />
    </div>
}

function Nothing(){
    
}

function ChangeQuiz(name){
    data.quiz = name;
    ChangeData(data);
}
export default LessonCompleted;