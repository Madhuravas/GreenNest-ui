import { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Input from '../../utils/Input';

const MemoizedInput = memo(Input);
const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordFieldType, setPasswordFieldType] = useState("password");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setPasswordFieldType(showPassword ? "password" : "text");
    };


    return (
        <div className="flex items-center justify-center bg-[#f7f8f7] p-8">
            <div>
                <div className="text-center mb-4">
                    <h1 className="text-2xl font-semibold text-[#4b682a] font-serif">GreenNest Naturals</h1>
                    <p className="text-gray-600 mt-1">Welcome back! Please sign in to your account.</p>
                </div>
                <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-1 font-serif">Sign In</h2>
                    <p className="text-sm text-gray-600 mb-5">Enter your email and password to access your account</p>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <MemoizedInput
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="relative mt-1 w-full border border-gray-300 rounded-lg flex items-center">
                                <MemoizedInput
                                    type={passwordFieldType}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 pr-10 rounded-lg border-none focus:outline-none bg-transparent"
                                />
                                <div className="absolute right-3 cursor-pointer text-gray-500">
                                    {showPassword ? (
                                        <EyeOff onClick={togglePasswordVisibility} />
                                    ) : (
                                        <Eye onClick={togglePasswordVisibility} />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="form-checkbox" />
                                Remember me
                            </label>
                            <a href="#" className="text-green-600 hover:underline">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-xl transition duration-150"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="relative my-6 text-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                    </div>

                    <p className="text-sm text-center text-gray-600 mt-10">
                        Don’t have an account? <Link to="/signUp" className="text-green-600 hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;