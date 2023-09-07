
import { useContext } from 'react';

import { ProductContext } from '../../context/Products';
import ProductCard from '../../components/products-card/ProductCard';

import './shop.scss'

const Shop =()=> {
    const {products} = useContext(ProductContext)
    return(
        <div className='products-container'>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Shop;