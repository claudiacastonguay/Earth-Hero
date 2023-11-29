import React from 'react';
// import './choose-subcategory.css';
import Icon from '../../comps/Icon';
import Menu from '../../comps/Menu';
import {data, ChangeData} from '../../data';
import Router from 'next/router';

// const Arrow = require('./arrow.svg');

const ChooseSubCategory = () => <div id='choose-subcategory'>
    <div id='flex-icons'>
        <div><Icon /></div>
        <div id='header-container'>
        <p id='header'>Select a subcategory.</p>
    </div>


{/* droughts */}
<div id='container' onClick={ToggleDrought}>
    <div className='drop-down'>
        <p id='droughts'>Droughts</p>
        {/* <span id='down-arrow' className="material-icons">
            keyboard_arrow_down
        </span> */}
        <img id='down-arrow' src='arrow.svg' />
    </div>
</div>

<div id='drought-options'>

        <label  onClick={()=>{
            HighlightButton();
            ChooseSub("wildfires");
            }} className='container'>Wildfires
            <input type='radio' name='radio' onClick={SelectedChoice} className='circle' />
            <span  onClick={HighlightButton} className='checkmark'></span>
            </label>
        

        <label  onClick={()=>{
            HighlightButton();
            ChooseSub("watershortage");
            }} className='container'>Water Shortage
            <input type='radio' onClick={SelectedChoice} name='radio' />
            <span  onClick={HighlightButton} className='checkmark'></span>
        </label>


        <label onClick={()=>{
            HighlightButton();
            ChooseSub("famine");
            }} className='container'>Famine
            <input type='radio' onClick={SelectedChoice} name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>


        <label onClick={()=>{
            HighlightButton();
            ChooseSub("wildlife");
            }} className='container'>Wildlife
            <input type='radio' onClick={SelectedChoice} name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>
    
    </div>

{/* end of droughts */}
    


{/* floods */}
<div id='container2' onClick={ToggleFlood}>
    <div className='drop-down'>
        <p id='droughts'>Floods</p>
        {/* <span id='down-arrow2' className="material-icons">
            keyboard_arrow_down
        </span> */}
        <img id='down-arrow2' src='arrow.svg' />
    </div>
</div>

<div id='flood-options'>
<label onClick={()=>{
            HighlightButton();
            ChooseSub("icebergmelting");
            }} className='container'>Iceberg Melting
            <input type='radio' onClick={SelectedChoice} name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>


        <label onClick={()=>{
            HighlightButton();
            ChooseSub("cities");
            }} className='container'>Cities
            <input type='radio' onClick={SelectedChoice} name='radio' />
            <span onClick={HighlightButton} className='checkmark'></span>
        </label>
    
    </div>
    
    {/* end of floods */}



<div onClick={ToInfoCards} id='Button-text'>
        <div onClick={ToInfoCards} id='button'>Next</div>
    </div>



        <div><Menu /></div>
    </div>

</div>





// toggle drought and flood state drop downs
var drought_state = false;

function ToggleDrought(){
    if(drought_state === false){
    document.querySelector("#down-arrow").style.transform = 'rotate(180deg)';
    document.querySelector("#drought-options").style.display = 'block';
    drought_state = true;
    }else if(drought_state === true){
        document.querySelector("#down-arrow").style.transform = 'rotate(0deg)';
        document.querySelector("#drought-options").style.display = 'none';
        drought_state = false;
    }
}

var flood_state = false;
function ToggleFlood(){
    if(flood_state === false){
        document.querySelector("#down-arrow2").style.transform = 'rotate(180deg)';
        document.querySelector("#flood-options").style.display = 'block';
        flood_state = true;
        }else if(flood_state === true){
            document.querySelector("#down-arrow2").style.transform = 'rotate(0deg)';
            document.querySelector("#flood-options").style.display = 'none';
            flood_state = false;
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

export default ChooseSubCategory;