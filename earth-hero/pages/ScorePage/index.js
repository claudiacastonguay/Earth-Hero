import React from 'react';
// import './Scorepage.css';
import GreenButton from '../../comps/Green-button';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import {data, ChangeData} from '../../data';
import Router from 'next/router';



const ScorePage = () => <div id='score-page'>

{/* logo & title */}
        <div><Icon /></div>
        <div id="my_score_container">
            <p className="my_score">Quizzes</p>
        </div>
{/* end of logo and title */}


{/* start of Global Warming */}
<div className="gwarming">
    {/* <hr className="line"/> */}
    <h3 className="gw">Global Warming</h3>
</div>

<div>
    <h5 className="a">Droughts</h5>
    <hr className="air"></hr>
</div>



{/* Topic 1 */}
        <div id='container' onClick={ToggleOne}>
            <div className='drop-down1'>
                <p id='topic-one'>Wildfires</p>
            </div>
        </div>

        <div id='topic_one-container'>
            <div id='Button-text'>
                <div onClick={()=>{
            ChooseSub("wildfiresquiz");
            {Router.push('/Quiz1')}
            }} id='button1'>Start Quiz</div>
            </div>
        </div>

{/* End of topic 1 */}



{/* Topic 2 */}
        <div id='container' onClick={ToggleTwo}>
            <div className='drop-down2'>
                <p id='topic-two'>Water Shortage</p>
            </div>
        </div>

        <div id='topic_two-container'>
            <div id='Button-text'>

                <div onClick={()=>{
            ChooseSub("watershortagequiz");
            {Router.push('/Quiz1')}
            }} id='button2'>Start Quiz</div>
            </div>
        </div>

{/* End of topic 2 */}




{/* Topic 3 */}
        <div id='container' onClick={ToggleThree}>
            <div className='drop-down3'>
                <p id='topic-three'>Famine</p>
            </div>
        </div>

        <div id='topic_three-container'>
            <div id='Button-text'>
                <div onClick={()=>{
            ChooseSub("faminequiz");
            {Router.push('/Quiz1')}
            }} id='button3'>Start Quiz</div>
            </div>
        </div>

{/* End of topic 3 */}



{/* Topic 4 */}
        <div id='container' onClick={ToggleFour}>
            <div className='drop-down4'>

                <p id='topic-four'>Wildlife</p>
               

            </div>
        </div>

        <div id='topic_four-container'>
            <div id='Button-text'>
                <div onClick={()=>{
            ChooseSub("wildlifequiz");
            {Router.push('/Quiz1')}
            }} id='button4'>Start Quiz</div>
            </div>
        </div>

{/* End of topic 4 */}

        <div>
            <h5 className="a">Floods</h5>
            <hr className="air"></hr>
        </div>



{/* Topic 5 */}
        <div id='container' onClick={ToggleFive}>
            <div className='drop-down5'>
                <p id='topic-five'>Iceberg Melting</p>
            </div>
        </div>

        <div id='topic_five-container'>
            <div id='Button-text'>
                <div onClick={()=>{
            ChooseSub("icebergmeltingquiz");
            {Router.push('/Quiz1')}
            }} id='button5'>Start Quiz</div>
            </div>
        </div>

{/* End of topic 5 */}





{/* Topic 6 */}
        <div id='container' onClick={ToggleSix}>
            <div className='drop-down6'>
                <p id='topic-six'>Cities</p>
            </div>
        </div>

        <div id='topic_six-container'>
            <div id='Button-text'>
                <div onClick={()=>{
            ChooseSub("citiesquiz");
            {Router.push('/Quiz1')}
            }} id='button6'>Start Quiz</div>
            </div>
        </div>

{/* End of topic 6 */}



{/* end of Global Warming */}

    {/* start of Pollution */}

                <div className="pollution">
                    <hr className="line"/>
                    <h3 className="po">Pollution</h3>
                </div>
                <div>
                    <h5 className="a">Air</h5>
                    <hr className="air"></hr>
                </div>

        {/* Topic 7 */}
                <div id='container' onClick={ToggleSeven}>
                    <div className='drop-down7'>
                        <p id='topic-seven'>Carbon Footprint</p>
                    </div>
                </div>

                <div id='topic_seven-container'>
                    <div id='Button-text'>

                        <div onClick={()=>{
            ChooseSub("carbonfootprintquiz");
            {Router.push('/Quiz1')}
            }} id='button7'>Start Quiz</div>
                    </div>
                </div>

        {/* End of topic 7 */}

        {/* Topic 8 */}
                <div id='container' onClick={ToggleEight}>
                    <div className='drop-down8'>
                        <p id='topic-eight'>Acid Rain</p>
                    </div>
                </div>

                <div id='topic_eight-container'>
                    <div id='Button-text'>

                        <div onClick={()=>{
            ChooseSub("acidrainquiz");
            {Router.push('/Quiz1')}
            }} id='button8'>Start Quiz</div>
                    </div>
                </div>

        {/* End of topic 8 */}

        {/* Topic 9 */}
                <div id='container' onClick={ToggleNine}>
                    <div className='drop-down9'>
                        <p id='topic-nine'>Respitory Problems</p>
                    </div>
                </div>

                <div id='topic_nine-container'>
                    <div id='Button-text'>

                        <div onClick={()=>{
            ChooseSub("respiratoryproblemsquiz");
            {Router.push('/Quiz1')}
            }} id='button9'>Start Quiz</div>
                    </div>
                </div>

        {/* End of topic 9 */}

                 <div>
                    <h5 className="a">Water</h5>
                    <hr className="air"></hr>
                </div>

        {/* Topic 10 */}
                <div id='container' onClick={ToggleTen}>
                    <div className='drop-down10'>
                        <p id='topic-ten'>Marine Life</p>
                    </div>
                </div>

                <div id='topic_ten-container'>
                    <div id='Button-text'>

                        <div onClick={()=>{
            ChooseSub("marinelifequiz");
            {Router.push('/Quiz1')}
            }} id='button10'>Start Quiz</div>
                    </div>
                </div>

        {/* End of topic 10 */}



        {/* Topic 11 */}
        <div id='container' onClick={ToggleEleven}>
                    <div className='drop-down11'>
                        <p id='topic-eleven'>Eutrophication</p>
                    </div>
                </div>

                <div id='topic_eleven-container'>
                    <div id='Button-text'>

                        <div onClick={()=>{
            ChooseSub("eutrophicationquiz");
            {Router.push('/Quiz1')}
            }} id='button11'>Start Quiz</div>
                    </div>
                </div>

        {/* End of topic 11 */}



        {/* Topic 12*/}
        <div id='container' onClick={ToggleTwelve}>
                    <div className='drop-down12'>
                        <p id='topic-twelve'>Drinking Water</p>
                    </div>
                </div>

                <div id='topic_twelve-container'>
                    <div id='Button-text'>
                        <div onClick={()=>{
            ChooseSub("drinkingwaterquiz");
            {Router.push('/Quiz1')}
            }} id='button12'>Start Quiz</div>
                    </div>
                </div>

        {/* End of topic 12 */}

                <div>
                    <h5 className="a">Land</h5>
                    <hr className="air"></hr>
                </div>



        {/* Topic 13 */}
                 <div id='container' onClick={ToggleThirteen}>
                    <div className='drop-down13'>
                        <p id='topic-thirteen'>Cities</p>
                    </div>
                </div>

                <div id='topic_thirteen-container'>
                    <div id='Button-text'>

                        <div onClick={()=>{
            ChooseSub("pollutioncitiesquiz");
            {Router.push('/Quiz1')}
            }} id='button13'>Start Quiz</div>
                    </div>
                </div>

        {/* End of topic 13 */}

        {/* Topic 14 */}
                <div id='container' onClick={ToggleFourteen}>
                    <div className='drop-down14'>
                        <p id='topic-fourteen'>Wildlife</p>
                    </div>
                </div>

                <div id='topic_fourteen-container'>
                    <div id='Button-text'>

                        <div onClick={()=>{
            ChooseSub("pollutionwildlifequiz");
            {Router.push('/Quiz1')}
            }} id='button14'>Start Quiz</div>
                    </div>
                </div>

        {/* End of topic 14 */}



{/* end of Pollution */}
    <div><Menu /></div>
   
</div>


// start of Global Warming
var one_state = false;

function ToggleOne(){
    if(one_state === false){
        document.querySelector(".drop-down1").style.backgroundColor = 'white';
        document.querySelector(".drop-down1").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_one-container").style.display = 'block';
    one_state = true;
    }else if(one_state === true){
        document.querySelector(".drop-down1").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down1").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_one-container").style.display = 'none';
        one_state = false;
    }
}

var two_state = false;

function ToggleTwo(){
    if(two_state === false){
        document.querySelector(".drop-down2").style.backgroundColor = 'white';
        document.querySelector(".drop-down2").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_two-container").style.display = 'block';
    two_state = true;
    }else if(two_state === true){
        document.querySelector(".drop-down2").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down2").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_two-container").style.display = 'none';
        two_state = false;
    }
}

var three_state = false;

function ToggleThree(){
    if(three_state === false){
        document.querySelector(".drop-down3").style.backgroundColor = 'white';
        document.querySelector(".drop-down3").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_three-container").style.display = 'block';
    three_state = true;
    }else if(three_state === true){
        document.querySelector(".drop-down3").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down3").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_three-container").style.display = 'none';
        three_state = false;
    }
}

var four_state = false;

function ToggleFour(){
    if(four_state === false){
        document.querySelector(".drop-down4").style.backgroundColor = 'white';
        document.querySelector(".drop-down4").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_four-container").style.display = 'block';
    four_state = true;
    }else if(four_state === true){
        document.querySelector(".drop-down4").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down4").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_four-container").style.display = 'none';
        four_state = false;
    }
}
 
var five_state = false;

function ToggleFive(){
    if(five_state === false){
        document.querySelector(".drop-down5").style.backgroundColor = 'white';
        document.querySelector(".drop-down5").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_five-container").style.display = 'block';
    five_state = true;
    }else if(five_state === true){
        document.querySelector(".drop-down5").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down5").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_five-container").style.display = 'none';
        five_state = false;
    }
}

var six_state = false;

function ToggleSix(){
    if(six_state === false){
        document.querySelector(".drop-down6").style.backgroundColor = 'white';
        document.querySelector(".drop-down6").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_six-container").style.display = 'block';
    six_state = true;
    }else if(six_state === true){
        document.querySelector(".drop-down6").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down6").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_six-container").style.display = 'none';
        six_state = false;
    }
}


// end of Global Warming



//start of Pollution
var seven_state = false;

function ToggleSeven(){
    if(seven_state === false){
        document.querySelector(".drop-down7").style.backgroundColor = 'white';
        document.querySelector(".drop-down7").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_seven-container").style.display = 'block';
    seven_state = true;
    }else if(seven_state === true){
        document.querySelector(".drop-down7").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down7").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_seven-container").style.display = 'none';
        seven_state = false;
    }
}

var eight_state = false;

function ToggleEight(){
    if(eight_state === false){
        document.querySelector(".drop-down8").style.backgroundColor = 'white';
        document.querySelector(".drop-down8").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_eight-container").style.display = 'block';
    eight_state = true;
    }else if(eight_state === true){
        document.querySelector(".drop-down8").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down8").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_eight-container").style.display = 'none';
        eight_state = false;
    }
}

var nine_state = false;

function ToggleNine(){
    if(nine_state === false){
        document.querySelector(".drop-down9").style.backgroundColor = 'white';
        document.querySelector(".drop-down9").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_nine-container").style.display = 'block';
    nine_state = true;
    }else if(nine_state === true){
        document.querySelector(".drop-down9").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down9").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_nine-container").style.display = 'none';
        nine_state = false;
    }
}

var ten_state = false;

function ToggleTen(){
    if(ten_state === false){
        document.querySelector(".drop-down10").style.backgroundColor = 'white';
        document.querySelector(".drop-down10").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_ten-container").style.display = 'block';
    ten_state = true;
    }else if(ten_state === true){
        document.querySelector(".drop-down10").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down10").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_ten-container").style.display = 'none';
        ten_state = false;
    }
}

var eleven_state = false;

function ToggleEleven(){
    if(eleven_state === false){
        document.querySelector(".drop-down11").style.backgroundColor = 'white';
        document.querySelector(".drop-down11").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_eleven-container").style.display = 'block';
    eleven_state = true;
    }else if(eleven_state === true){
        document.querySelector(".drop-down11").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down11").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_eleven-container").style.display = 'none';
        eleven_state = false;
    }
}

var twelve_state = false;

function ToggleTwelve(){
    if(twelve_state === false){
        document.querySelector(".drop-down12").style.backgroundColor = 'white';
        document.querySelector(".drop-down12").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_twelve-container").style.display = 'block';
    twelve_state = true;
    }else if(twelve_state === true){
        document.querySelector(".drop-down12").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down12").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_twelve-container").style.display = 'none';
        twelve_state = false;
    }
}

var thirteen_state = false;

function ToggleThirteen(){
    if(thirteen_state === false){
        document.querySelector(".drop-down13").style.backgroundColor = 'white';
        document.querySelector(".drop-down13").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_thirteen-container").style.display = 'block';
    thirteen_state = true;
    }else if(thirteen_state === true){
        document.querySelector(".drop-down13").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down13").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_thirteen-container").style.display = 'none';
        thirteen_state = false;
    }
}

var fourteen_state = false;

function ToggleFourteen(){
    if(fourteen_state === false){
        document.querySelector(".drop-down14").style.backgroundColor = 'white';
        document.querySelector(".drop-down14").style.boxShadow = "0px 10px 10px  rgb(233, 230, 230)";
        document.querySelector("#topic_fourteen-container").style.display = 'block';
    fourteen_state = true;
    }else if(fourteen_state === true){
        document.querySelector(".drop-down14").style.backgroundColor = 'rgb(233, 230, 230)';
        document.querySelector(".drop-down14").style.boxShadow = "0px 10px 10px  white";
        document.querySelector("#topic_fourteen-container").style.display = 'none';
        fourteen_state = false;
    }
}
//end of pollution



function ChooseSub(name){
    console.log(data);
    data.quiz = name;
    ChangeData(data);
}



 ScorePage.defaultProps
export default ScorePage;

