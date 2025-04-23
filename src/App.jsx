import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/pages/Login";
import Header from "./component/Header";
import HomePage from "./component/homepage/HomePage";
import NoPageFound from "./component/nopagefound/NoPageFound";

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NoPageFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
