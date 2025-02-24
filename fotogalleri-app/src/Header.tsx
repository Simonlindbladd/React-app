import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Hem</Link> | <Link to="/gallery">Galleri</Link>
      </nav>
    </header>
  );
};

export default Header;
