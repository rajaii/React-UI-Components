import React from 'react';
import './Card.css';

const CardContent = (props) => {
    return (
    <div className='cardContent'>
        <h3 className='cardh3'>Get started with React</h3>
        <p>React makes it painless to create interactive UI's. Design simple views for each state in your application.</p>
        <p className='p2'>reactjs.org</p>
    </div>
    )
}

export default CardContent;