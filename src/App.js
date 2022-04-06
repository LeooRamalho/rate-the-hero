import Axios from 'axios';
import {configure} from 'axios-hooks';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {NormalizeStyles} from './shared/NormalizeStyles';

import {Header} from './components/common/Header';
import {Details} from './views/Details';
import {NotFound} from './views/NotFound';
import {Search} from './views/Search';

const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_KEY}`,
});
configure({axios});

export const App = () => (
  <>
    <NormalizeStyles />
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/detalhes/:id" element={<Details />} exact></Route>
        <Route path="/" element={<Search />} exact></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
