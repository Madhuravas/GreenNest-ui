import { Check } from "lucide-react";
import { useState } from "react";

const ChoosePlan = ({ plans, setActiveStep }) => {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [isYearly, setIsYearly] = useState(false);
    return (
        <>
            <div className="flex justify-center mb-8">
                <div className="bg-white rounded-full inline-flex p-1 shadow-sm">
                    <button
                        className={`cursor-pointer py-2 px-4 rounded-full ${!isYearly ? 'bg-[#81ab45] text-white' : 'text-gray-600'}`}
                        onClick={() => setIsYearly(false)}
                    >
                        Monthly
                    </button>
                    <button
                        className={`cursor-pointer py-2 px-4 rounded-full ${isYearly ? 'bg-[#81ab45] text-white' : 'text-gray-600'}`}
                        onClick={() => setIsYearly(true)}
                    >
                        Yearly (10% off)
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map(plan => (
                    <div
                        key={plan.id}
                        className={`rounded-xl border shadow-sm ${plan.isPopular ? 'border-[#658a34]' : 'border-gray-200'} bg-white`}
                    >
                        {plan.isPopular && (
                            <div className="bg-[#658a34] text-white px-3 py-2 text-center text-lg rounded-t-md inline-block mb-2 w-full">Most Popular</div>
                        )}
                        <div className="p-6">
                            <h2 className="text-2xl text-gray-900 font-semibold mb-1">{plan.name}</h2>
                            <p className="text-lg text-gray-500">{plan.features[0]}</p>
                            <div className="text-3xl font-bold text-gray-900 mb-3 mt-5">
                                {isYearly ? <div>${plan.price.yearly} <span className="text-sm text-gray-500 font-normal">/ yearly</span></div> : <div>${plan.price.monthly} <span className="text-sm text-gray-500 font-normal">/ month</span></div>}
                            </div>
                            <ul className="text-sm text-gray-700 space-y-2 mb-4">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start space-x-2 text-gray-600 text-[16px] my-2">
                                        <Check className="w-4 h-4 text-green-600 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={setActiveStep} className={`w-full cursor-pointer ${plan.isPopular ? "bg-[#658a34] hover:bg-[#4f6f29]" : "bg-green-700 hover:bg-green-600"}  text-white py-4 rounded-xl`}>Select Plan</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default ChoosePlan;