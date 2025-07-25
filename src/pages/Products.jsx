import { useState, useEffect } from "react";
import { productsList } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from 'react-router-dom';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [products, setProducts] = useState(productsList ? productsList : []);
    const [inputSearch, setInputSearch] = useState("");
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        if (category){
            setActiveCategory(category);
            handleCategory(category);
        }
    }, []);

    const categories = [
        { id: 'all', label: 'All Products' },
        { id: 'dairy', label: 'Dairy' },
        { id: 'oils', label: 'Oils' },
        { id: 'meat', label: 'Meat' },
        { id: 'eggs', label: 'Eggs' },
    ];

    const handleInputSearch = (e) => {
        setInputSearch(e.target.value)
    };

    const handleSearchBtn = () => {
        if (!inputSearch) {
            setProducts(productsList);
            return
        }

        const query = inputSearch.toLowerCase();

        const searchableFields = [
            "name",
            "category",
            "price",
            "description"
        ];

        let filteredProductsList = productsList.filter(item =>
            searchableFields.some(field => {
                const value = item[field];
                return value && String(value).toLowerCase().includes(query);
            })
        );

        setProducts(filteredProductsList);

    }

    const handleCategory = (category) => {
        setActiveCategory(category);
        if (category === "all") {
            setProducts(productsList);
            return
        }

        const categoryBasedProducts = products.filter(item => item.category === category);
        setProducts(categoryBasedProducts);
    }

    return (
        <div className="bg-[#fefcf6] px-6 py-10">
            <div className="text-center mb-8">
                <h1 className="font-serif font-bold text-3xl text-gray-900">Our Organic Products</h1>
                <p className="text-gray-600 text-lg">Browse our selection of premium organic products, from farm-fresh milk to cold-pressed oils.</p>
            </div>
            <div className="bg-[#ffffff] shadow rounded-lg py-6 px-8 mb-8">
                <div className="mb-5 flex justify-between">
                    <input onChange={handleInputSearch} className="outline-0 border-1 h-[46px] px-4 w-full mr-4 border-gray-300 bg-[#fefcf6] rounded-lg " placeholder="Search Products..." />
                    <button onClick={handleSearchBtn} className="rounded-xl h-[46px] px-6 cursor-pointer text-[#ffffff] bg-[#81ab45] hover:bg-[#658a34]">Search</button>
                </div>
                <div className="bg-[#e9ece8] rounded-2xl px-1 py-2 flex justify-between flex-wrap max-[508px]:justify-center gap-2 w-full ">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategory(cat.id)}
                            className={`px-6 py-2 rounded-xl text-md font-medium transition-all w-[200px] cursor-pointer ${activeCategory === cat.id ? 'bg-[#fefcf6] text-black shadow-sm' : 'text-gray-700 hover:bg-white/40'}`}>
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {products.length > 0 && products.map(eachProduct => <ProductCard key={eachProduct.id} product={eachProduct} />)}
            </div>
        </div>
    )
}

export default Products;