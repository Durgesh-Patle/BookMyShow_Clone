import React from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import RecommendedMovies from './components/RecommendedMovies';
import Events from './Components/Events';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <ImageSlider />
        <RecommendedMovies />
        <Events/>
      </main>
    </div>
  );
}

export default App;
