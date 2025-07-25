import { useState } from 'react';
import { productsList } from '../../data/products'

const SelectProduct = ({ setActiveStep }) => {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const dairyProducts = productsList.filter(product => product.category === 'dairy');
    const oilProducts = productsList.filter(product => product.category === 'oils');
    const proteinProducts = productsList.filter(product =>
        product.category === 'meat' || product.category === 'eggs'
    );

    const handleProductSelect = (groupName, selectedProduct) => {
        setSelectedProducts(prev => [
            ...prev.filter(product => product.group !== groupName),
            { ...selectedProduct, group: groupName }
        ]);
    };

    const handleBackbtn = () => {
        setActiveStep(1);
        setSelectedProducts([]);
    };

    const handleContinueBtn = () => {
        setActiveStep(3);
    };

    const renderProducts = (productsArray, groupName) => (
        <div className="flex flex-wrap gap-5">
            {productsArray.map((product, index) => (
                <label
                    key={index}
                    className="flex items-start gap-3 border border-gray-300 rounded-xl p-4 w-72 bg-white shadow-sm"
                >
                    <input onChange={() => handleProductSelect(groupName, product)} type="radio" name={groupName} className="mt-1 h-5 w-5 text-green-600 cursor-pointer" />
                    <div className="flex-1">
                        <strong className="block text-green-800 font-semibold">{product.name}</strong>
                        <span className="text-md text-gray-600">
                            {product.quantity} {product.unit} ${product.price.toFixed(2)}
                        </span>
                    </div>
                </label>
            ))}
        </div>
    );

    return (
        <div className="bg-[#ffffff] rounded-xl shadow p-6 font-sans max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">Select Your Products</h2>
            <p className="text-gray-600 mb-6 text-lg">Choose the products you'd like to include in your subscription.</p>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dairy Products</h2>
                {renderProducts(dairyProducts, 'dairy')}
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cooking Oils</h2>
                {renderProducts(oilProducts, 'oil')}
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Protein Products</h2>
                {renderProducts(proteinProducts, 'protein')}
            </div>
            <div className="flex justify-between items-center mt-10 pt-6">
                <button onClick={handleBackbtn} className="bg-[#FAFCFB] cursor-pointer border border-[#e6ce85] text-[#222B25] hover:bg-[#fcf7e8] font-semibold px-6 py-2 rounded-xl">
                    Back
                </button>
                <button  disabled={selectedProducts.length <= 0} onClick={handleContinueBtn} className={`${selectedProducts.length <= 0 ? 'bg-green-200 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 cursor-pointer'} text-white font-semibold px-6 py-2 rounded-xl`}>
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SelectProduct;