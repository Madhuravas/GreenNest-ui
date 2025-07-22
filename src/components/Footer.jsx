import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#f4f7ed] bottom-0 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">GreenNest Naturals</h3>
                        <p className="text-gray-600 mb-4 text-lg">
                            Delivering farm-fresh organic products directly from our farms to your doorstep.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-lg">
                            <li>
                                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-600 hover:text-nature-600 transition-colors duration-200">Home</Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-gray-600 hover:text-nature-600 transition-colors duration-200">Products</Link>
                            </li>
                            <li>
                                <Link to="/subscription" className="text-gray-600 hover:text-nature-600 transition-colors duration-200">Subscription</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-600 hover:text-nature-600 transition-colors duration-200">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">Products</h3>
                        <ul className="space-y-2 text-lg">
                            <li>
                                <Link to="/products?category=dairy" className="text-gray-600 hover:text-nature-600 transition-colors duration-200">Dairy Products</Link>
                            </li>
                            <li>
                                <Link to="/products?category=oils" className="text-gray-600 hover:text-nature-600 transition-colors duration-200">Cooking Oils</Link>
                            </li>
                            <li>
                                <Link to="/products?category=meat" className="text-gray-600 hover:text-nature-600 transition-colors duration-200">Country Chicken</Link>
                            </li>
                            <li>
                                <Link to="/products?category=eggs" className="text-gray-600 hover:text-nature-600 transition-colors duration-200">Farm Fresh Eggs</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">Contact Us</h3>
                        <address className="not-italic text-gray-600 text-lg">
                            <p>123 Farm Road,</p>
                            <p>Organic Valley, OV 54321</p>
                            <p className="mt-3">Phone: (555) 123-4567</p>
                            <p>Email: info@greennest-naturals.com</p>
                        </address>
                    </div>
                </div>
                <div className="border-t border-[#d3e0b9] mt-8 pt-8">
                    <p className="text-center text-gray-500 text-md">
                        &copy; {new Date().getFullYear()} GreenNest Naturals. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;