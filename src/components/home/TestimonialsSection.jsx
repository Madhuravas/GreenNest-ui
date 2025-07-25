import { testimonialList } from '../../data/testimonials';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const Testimonials = () => {
    const [testimonialsPerPage, setTestimonialsPerPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setTestimonialsPerPage(1);
            } else if (window.innerWidth < 1280) {
                setTestimonialsPerPage(2);
            } else {
                setTestimonialsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const next = () => {
        if (startIndex + testimonialsPerPage < testimonialList.length) {
            setStartIndex((prev) => prev + testimonialsPerPage);
        }
    };

    const prev = () => {
        if (startIndex > 0) {
            setStartIndex((prev) => prev - testimonialsPerPage);
        }
    };

    const getVisibleTestimonials = () => {
        return testimonialList.slice(startIndex, startIndex + testimonialsPerPage);
    };

    const canGoPrev = startIndex > 0;
    const canGoNext = startIndex + testimonialsPerPage < testimonialList.length;

    return (
        <div className="py-20 bg-[#FEFCF6]">
            <div className="px-4">
                <div className="text-center mb-10">
                    <h5 className="text-[#658a34] text-xl mb-4">Testimonials</h5>
                    <h2 className="text-base-900 font-serif text-4xl font-bold mb-4">What Our Customers Say</h2>
                </div>
                <div className="flex items-center px-6 max-md:px-0 justify-center gap-10 max-md:gap-2">
                    <ArrowLeft
                        onClick={prev}
                        className={`h-14 w-14 p-4 rounded-full shadow cursor-pointer ${!canGoPrev ? 'opacity-30 cursor-not-allowed' : ''}`}
                        disabled={!canGoPrev}
                    />

                    <div className="flex gap-6 transition-all duration-500 ease-in-out">
                        {getVisibleTestimonials().map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 max-w-sm transition-all duration-500 ease-in-out"
                            >
                                <div className="flex mb-4 text-yellow-500">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-gray-700 italic mb-6">{item.content}</p>
                                <div className="flex items-center space-x-3">
                                    <img src={item.avatar} alt="User" className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                                        <p className="text-sm text-gray-500">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <ArrowRight
                        onClick={next}
                        className={`h-14 w-14 p-4 rounded-full shadow cursor-pointer ${!canGoNext ? 'opacity-30 cursor-not-allowed' : ''}`}
                        disabled={!canGoNext}
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
