import './productcard.scss'

import Button from '../Button/button'

const ProductCard = ({product}) => {
    const { name, imageUrl, price } = product;
    return(
        <div className="product-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted'> Add Card</Button>
        </div>);
}

export default ProductCard;