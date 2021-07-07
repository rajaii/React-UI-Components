import React from 'react';
import './Button.css'

const ClearButton = (props) => {
    return (
        <div className='clearFlex'>
            <div className='clearButton'>clear</div>
            <div className='divide'>÷</div>
        </div>
    )
}

export default ClearButton;