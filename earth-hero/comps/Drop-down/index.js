import React from 'react';
// import './dropdown.css';

const DropButton = ({text, onClick}) => <div onClick={onClick} id='green-button'>
    <div className='text'>
        <div className='drop-button'>{text}</div>
    </div>
</div>

function DropClick(){
    alert("Default function");
}

DropButton.defaultProps = {
    text:'Default Text',
    onClick:DropClick
}

export default DropButton;