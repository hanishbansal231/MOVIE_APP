import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'swiper/css';
import "swiper/css/pagination"
import 'swiper/css/navigation';
import "swiper/css/free-mode"
import 'aos';
import 'aos/dist/aos.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import  {Toaster}  from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Toaster
            position='bottom-left' 
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                duration:2000,

            }}
            />
            <App />
        </BrowserRouter>
    </Provider>
);
