import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { toast } from 'sonner';

const DeliveryDetailsForm = ({ setActiveStep }) => {
    const navigate = useNavigate();
    const [isFormValid, setIsFormValid] = useState(false);
    const today = new Date().toISOString().split("T")[0];

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        startDate: '',
        endDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBackbtn = () => {
        setActiveStep(2);
        setSelectedProducts([]);
    };

    const handleComplateBtn = () => {
        navigate('/')
        toast.success('Subscription request submitted!', {
            description: 'We will contact you shortly to confirm your subscription.'
        });
    };

    useEffect(() => {
        const { fullName, email, phone, address, startDate } = formData;
        setIsFormValid(fullName && email && phone && address && startDate);
    }, [formData]);

    return (
        <div className="bg-[#ffffff] shadow p-6 max-w-5xl mx-auto rounded-xl font-sans">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">Delivery Details</h2>
            <p className="text-gray-600 mb-6 text-lg">Tell us where and when to deliver your products.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-semibold text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border border-[#e9f0dc] bg-[#fafafa] rounded-lg p-2.5"
                        placeholder='Your full name'
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-[#e9f0dc] bg-[#fafafa] rounded-lg p-2.5"
                        placeholder='your.email@example.com'
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-700 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-[#e9f0dc] bg-[#fafafa] rounded-lg p-2.5"
                        placeholder='Your phone number'
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block font-semibold text-gray-700 mb-1">Delivery Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border border-[#e9f0dc] bg-[#fafafa] rounded-lg p-2.5"
                        placeholder='Your complete address'
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-700 mb-1">Start Date</label>
                    <div className="relative">
                        <input
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            className="w-full pl-10 border border-[#e9f0dc] bg-[#fafafa] rounded-lg p-2.5"
                            placeholder='Pick a start date'
                            min={today}
                        />
                    </div>
                </div>

                <div>
                    <label className="block font-semibold text-gray-700 mb-1">End Date (Optional)</label>
                    <div className="relative">
                        <input
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            className="w-full pl-10 border border-[#e9f0dc] bg-[#fafafa] rounded-lg p-2.5"
                            placeholder='Pick an end date'
                            min={today}
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-10 pt-6">
                <button onClick={handleBackbtn} className="bg-[#FAFCFB] cursor-pointer border border-[#e6ce85] text-[#222B25] hover:bg-[#fcf7e8] font-semibold px-6 py-2 rounded-xl">
                    Back
                </button>
                <button disabled={!isFormValid} onClick={handleComplateBtn} className={`${!isFormValid ? 'bg-green-200 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 cursor-pointer'} text-white font-semibold px-6 py-2 rounded-xl`}>
                    Complete Registration
                </button>
            </div>
        </div>
    );
};

export default DeliveryDetailsForm;
