import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <div className="bg-[#658a34] py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Ready to Experience Natural Goodness?</h2>
                <p className="text-[#e9f0dc] text-lg mb-8 max-w-2xl mx-auto">
                    Join our subscription service today and enjoy regular deliveries of farm-fresh organic products straight to your doorstep.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-[#4b682a] hover:bg-cream-100 text-[18px] px-3 py-4 rounded-xl hover:bg-[#fcf7e8]">
                        <Link to="/subscription">Start Your Subscription</Link>
                    </button>
                    <button className="bg-white text-[#4b682a] hover:bg-cream-100 text-[18px] px-3 py-4 rounded-xl hover:bg-[#fcf7e8]">
                        <Link to="/products">Browse Products</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CTASection;