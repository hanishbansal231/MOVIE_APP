import { Routes, Route } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import AboutUs from './Screen/AboutUs';
import NotFound from './Screen/NotFound';
import ContactUs from './Screen/ContactUs';
import Movies from './Screen/Movies';
import SingleMovie from './Screen/SingleMovie';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/movie' element={<Movies />} />
        <Route path='/movie/:id' element={<SingleMovie />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
