import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header/Header";
import './App.css'
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div>
      <Header/>
    <Routes>
     <Route path="/" element={<Home/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
