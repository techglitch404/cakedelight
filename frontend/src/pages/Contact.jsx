import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Banner banner_txt="Contact us" />
      <div className="py-20 px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section: Form and Info Text */}
          <div>
            <h2 className="text-2xl font-semibold">Drop Us a Line</h2>
            <p className="text-gray-600 my-4">
              Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
              erat dignissim. Sed quis rutrum tellus, sit amet viverra felis.
              Cras sagittis sem sit amet urna feugiat rutrum.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name :</label>
                <input
                  type="text"
                  className="w-full border rounded-md py-2 px-3"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email :</label>
                <input
                  type="email"
                  className="w-full border rounded-md py-2 px-3"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message :</label>
                <textarea
                  className="w-full border rounded-md py-2 px-3 h-28"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-600 text-white py-2 px-6 rounded-md hover:bg-yellow-700"
              >
                Send Now
              </button>
            </form>
          </div>

          {/* Right Section: Map and Contact Details */}
          <div className="space-y-6">
            <div className="w-full h-64">
              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196458588765!2d-122.47261908468137!3d37.79837327975673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581f5c3b5d1c5%3A0x9e7c2f72b1c0b2ef!2sStorey%20Ave!5e0!3m2!1sen!2sus!4v1679351247806!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
              <div className="mr-10">
                <p className="py-4 flex items-center justify-between">
                  <span className="font-bold">Address :</span> Avenue 234
                </p>
                <p className="py-4 flex items-center justify-between">
                  <span className="font-bold">City :</span> New York - US
                </p>
                <p className="py-4 flex items-center justify-between">
                  <span className="font-bold">Check-In :</span> 15:00 pm
                </p>
              </div>
              <div>
                <p className="py-4 flex items-center justify-between">
                  <span className="font-bold">Phone :</span> 00 837920234
                </p>
                <p className="py-4 flex items-center justify-between">
                  <span className="font-bold">Email :</span> info@sweet.com
                </p>
                <p className="py-4 flex items-center justify-between">
                  <span className="font-bold">Check-Out :</span> 11:00 am
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-center">Available at 10am – 8pm</p>
            <h3 className="text-3xl font-semibold text-center text-gray-800">
              +91-8765436798
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
