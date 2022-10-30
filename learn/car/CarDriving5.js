class CarDriving5 extends React.Component {
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
          	localStorage.setItem("productName" , this.props.name );
		window.location= window.location.origin + localStorage.getItem('contextPath') + '/route.html';
        } 

        return (
            <div className="product thumbnail"> 
		<img src="img/driving/lane_change.jpg"  alt="product"  onClick={() => imageClick()}  />
                <div className="caption">
		    <h3> Lane change indicator up for left and down for right </h3>
                </div>
            </div>
        );
    }
}

