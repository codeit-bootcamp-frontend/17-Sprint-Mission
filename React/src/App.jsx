import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar.jsx';
import ItemsPage from './pages/ItemsPage/ItemsPage.jsx';
import AddItemPage from './pages/AddItemPage/AddItemPage.jsx';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';
import GlobalStyle from './styles/Globalstyle.jsx';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/items" />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/additem" element={<AddItemPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;