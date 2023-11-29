import React from 'react';
// import './green-button.css';

const GreenButton = ({text, onClick}) => <div onClick={onClick} id='green-button'>
    <div className='text'>
        <div className='button'>{text}</div>
    </div>
</div>

// function DefaultClick(){
//     alert("Default function");
// }

GreenButton.defaultProps = {
    text:'Default Text',
    // onClick:DefaultClick
}

export default GreenButton;