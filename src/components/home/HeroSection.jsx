import { Leaf, Check, Truck, Star } from 'lucide-react';
import { Link } from "react-router";

const HeroSection = () => {
    return (
        <div className="mx-auto pb-10">
            <div className="text-center px-50 flex items-center justify-center flex-col h-[70vh] max-[900px]:px-14 max-[900px]:h-auto py-4">
                <p className="text-[#3A5120] mb-5 --tw-text-opacity: 1; font-semibold text-sm py-1 px-4 bg-[#E9EFD9] rounded-full text-center">Farm Fresh Organic Products</p>
                <h1 className="font-serif mb-5 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                    Farm Fresh <span className="text-[#658a34]"> Organic Products</span> Delivered To Your Doorstep
                </h1>
                <p className="text-gray-600 text-xl mb-8 mx-auto">Experience the true taste of nature with our premium organic milk, oils, country chicken, and eggs.</p>
                <div className="flex gap-3 flex-wrap justify-center">
                    <Link to="/subscription" className="text-[#ffffff] text-lg flex items-center bg-[#509550] hover:bg-[#3f7a3f] py-2 px-4 h-[50px] rounded-lg">Subscribe Now</Link>
                    <Link to="/products" className="text-[#ffffff] text-lg flex items-center bg-[#509550] hover:bg-[#3f7a3f] py-2 px-4 h-[50px] rounded-lg">Explore Products</Link>
                </div>
            </div>
            <div className="px-10 min-[900px]:px-6">
                <h1 className="font-serif text-center  mb-5 text-3xl font-bold text-gray-900">Why Choose GreenNest Naturals?</h1>
                <p className="text-gray-600 text-center  text-xl mb-8 mx-auto">We provide the highest quality organic products directly from our farm to your table.</p>
                <div className='flex items-center justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        <div className="border-1 p-4 border-[#E9F0DC] rounded-2xl min-[640px]:p-6 shadow">
                            <Leaf className="h-10 w-10 text-[#658a34] mb-4" />
                            <p className='text-gray-900 text-xl font-bold mb-4'>100% Organic</p>
                            <p className='text-gray-600 text-lg mb-4'>All our products are certified organic and free from harmful chemicals and pesticides.</p>
                        </div>
                        <div className="border-1 p-4 border-[#E9F0DC] rounded-2xl min-[640px]:p-6 shadow">
                            <Check className="h-10 w-10 text-[#658a34] mb-6" />
                            <p className='text-gray-900 text-xl font-bold mb-4'>Quality Assured</p>
                            <p className='text-gray-600 text-lg mb-4'>We maintain strict quality standards throughout our production process.</p>
                        </div>
                        <div className="border-1 p-4 border-[#E9F0DC] rounded-2xl min-[640px]:p-6 shadow">
                            <Truck className="h-10 w-10 text-[#658a34] mb-4" />
                            <p className='text-gray-900 text-xl font-bold mb-4'>Fast Delivery</p>
                            <p className='text-gray-600 text-lg mb-4'>Get fresh products delivered to your doorstep within 24 hours of harvesting.</p>
                        </div>
                        <div className="border-1 p-4 border-[#E9F0DC] rounded-2xl min-[640px]:p-6 shadow">
                            <Star className="h-10 w-10 text-[#658a34] mb-4" />
                            <p className='text-gray-900 text-xl font-bold mb-4'>Customer Love</p>
                            <p className='text-gray-600 text-lg mb-4'>Join thousands of satisfied customers who trust our organic products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default HeroSection;