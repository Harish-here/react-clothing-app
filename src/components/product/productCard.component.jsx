import React from 'react';

const ProductCard = ({title,imageUrl,size}) => (
    <div 
        className={`${size} menu-item`} 
    >   
        <div className='background-image grow'
             style={{
                backgroundImage: `url(${imageUrl})`
             }}
        ></div>
        <div className="content bg-near-white o-80">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default ProductCard;