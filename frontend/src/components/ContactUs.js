import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us-container p-6 md:p-12 bg-gray-50 text-gray-800 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-6">Have questions or need help? We’d love to hear from you!</p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="Your name" />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="w-full border p-2 rounded" placeholder="you@example.com" />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea className="w-full border p-2 rounded h-28" placeholder="Your message..."></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
