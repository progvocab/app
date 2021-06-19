class Product extends React.Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }
	
    render() {
        const { name, price, currency, image, isInCart } = this.props;
 	const imageClick = () => {
          window.location= window.location.origin + localStorage.getItem('contextPath')
 + '/route.html';
        } 

        return (
            <div className="product thumbnail"> 
		<img src={image} alt="product"  onClick={() => imageClick()}  />
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="product__price">{price} {currency}</div>
                    <div className="product__button-wrap">
                    </div>
                </div>
            </div>
        );
    }
}

/*Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}
*/
//export default Product;
