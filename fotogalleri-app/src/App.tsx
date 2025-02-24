import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import PhotoDetail from './PhotoDetail';
import Carousel from './Carousel';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Carousel />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo/:id" element={<PhotoDetail />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
