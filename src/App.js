import {React} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {NormalizeStyles} from './shared/NormalizeStyles';

import {Header} from './components/common/Header';
import {Details} from './views/Details';
import {NotFound} from './views/NotFound';
import {Search} from './views/Search';


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
