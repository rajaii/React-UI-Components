import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
    <div className='buttonContainer'>
        <div className='numberButtonFlex1'>
            <div className="number">7</div>
            <div className="number">8</div>
            <div className="number">9</div>
        </div>
        <div className='numberButtonFlex2'>
            <div className="number">4</div>
            <div className="number">5</div>
            <div className="number">6</div>
        </div>
        <div className='numberButtonFlex3'>
            <div className="number">1</div>
            <div className="number">2</div>
            <div className="number">3</div>
        </div>
        <div>
            <div className="numberZero">0</div>
        </div>
    </div>
    )
}


export default NumberButton; 