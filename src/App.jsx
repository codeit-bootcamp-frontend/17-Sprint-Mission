import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home";
import ItemsPage from "@/pages/items";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import AddItem from "@/pages/AddItem";

import HomeLayout from "@/layout/HomeLayout.jsx";
import DefaultLayout from "@/layout/DefaultLayout.jsx";
import NoLayout from "@/layout/NoLayout.jsx";
import { ResetStyle } from "@/styles/ResetStyle";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        limit={1}
      />
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<NoLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route element={<DefaultLayout />}>
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/additem" element={<AddItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
