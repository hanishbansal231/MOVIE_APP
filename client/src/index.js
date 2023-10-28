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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
