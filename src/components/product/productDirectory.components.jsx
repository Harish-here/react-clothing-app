import React from 'react';
import ProductCard from './productCard.component';
const ProductDirectory = ({menuItems}) => (
    <div className='directory-menu'>
        { 
            menuItems.map(({id, ...otherProps}) => (
                <ProductCard 
                            key={id} 
                            {...otherProps} 
                />
            )) 
        }
    </div>
);

export default ProductDirectory;
