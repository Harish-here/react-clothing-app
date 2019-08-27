import React from 'react';
import ProductCard from './productCard.component';
const ProductDirectory = ({menuItems}) => (
    <div className='directory-menu'>
        {menuItems.map(x => <ProductCard title={x} />)}
    </div>
);

export default ProductDirectory;
