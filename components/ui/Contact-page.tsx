import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <section
      className="w-screen h-screen flex justify-center items-start text-center p-20"
      style={{
        background: 'linear-gradient(to bottom, rgb(47, 13, 99) 5%, #27272a 20%)',
      }}
    >
      <div className="relative z-10 w-full h-full flex">
        {/* Left side - White box with form */}
        <div className="w-1/2 flex items-center justify-center px-4">
          <div className="w-full h-[80vh] bg-white rounded-lg flex flex-col items-center justify-center p-8 shadow-black">
            <h2 className="text-4xl font-bold mb-4 underline">Contact Us</h2>
            <form className="w-full max-w-md">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right side - Text */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl text-white font-extrabold leading-tight mb-6 underline decoration-white">
            Let us know your opinion
          </h1>
          <p className="text-lg mb-8 max-w-lg mx-auto text-white">
            Your feedback helps us improve. Fill out the form to share your thoughts!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
