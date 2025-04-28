import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/pages/Login";
import Header from "./component/Header";
import HomePage from "./component/homepage/HomePage";
import NoPageFound from "./component/nopagefound/NoPageFound";
import AboutPage from "./component/about/AboutPage";
import ContactPage from "./component/contact/ContactPage";
import HomeBody from "./component/homepage/HomeBody";

function App() {
  return (
    <>
      <div className="sticky top-0 z-20">
        <Header />
      </div>
      <BrowserRouter basename="/to-do-list">
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<HomeBody />} />
            <Route path="homebody" element={<HomeBody />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage/>} />
            <Route path="*" element={<NoPageFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
