import Navbar from './Components/Navbar';
import ImageSlider from './Components/ImageSlider';
import RecommendedMovies from './Components/RecommendedMovies';
import Events from './Components/Events';
import Premium from './Components/Premium';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <ImageSlider />
        <RecommendedMovies />
        <Events />
        <Premium/>
      </main>
    </div>
  );
}

export default App;
