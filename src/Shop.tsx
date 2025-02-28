import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productMain from './assets/img2.jpg'; // Main product image
import thumb1 from './assets/img3.jpg';      // Thumbnail 1
import thumb2 from './assets/img2.jpg';      // Thumbnail 2
import thumb3 from './assets/img3.jpg';      // Thumbnail 3
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
        {/* Main product image with a maxWidth to reduce its size */}
        <img 
          src={productMain} 
          alt="Product" 
          className="main-image"
          style={{
            maxWidth: '500px', // Adjust this value as needed
            width: '100%',
            height: 'auto'
          }}
        />
        <div className="thumbnails">
          <img src={thumb1} alt="Thumb 1" />
          <img src={thumb2} alt="Thumb 2" />
          <img src={thumb3} alt="Thumb 3" />
        </div>
      </div>
      <div className="shop-info">
        <h1>Awesome Product</h1>
        <p>
          This is a description of the product image...
        </p>
        <p className="price"><strong>Price: $29.99</strong></p>
        <button onClick={addToCart}>Add to Cart</button>
        {cart > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <div style={{ fontWeight: 'bold' }}>Items in Basket: {cart}</div>
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
