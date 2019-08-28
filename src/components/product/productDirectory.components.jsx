import React from 'react';
import ProductCard from './productCard.component';
const ProductDirectory = ({menuItems}) => (
    <div className='directory-menu'>
        { 
            menuItems.map(({title,id, imageUrl, size}) => (
                <ProductCard title={title} key={id} imageUrl={imageUrl} size={size} />
            )) 
        }
    </div>
);

export default ProductDirectory;
