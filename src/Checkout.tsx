import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Checkout = () => {
  // Retrieve the passed cart count from the location state
  const location = useLocation();
  const cartCount = location.state?.cart || 0;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Checkout Data:', formData, 'Cart Items:', cartCount);
    alert('Order submitted! (Demo)');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Checkout</h2>
      {cartCount > 0 && (
        <p style={{ fontWeight: 'bold' }}>Items in Basket: {cartCount}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="address">Address:</label><br />
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            background: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
