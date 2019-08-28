import React from 'react';
import {withRouter} from 'react-router-dom';

const ProductCard = ({title, imageUrl, size, history, match}) => (
    <div 
        className={`${size} menu-item overflow-hidden pointer`}
        onClick={() => history.push(`${match.url}${title}`)} 
    >   
        <div className='background-image grow'
             style={{
                backgroundImage: `url(${imageUrl})`
             }}
        ></div>

        <div className="content bg-near-white o-80" >
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(ProductCard);