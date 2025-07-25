import { pricingPlans } from '../data/priceplans';
import ChoosePlan from '../components/subscription/ChoosePlan';
import { useState } from 'react';
import SelectProduct from '../components/subscription/SelectProduct';
import DeliveryDetailsForm from '../components/subscription/DeliveryDetailsForm';


const Subscription = () => {
    const [activeStep, setActiveStep] = useState(1);
    return (
        <div className="bg-[#fefcf6] px-6 py-10">
            <div className="text-center mb-8">
                <h1 className="font-serif font-bold text-3xl text-gray-900">Subscription Plans</h1>
                <p className="text-gray-600 text-lg">Choose the perfect subscription plan for regular deliveries of fresh organic products.</p>
            </div>
            <div className="max-w-3xl mx-auto mb-10">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${activeStep >= 1 ? 'bg-[#81ab45] text-white' : 'bg-gray-200 text-gray-500'}`}>
                            1
                        </div>
                        <span className="text-sm mt-2">Choose Plan</span>
                    </div>
                    <div className="flex-1 h-1 mb-8 bg-gray-200 mx-2">
                        <div className={`h-1 bg-[#81ab45] ${activeStep >= 2 ? 'w-full' : 'w-0'} transition-all duration-300`}></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${activeStep >= 2 ? 'bg-[#81ab45] text-white' : 'bg-gray-200 text-gray-500'}`}>
                            2
                        </div>
                        <span className="text-sm mt-2">Product Selection</span>
                    </div>
                    <div className="flex-1 h-1 mb-8 bg-gray-200 mx-2">
                        <div className={`h-1 bg-[#81ab45] ${activeStep >= 3 ? 'w-full' : 'w-0'} transition-all duration-300`}></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${activeStep >= 3 ? 'bg-[#81ab45] text-white' : 'bg-gray-200 text-gray-500'}`}>
                            3
                        </div>
                        <span className="text-sm mt-2">Delivery Details</span>
                    </div>
                </div>
            </div>
            {activeStep === 1 && <ChoosePlan plans={pricingPlans} setActiveStep={() =>setActiveStep(2)}/>}
            {activeStep === 2 && <SelectProduct setActiveStep={setActiveStep}/>}
            {activeStep === 3 && <DeliveryDetailsForm setActiveStep={setActiveStep}/>}
        </div>
    )
};

export default Subscription;