import {React} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Details} from './views/Details';
import {NotFound} from './views/NotFound';
import {Search} from './views/Search';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/detalhes/:id" element={<Details />} exact></Route>
      <Route path="/" element={<Search />} exact></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
