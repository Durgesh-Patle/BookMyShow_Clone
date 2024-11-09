import Navbar from './Components/Navbar';
import ImageSlider from './Components/ImageSlider';
import RecommendedMovies from './Components/RecommendedMovies';
import Events from './Components/Events';
import Premium from './Components/Premium';
import MusicStudio from './Components/MusicStudio';
import OutDoorEvents from './Components/OutDoorEvents';
import Therapy from './Components/Therapy';
import TrendingSearch from './Components/TrendingSearch';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <BrowserRouters> */}
        <Navbar />
        {/* <Routes>
          <Route path />
        </Routes>
      </BrowserRouters> */}
      <main className="container mx-auto px-4 py-6">
        <ImageSlider />
        <RecommendedMovies />
        <Events />
        <Premium />
        <MusicStudio/>
        <OutDoorEvents/>
        <Therapy/>
        <TrendingSearch/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
