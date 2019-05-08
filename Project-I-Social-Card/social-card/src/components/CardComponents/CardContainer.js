import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = (props) => {
    return (
        <div class='cardAnchorContainer'>
            <a class='cardAnchor' href='https://www.reactjs.org'>
                <CardBanner/>
                <CardContent/>
            </a>
        </div>
    )
}



export default CardContainer;
