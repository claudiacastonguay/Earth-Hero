import React from 'react';
// import './pollutionsubcategory.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import {data, ChangeData} from '../../data';
import Router from 'next/router';

// const Arrow = require('./arrow.svg');

const PollutionSubcategory = () => <div id='pollution-subcategory'>

<div id='flex-icons'>
        <div><Icon /></div>
        <div id='header-container'>
        <p id='header'>Select a subcategory.</p>
    </div>


{/* air */}
<div id='container' onClick={ToggleAir}>
    <div className='drop-down'>
        <p id='droughts'>Air</p>
        {/* <span id='down-arrow' className="material-icons">
            keyboard_arrow_down
        </span> */}
        <img id='down-arrow' src='arrow.svg' />
    </div>
</div>

<div id='air-options'>

        <label  onClick={()=>{
            HighlightButton();
            ChooseSub("carbonfootprint");
            }} className='container'>Carbon Footprint
            <input onClick={SelectedChoice} type='radio' name='radio' className='circle' />
            <span  onClick={HighlightButton} className='checkmark'></span>
            </label>
        

        <label  onClick={()=>{
            HighlightButton();
            ChooseSub("acidrain");
            }} className='container'>Acid Rain
            <input onClick={SelectedChoice} type='radio' name='radio' />
            <span  onClick={HighlightButton} className='checkmark'></span>
        </label>


        <label onClick={()=>{
            HighlightButton();
            ChooseSub("respiratoryproblems");
            }} className='container'>Respiratory Problems
            <input onClick={SelectedChoice} type='radio' name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>

    
    </div>

{/* end of air */}
    


{/* water */}
<div id='container2' onClick={ToggleWater}>
    <div className='drop-down'>
        <p id='droughts'>Water</p>
        {/* <span id='down-arrow2' className="material-icons">
            keyboard_arrow_down
        </span> */}
        <img id='down-arrow2' src='arrow.svg' />
    </div>
</div>

<div id='water-options'>
<label onClick={()=>{
            HighlightButton();
            ChooseSub("marinelife");
            }} className='container'>Marine Life
            <input onClick={SelectedChoice} type='radio' name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>


        <label onClick={()=>{
            HighlightButton();
            ChooseSub("eutrophication");
            }} className='container'>Eutrophication
            <input onClick={SelectedChoice} type='radio' name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>


        <label onClick={()=>{
            HighlightButton();
            ChooseSub("drinkingwater");
            }} className='container'>Drinking Water
            <input onClick={SelectedChoice} type='radio' name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>
    
    </div>
    
    {/* end of water */}



    {/* land */}
<div id='container2' onClick={ToggleLand}>
    <div className='drop-down'>
        <p id='droughts'>Land</p>
        {/* <span id='down-arrow3' className="material-icons">
            keyboard_arrow_down
        </span> */}
        <img id='down-arrow3' src='arrow.svg' />
    </div>
</div>

<div id='land-options'>
<label onClick={()=>{
            HighlightButton();
            ChooseSub("pollutioncities");
            }} className='container'>Cities
            <input onClick={SelectedChoice} type='radio' name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>


        <label onClick={()=>{
            HighlightButton();
            ChooseSub("pollutionwildlife");
            }} className='container'>Wildlife
            <input onClick={SelectedChoice} type='radio' name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>
    
    </div>
    
    {/* end of land */}



<div onClick={ToInfoCards} id='Button-text'>
        <div onClick={ToInfoCards} id='button'>Next</div>
    </div>


        <div><Menu /></div>
    </div>

</div>



// toggle drought and flood state drop downs
var air_state = false;

function ToggleAir(){
    if(air_state === false){
    document.querySelector("#down-arrow").style.transform = 'rotate(180deg)';
    document.querySelector("#air-options").style.display = 'block';
    air_state = true;
    }else if(air_state === true){
        document.querySelector("#down-arrow").style.transform = 'rotate(0deg)';
        document.querySelector("#air-options").style.display = 'none';
        air_state = false;
    }
}

var water_state = false;
function ToggleWater(){
    if(water_state === false){
        document.querySelector("#down-arrow2").style.transform = 'rotate(180deg)';
        document.querySelector("#water-options").style.display = 'block';
        water_state = true;
        }else if(water_state === true){
            document.querySelector("#down-arrow2").style.transform = 'rotate(0deg)';
            document.querySelector("#water-options").style.display = 'none';
            water_state = false;
        }
}

var land_state = false;
function ToggleLand(){
    if(land_state === false){
        document.querySelector("#down-arrow3").style.transform = 'rotate(180deg)';
        document.querySelector("#land-options").style.display = 'block';
        land_state = true;
        }else if(land_state === true){
            document.querySelector("#down-arrow3").style.transform = 'rotate(0deg)';
            document.querySelector("#land-options").style.display = 'none';
            land_state = false;
        }
}
//end of drop downs


function HighlightButton(){
    document.querySelector("#button").style.backgroundColor = '#46c75f';
}

function ChooseSub(name){
    console.log(data);
    data.subcategory = name;
    data.category = name;
    data.help1 = name;
    data.help2 = name;
    data.help3 = name;
    data.help4 = name;
    ChangeData(data);
}

var selected = false;
function SelectedChoice(){
    selected = true;
}

function ToInfoCards(){
    if(selected === true){
        Router.push('/WhatCard');
    }else{
        //
    }
}

export default PollutionSubcategory;