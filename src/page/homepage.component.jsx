import React, { useState } from 'react';
import './homepage.style.scss'
import ProductDirectory from '../components/product/productDirectory.components'

const HomePage = () => {
    const [items,setItems] = useState(["HATS","SNEAKERS","WOMENS","MENS","SHOES"]);
    return (
    <div class='homepage'>
        
        <ProductDirectory menuItems={items} />

    </div>
);
}

export default HomePage;