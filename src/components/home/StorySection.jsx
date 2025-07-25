import { Leaf } from "lucide-react";
import { Link } from "react-router";

const StorySetion = () => {
    return (
        <div className="py-20">
            <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-2 lg:order-1">
                    <h5 className="text-[#658a34] text-xl mb-4">Our Story</h5>
                    <h2 className="text-base-900 font-serif text-3xl font-bold mb-4">From Our Farm to Your Table</h2>
                    <p className="mb-6 text-gray-600 text-lg">At GreenNest Naturals, we believe that the quality of food directly impacts the quality of life. Our journey began 15 years ago with a small family farm and a big vision: to bring truly organic products to health-conscious families.</p>
                    <p className="mb-6 text-gray-600 text-lg">We maintain sustainable farming practices, treat our animals with care and respect, and ensure that every product meets the highest organic standards. Our milk comes from grass-fed cows, our oils are cold-pressed, and our chickens are raised in a free-range environment.</p>
                    <button className="text-[#ffffff] rounded-xl bg-[#509550] h-[50px] px-4 cursor-pointer"><Link to="/contact">Learn More About Us</Link></button>
                </div>
                <div className="flex flex-col justify-center order-1 lg:order-2">
                    <div className="shadow py-4 px-6 flex items-center gap-4 rounded-xl max-w-xs">
                        <Leaf className="h-14 w-14 text-[#658a34] mb-4" />
                        <div>
                            <h4 className="text-gray-900 text-lg">Certified Organic</h4>
                            <p className="text-gray-500 text-lg">All our products are 100% certified organic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StorySetion;