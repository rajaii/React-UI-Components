import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
    let date = new Date()
    return (
    <div className='hTitle'>
        <h3>Lambda School</h3>
    <p>  @LambdaSchool   {`${date.getMonth()}, ${date.getFullYear()}`}</p>
    </div>
    )
}

export default HeaderTitle;