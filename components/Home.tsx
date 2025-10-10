import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Products title="Our Products" limit={12} showLoadMore={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;