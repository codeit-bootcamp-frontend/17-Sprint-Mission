import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/layout/MainLayout';
import AddItem from '@/pages/AddItem';
import Community from '@/pages/Community';
import Faq from '@/pages/Faq/index.js';
import Home from '@/pages/Home';
import Items from '@/pages/Items';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Privacy from '@/pages/Privacy';
import Product from '@/pages/Product';
import Signup from '@/pages/Signup';

import '@/styles/global.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='items' element={<Items />} />
          <Route path='items/:productId' element={<Product />} />
          <Route path='additem' element={<AddItem />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='community' element={<Community />} />
          <Route path='faq' element={<Faq />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
