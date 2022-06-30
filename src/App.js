import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header/Header";
import './App.css'
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import OrderProcess from "./pages/Shared/OrderProcess/OrderProcess";
import Cart from "./pages/Cart.js/Cart";
import Login from "./Login/Login";
import Register from "./Login/Register";
import RequireAuth from "./Login/RequireAuth";
import Menu from "./pages/Menu/Menu";
import Service from "./pages/Shared/Service";
import Shop from './pages/Shop/Shop'
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/orderprocess" element={
          <RequireAuth>
            <OrderProcess />
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
