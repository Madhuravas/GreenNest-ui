import { useCart } from '../context/cartContext';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const addItemToCart = (product) => {
        addToCart(product.id);
        toast.success(`${product.name} added to cart!`)
    };

    return (
        <div key={product.id} className='rounded-xl relative' style={{ boxShadow: "0 -4px 10px rgba(0,0,0,0.05), 0 4px 10px rgba(0,0,0,0.05)" }}>
            <div className='h-[210px]'>
                <img src={product.image} alt={product.name} className='h-[210px] w-full bg-[#FEFCF6FF] object-cover rounded-t-xl' />
                {product.isPopular && <div className='py-0.5 px-2.5 rounded-2xl bg-[#81ab45] text-[#ffffff] absolute top-2 right-2'>Popular</div>}
            </div>
            <div className='bg-[#ffffff] rounded-b-xl p-4 flex flex-col h-[210px]'>
                <h2 className='text-lg text-gray-900'>{product.name}</h2>
                <p className='text-md text-gray-500'>{product.unit}</p>
                <p className='text-md text-gray-600'>{product.description}</p>

                <div className='mt-auto flex justify-between items-center'>
                    <span className='text-[#3a5123] text-lg font-semibold'>${product.price}</span>
                    <button onClick={() => addItemToCart(product)} className='border border-[#81ab45] bg-[#f4f7ed] hover:bg-[#e9f0dc] cursor-pointer px-3 py-2 w-[80px] rounded-xl text-[#81ab45] flex justify-between font-semibold'>
                        <span>+</span> Add
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;