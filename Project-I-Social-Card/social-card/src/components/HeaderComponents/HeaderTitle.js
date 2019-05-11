import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
    return (
    <div className='hTitle'>
        <h3>Lambda School</h3>
        <p>  @LambdaSchool   {new Date()}</p>
    </div>
    )
}

export default HeaderTitle;