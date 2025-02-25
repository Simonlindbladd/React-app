import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Shop from './Shop';
import PhotoDetail from './PhotoDetail';
import Carousel from './Carousel';
import Checkout from './Checkout';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Carousel />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/photo/:id" element={<PhotoDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
