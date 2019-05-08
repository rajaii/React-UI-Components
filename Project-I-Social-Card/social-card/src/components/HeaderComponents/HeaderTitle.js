import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
    return (
    <div class='hTitle'>
        <h3>Lambda School</h3>
        <p>  @LambdaSchool   {Date.now()}</p>
    </div>
    )
}

export default HeaderTitle;