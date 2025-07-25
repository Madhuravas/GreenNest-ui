import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setFormData({ name: "", email: "", subject: "", message: "" });
            toast.success('Message sent successfully!', {
                description: 'We will get back to you as soon as possible.',
            });
            navigate('/')
        }
    };
    return (
        <div className="bg-[#fefcf6] rounded-xl px-6 py-12 font-sans flex items-center justify-center flex-col">
            <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-2">Contact Us</h2>
            <p className="text-gray-600 font-semibold text-center mb-6 text-xl">Have questions about our products or services? We'd love to hear from you!</p>
            <div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className="md:col-span-2 bg-white rounded-2xl border border-gray-300 p-6">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-semibold text-gray-700 mb-1">Your name</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-green-200"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-green-200"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                        </div>
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">Subject</label>
                            <input
                                name="subject"
                                type="text"
                                placeholder="What is your message about?"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-200"
                            />
                            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                        </div>
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">Message</label>
                            <textarea
                                name="message"
                                placeholder="Enter your message here"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full h-32 border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring focus:ring-green-200"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="bg-green-600 cursor-pointer text-lg hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2"
                        >
                            <Send />
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-300 p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-green-100 p-4 rounded-full">
                                <MapPin className='text-green-600' />
                            </div>
                            <div className='text-gray-600 text-lg'>
                                <h3 className="font-semibold text-lg">Visit Us</h3>
                                <p>123 Farm Road,<br />Organic Valley, OV 54321</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-300 p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-green-100 p-4 rounded-full">
                                <Mail className='text-green-600' />
                            </div>
                            <div className='text-gray-600 text-lg'>
                                <h3 className="font-semibold text-lg">Email Us</h3>
                                <p>info@greennest-naturals.com<br />support@greennest-naturals.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-300 p-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-green-100 p-4 rounded-full">
                                <Phone className='text-green-600' />
                            </div>
                            <div className='text-gray-600 text-lg'>
                                <h3 className="font-semibold">Call Us</h3>
                                <p>(555) 123-4567<br />Monday-Friday: 9am-5pm<br />Saturday: 10am-2pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
