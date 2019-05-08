import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
    <div class='buttonContainer'>
        <div class='numberButtonFlex1'>
            <div class="number">7</div>
            <div class="number">8</div>
            <div class="number">9</div>
        </div>
        <div class='numberButtonFlex2'>
            <div class="number">4</div>
            <div class="number">5</div>
            <div class="number">6</div>
        </div>
        <div class='numberButtonFlex3'>
            <div class="number">1</div>
            <div class="number">2</div>
            <div class="number">3</div>
        </div>
        <div>
            <div class="numberZero">0</div>
        </div>
    </div>
    )
}


export default NumberButton;