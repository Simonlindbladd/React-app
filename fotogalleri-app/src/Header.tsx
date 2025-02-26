import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1rem 40px', 
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Blue line at the top */}
      <div
        style={{
          width: '100%',
          height: '2px',
          backgroundColor: 'blue',
          marginBottom: '10px',
        }}
      ></div>
      {/* Button container */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Link
          to="/"
          style={{
            color: 'blue',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          Home
        </Link>
        <Link
          to="/shop"
          style={{
            color: 'blue',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            marginLeft: '60vw', 
          }}
        >
          Shop
        </Link>
      </div>
    </header>
  );
};

export default Header;
