import React, { useState, useEffect} from 'react';
// import './quiz.css';
import Link from 'next/link';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import Router from 'next/router';
import { data } from '../../data';

const Quiz = ({category, quizName, quizNumber, quizQuestion, quizChoice1, quizChoice2, quizChoice3, quizChoice4, onSelect}) => {
    const [num, setnum]= useState(0)
    useEffect(()=>{
        setnum(0);
    },[quizNumber]);
return <div>
 <Icon />
    <div id='quiz-container'>
        <div id="quiz-category">{category}</div>
        <div id="quiz-information">
            <div id="quiz-question-number">{quizName}</div>
            <div>{quizNumber}</div>
        </div>
        <hr />
        <div id="quiz-question" >{quizQuestion}</div>
        <div className="quiz-choices">
        {(quizChoice1 !== "") ?   <label  onClick={HighlightButtonQuiz} className='container1'> 
                <input checked={num===1} onClick={()=>{
                    onSelect(1);
                    setnum(1);
                }} type='radio' name='radio' /> <p>{quizChoice1}</p>
                <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
            </label>: null}
        </div>
        <div className="quiz-choices">
        {(quizChoice2 !== "") ?  <label  onClick={HighlightButtonQuiz} className='container1'>
                <input checked={num===2} onClick={()=>{
                    onSelect(2);
                    setnum(2);
                }} type='radio' name='radio'  /><p>{quizChoice2}</p>
                <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
            </label>: null}
        </div>
        <div className="quiz-choices">
        {(quizChoice3 !== "") ?  <label  onClick={HighlightButtonQuiz} className='container1'>
                <input checked={num===3} onClick={()=>{
                    onSelect(3);
                    setnum(3);
                }} type='radio' name='radio' /> <p>{quizChoice3}</p>
                <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
            </label>: null}
        </div>
        <div className="quiz-choices">
        {(quizChoice4 !== "") ?   <label  onClick={HighlightButtonQuiz} className='container1'>
                <input checked={num===4} onClick={()=>{
                    onSelect(4);
                    setnum(4);
                }} type='radio' name='radio' /> <p>{quizChoice4}</p>
                <span  onClick={HighlightButtonQuiz} className='checkmark'></span>
            </label>: null}
        </div>


        {/* <div id='Button-text'>
            <div id='button1'>Next</div>
        </div> */}

        {/* <div onClick={() => {Router.push(buttonid)}} id='Button-text'>
            <div id='button1'>Next</div>
        </div> */}

    </div>
    <Menu />
</div>
}

function HighlightButtonQuiz(){
    document.querySelector("#button1").style.backgroundColor = '#46c75f';
}


// var selected = false;
// function SelectedChoice(){
//     selected = true;
// }


// function NextQuizQuestion(){
//     if (selected === true){
//         Router.push('/Quiz1');
//     }else{
//         //
//     }
// }


Quiz.defaultProps = {
    category: "Wildfires",
    quizName: "Question 1",
    quizNumber: "1/5",
    quizQuestion: "What kind of environments are very likely to have wildfires start?",
    quizChoice1: "Wet and rainy environments",
    quizChoice2: "Dry environments",
    quizChoice3: "Snowy and cold environments",
    quizChoice4: "",
    onSelect:()=>{}
}

export default Quiz;