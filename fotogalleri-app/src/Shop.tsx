import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Shop.css';

const Shop = () => {
  const [cart, setCart] = useState<number>(0);
  const navigate = useNavigate();

  const addToCart = () => {
    setCart(cart + 1);
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart } });
  };

  return (
    <div className="shop-container">
      <div className="shop-images">
        <img 
          src="https://picsum.photos/seed/product/600/600" 
          alt="Product" 
          className="main-image"
        />
        <div className="thumbnails">
          <img src="https://picsum.photos/seed/product1/200/200" alt="Thumb 1" />
          <img src="https://picsum.photos/seed/product2/200/200" alt="Thumb 2" />
          <img src="https://picsum.photos/seed/product3/200/200" alt="Thumb 3" />
        </div>
      </div>
      <div className="shop-info">
        <h1>Awesome Product</h1>
        <p>
          This is a detailed description of the product. It includes features, specifications, and benefits.
        </p>
        <p className="price"><strong>Price: $29.99</strong></p>
        <button onClick={addToCart}>Add to Cart</button>
        {cart > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <div style={{ fontWeight: 'bold' }}>
              Items in Basket: {cart}
            </div>
            <button onClick={handleCheckout} style={{ marginTop: '1rem' }}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
