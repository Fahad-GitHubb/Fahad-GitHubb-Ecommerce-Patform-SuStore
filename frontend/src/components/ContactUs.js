import React, { useState } from 'react';
import { Mail, User, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    }
  };
  
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-12 rounded-xl shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column with contact info */}
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-8">Have questions or need assistance? Our team is ready to help you!</p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <Mail className="text-indigo-600 mt-1" size={20} />
              <div>
                <h3 className="font-medium text-gray-900">Email Us</h3>
                <p className="text-gray-600">support@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <MessageSquare className="text-indigo-600 mt-1" size={20} />
              <div>
                <h3 className="font-medium text-gray-900">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right column with form */}
        <div className="md:w-2/3 bg-white rounded-lg shadow-md p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full py-12">
              <CheckCircle size={64} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Thank you!</h3>
              <p className="text-gray-600 text-center mt-2">Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`pl-10 w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`pl-10 w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition`}
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject (Optional)</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 h-32 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition`}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                onClick={handleSubmit}
                className="mt-2 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center font-medium"
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;