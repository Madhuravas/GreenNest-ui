import { ChevronRight } from 'lucide-react';
import { productsList } from '../../data/products'
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import { Link } from "react-router";

const FeaturedProductsSection = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const filterdData = productsList.filter(data => data.isPopular)
        setProducts(filterdData);
    }, []);
    return (
        <div className="py-20 bg-[#f4f7ed]">
            <div className="px-4">
                <h5 className="text-[#658a34] text-xl mb-4">Our Products</h5>
                <div className='flex justify-between items-end mb-10'>
                    <h2 className="text-base-900 font-serif text-3xl font-bold">Featured Products</h2>
                    <Link to="/products" className='text-lg text-[#658a34] flex items-center'>View All Products <ChevronRight className="h-4 w-4 ml-1" /></Link>
                </div>
            </div>
            <div className='px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {products.length > 0 && products.map(eachProduct => <ProductCard key={eachProduct.id} product={eachProduct}/> )}
            </div>
        </div>
    )
};

export default FeaturedProductsSection;