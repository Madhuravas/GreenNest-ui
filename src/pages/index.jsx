import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from 'sonner';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (<div>
        <Toaster richColors position="bottom-right" />
        <Navbar />
        <Outlet />
        <Footer />
    </div>)
};

export default Index;