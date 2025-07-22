import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { Link } from "react-router";
import { User } from "lucide-react";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItems } = useCart();
    const [selectdPath, getSelectdPath] = useState("/")


    const getTotalQuantity = (cartItems) => {
        return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
    };
    const totalQuantity = getTotalQuantity(cartItems);

    const handleDropdownVal = (path) => {
        getSelectdPath(path);
        setMobileMenuOpen(false);
    }

    return (
        <nav className="sticky top-0 z-50">
            <div className={`navbar bg-[#ffffff] h-[80px] ${!isMobileMenuOpen && "shadow-md"}  flex justify-between items-center px-12 max-[500px]:px-6 z-10 relative`}>
                <div>
                    <span className="font-serif font-bold text-[#4B682A] text-3xl max-[500px]:text-xl">GreenNest Naturals</span>
                </div>
                <div className="gap-4 hidden min-[900px]:flex">
                    <Link to="/" className={`${location.pathname === '/' ? "text-[#4B682A] font-semibold " : "text-[#4B5563]"} text-[18px]`}>Home</Link>
                    <Link to="/products" className={`${location.pathname === '/products' ? "text-[#4B682A] font-semibold " : "text-[#4B5563]"} text-[18px]`} >Products</Link>
                    <Link to="/subscription" className={`${location.pathname === '/subscription' ? "text-[#4B682A] font-semibold " : "text-[#4B5563]"} text-[18px]`}>Subscription</Link>
                    <Link to="/contact" className={`${location.pathname === '/contact' ? "text-[#4B682A] font-semibold " : "text-[#4B5563]"} text-[18px]`}>Contact</Link>
                </div>
                <div className="flex items-center">
                    <Link to="/signIn" className="border-[#d3e0b9] mr-5 border text-[#4b682a] hover:bg-[#f4f7ed] flex items-center px-4 py-2 rounded-lg  transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                            <User className="h-4 w-4 mr-2" />
                            Sign In
                    </Link>
                    <Link to="/cart" className="relative cursor-pointer">
                        <svg className="w-6 h-6 text-[#4B682A]" fill="none" stroke="currentColor" strokeWidth={2}
                            viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>

                        {totalQuantity > 0 && <div className="absolute -top-2 -right-2 bg-[#81AB45] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {totalQuantity}
                        </div>}
                    </Link>
                    <Link to="/subscription" className="ml-5 px-4 py-3 bg-[#81AB45] hover:bg-[#4B682A] text-white font-bold rounded-xl text-md hidden min-[900px]:flex">Subscribe Now</Link>
                    <div className="min-[900px]:hidden ml-5">
                        <button className="items-center flex cursor-pointer" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                            {!isMobileMenuOpen && <svg className="w-6 h-6 text-[#4B682A]" fill="none" stroke="currentColor" strokeWidth={2}
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>}
                            {isMobileMenuOpen && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 L6 18" />
                                <path d="M6 6 L18 18" />
                            </svg>}
                        </button>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full z-50 min-[900px]:hidden mt-4 space-y-1 text-gray-700 font-medium shadow-md bg-white px-6 pb-4">
                    <Link to="/" onClick={() => handleDropdownVal("/")} className={`${selectdPath === '/' ? "text-[#4B682A] bg-[#F4F7ED] font-semibold" : "hover:bg-[#F4F7ED]"} block text-lg  px-3 py-3 rounded-xl`}>Home</Link>
                    <Link to="/products" onClick={() => handleDropdownVal("/products")} className={`${selectdPath === '/products' ? "text-[#4B682A] bg-[#F4F7ED] font-semibold" : "hover:bg-[#F4F7ED]"} block text-lg  px-3 py-3 rounded-xl`}>Products</Link>
                    <Link to="/subscription" onClick={() => handleDropdownVal("/subscription")} className={`${selectdPath === '/subscription' ? "text-[#4B682A] bg-[#F4F7ED] font-semibold" : "hover:bg-[#F4F7ED]"} block text-lg  px-3 py-3 rounded-xl`}>Subscription</Link>
                    <Link to="/contact" onClick={() => handleDropdownVal("/contact")} className={`${selectdPath === '/contact' ? "text-[#4B682A] bg-[#F4F7ED] font-semibold" : "hover:bg-[#F4F7ED]"} block text-lg px-3 py-3 rounded-xl`}>Contact</Link>
                    <Link to="/subscription" onClick={() => handleDropdownVal("/subscription")} className="flex text-lg items-center space-x-4 mt-2 w-full">
                        <div className="py-2 bg-[#81AB45] hover:bg-[#4B682A] text-center text-white h-[50px] font-bold w-full rounded-[14px]">Subscribe Now</div>
                    </Link>
                </div>
            )}
        </nav>
    )
};

export default Navbar;