import React, { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';
import Input from "../../utils/Input";
import inputConfig from "../../config/Signup.json";
import { Link } from "react-router-dom";

const MemoizedInput = React.memo(Input);

function SignUpPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agree: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [passwordFieldType, setPasswordFieldType] = useState("password");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setPasswordFieldType(showPassword ? "password" : "text");
    };


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add submission logic
    };

    return (
        <div className="flex items-center justify-center bg-[#f7f8f7] p-8">
            <div>
                <div className="text-center mb-4">
                    <h1 className="text-2xl font-semibold text-[#4b682a] font-serif">GreenNest Naturals</h1>
                    <p className="text-gray-600 mt-1">Create your account to start shopping organic.</p>
                </div>
                <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-1 font-serif">Sign Up</h2>
                    <p className="text-sm text-gray-600 mb-5">Create your account to access fresh organic products</p>
                    <form className="space-y-4">
                        {inputConfig && inputConfig.map((field) => (
                            <div key={field.name} className={`relative mb-4 ${field.className || ''}`}>
                                <label
                                    htmlFor={field.name}
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    {field.label}
                                </label>
                                {field.hasToggle ? <div className="relative mt-1 w-full border border-gray-300 rounded-lg flex items-center">
                                    <MemoizedInput
                                        id={field.name}
                                        type={field.hasToggle ? passwordFieldType : field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        className="w-full px-4 py-2 pr-10 rounded-lg focus:outline-none border-none bg-transparent"
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                    />
                                    <div className="absolute right-3 cursor-pointer text-gray-500">
                                        {showPassword ? (
                                            <EyeOff onClick={togglePasswordVisibility} />
                                        ) : (
                                            <Eye onClick={togglePasswordVisibility} />
                                        )}
                                    </div>
                                </div> : <MemoizedInput
                                    id={field.name}
                                    type={field.hasToggle ? passwordFieldType : field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    className={`mt-1 w-full px-4 py-2 rounded-lg pr-10 border border-gray-300 focus:outline-none`}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                />}
                            </div>
                        ))}
                    </form>
                    <div className="relative my-6 text-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                    </div>

                    <p className="text-sm text-center text-gray-600 mt-10">
                        Already have an account? <Link to="/signIn" className="text-green-600 hover:underline">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
