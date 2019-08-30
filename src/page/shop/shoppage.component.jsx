import React, { useState } from 'react';
import './shoppage.style.css';
import SHOP_DATA from "../../shop-data/shop-data";
import PreviewCollection from '../../components/preview-collection/preview-collection.component'

const ShopPage = (props) => {
    const [collections] = useState(SHOP_DATA);
return (
    <div className='shop-page'>
            {
                collections
                        .map((collection) => <PreviewCollection key={collection.id} {...collection} />)
            }
    </div>
)
}


export default ShopPage;