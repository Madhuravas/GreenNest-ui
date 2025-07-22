import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages";
import Products from "./pages/Products";
import Subscription from "./pages/Subscription";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/cartContext.jsx"
import Cart from "./pages/Cart.jsx";
import SignInPage from "./components/sign/SignIn.jsx";
import SignUpPage from "./components/sign/SignUp.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
