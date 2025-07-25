import { CreditCard, Minus, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/cartContext";
import { useEffect } from "react";
import { productsList } from "../data/products";
import { Link } from "react-router";

const Cart = () => {
    const [addCartList, setCartItems] = useState([]);
    const shippingFee = 5.99;
    const { cartItems, addToCart, removeFromCart, removeAll } = useCart();
    const [transactionComplated, setTransactionComplated] = useState(false);

    const getTotalQuantity = (cartItems) => {
        return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
    };

    useEffect(() => {
        const filterData = productsList.filter(item => {
            if (cartItems[item.id]) {
                const newCard = item;
                item.quantity = cartItems[item.id]
                return newCard
            }
        });
        setCartItems(filterData)
    }, [cartItems]);

    const totalQuantity = getTotalQuantity(cartItems);

    const handleRemoveFromCart = (id) => {
        removeFromCart(id, "all");
    };

    const handleMinus = (id) => {
        removeFromCart(id, "single");
    };

    const handlePlus = (id) => {
        addToCart(id);
    };

    const subtotal = Object.values(addCartList).reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const total = subtotal + shippingFee;

    const handleCheckOut = () => {
        setTransactionComplated(true);
        localStorage.removeItem("cartDetails");
        removeAll();
    }
    return (
        <div className="bg-[#fefcf6] rounded-xl px-6 py-10 flex items-center justify-center flex-col" >
            {!transactionComplated && <><h2 className="text-4xl font-serif font-bold text-gray-800 mb-2">Your Cart</h2>
                <div className="flex flex-col lg:flex-row gap-6 w-full px-20 max-md:px-0">
                    <div className="bg-white shadow rounded-xl p-6 flex-1 w-full">
                        <h3 className="text-2xl font-medium mb-4 text-gray-800">
                            Shopping Cart ({totalQuantity} items)
                        </h3>
                        <hr className="text-[#d3e0b9]" />
                        {addCartList.length > 0 && addCartList.map((item) => (
                            <div key={item.id} className="flex items-center max-[500px]:flex-col justify-between py-4 border-b w-full">
                                <div className="flex items-center gap-4 max-[500px]:justify-between w-full">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-lg object-cover"
                                    />
                                    <div>
                                        <p className="font-medium text-lg text-gray-900">{item.name}</p>
                                        <p className="text-md text-gray-500">{item.unit}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 max-[500px]:justify-between w-full">
                                    <div className="flex items-center border rounded-full overflow-hidden">
                                        <button
                                            className="px-2 py-1 text-lg cursor-pointer"
                                            onClick={() => handleMinus(item.id)}
                                        >
                                            <Minus />
                                        </button>
                                        <span className="px-2">{item.quantity}</span>
                                        <button
                                            className="px-2 py-1 text-lg cursor-pointer"
                                            onClick={() => handlePlus(item.id)}
                                        >
                                            <Plus />
                                        </button>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>

                                        <button
                                            className="text-green-700 cursor-pointer text-md flex items-center gap-1 hover:underline"
                                            onClick={() => handleRemoveFromCart(item.id)}
                                        >
                                            <Trash className="h-5 w-5" /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="bg-white shadow rounded-xl px-4 py-6 w-full lg:w-80">
                        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>${shippingFee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold mt-4 mb-6">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <div className="flex gap-1 mb-4">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                className="flex-1 border px-2 py-2 rounded-lg"
                            />
                            <button className="bg-gray-100 px-4 rounded-lg">Apply</button>
                        </div>

                        <button onClick={handleCheckOut} className="w-full cursor-pointer flex items-center gap-3 justify-center bg-[#81AB45] text-white py-3 rounded-lg mb-2 font-semibold">
                            <CreditCard /> Checkout Now
                        </button>

                        <Link to="/products" className="w-full cursor-pointer text-lg text-[#4B682A] flex items-center justify-center gap-2 font-medium hover:underline">
                            ←  Continue Shopping
                        </Link>
                    </div>
                </div></>}
            {transactionComplated && <div className="flex justify-center items-center min-h-[60vh] bg-[#fdfbf5]">
                <div className="bg-white shadow-sm rounded-xl p-10 text-center max-w-md w-full">
                    <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3 7h18M5 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7M9 11h6M9 15h6" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-serif font-bold mb-2 text-gray-800">Your Cart is Empty</h2>
                    <p className="text-gray-600 text-lg mb-6">Looks like you haven't added any products to your cart yet.</p>
                    <Link to="/products">
                        <button className="bg-[#81AB45] cursor-pointer text-white font-semibold px-6 py-2 rounded-xl hover:bg-[#6d9537]">
                            Browse Products
                        </button>
                    </Link>
                </div>
            </div>}
        </div>
    )
};

export default Cart