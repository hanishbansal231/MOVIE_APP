import { Routes, Route } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import AboutUs from './Screen/AboutUs';
import NotFound from './Screen/NotFound';
import ContactUs from './Screen/ContactUs';
import Movies from './Screen/Movies';
import SingleMovie from './Screen/SingleMovie';
import WatchMovie from './Screen/WatchMovie';
import Login from './Screen/Login';
import Register from './Screen/Register';
import Profile from './Screen/Dashboard/Profile';
import Aos from 'aos';
import Password from './Screen/Dashboard/Password';
import FavoriteMovies from './Screen/Dashboard/FavoriteMovies';

function App() {

  Aos.init();

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/movie' element={<Movies />} />
        <Route path='/movie/:id' element={<SingleMovie />} />
        <Route path='/watch/:id' element={<WatchMovie />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/updateprofile' element={<Profile />} />
        <Route path='/changepassword' element={<Password />} />
        <Route path='/favoritesmovies' element={<FavoriteMovies />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
