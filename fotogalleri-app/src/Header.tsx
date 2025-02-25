import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <Link to="/">Home</Link>
      </div>
      <div className="header-center">
        <Link to="/shop">Shop</Link>
      </div>
      <div className="header-right">
        {/* This div is intentionally left blank */}
      </div>
    </header>
  );
};

export default Header;
