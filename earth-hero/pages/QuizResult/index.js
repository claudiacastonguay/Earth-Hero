import React from 'react';
// import './quizresult.css';
import GreenButton from '../../comps/Green-button';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import { data } from '../../data';
import Router from 'next/router';


const QuizResult = () => <div id='quiz-result'>

    <div><Icon /></div>
    

    <div id='background-container'>
    <div id='background'>You got
    <div id='score'>{data.score}/4!</div>
    </div>
    
    </div>
    <div id='buttoncontainer'>
    <div onClick={() => {Router.push('/ScorePage')}} id='toscore'><GreenButton
    text="Take another quiz" /></div>
    </div>

    <div><Menu /></div>
</div>

export default QuizResult;