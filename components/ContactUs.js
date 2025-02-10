"use client";
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className=" bg-black">
        <div className=" max-w-[1440px] mx-auto h-[650px] flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/5 py-10 sm:py-0">
            <img
              src="/Images/watch7.png"
              alt="Luxury Watch"
              className=" w-full h-full object-contain"
            />
          </div>
          <div className=" w-full sm:w-3/5 px-5 sm:px-10 h-full flex items-center justify-center text-white">
            <div className=" flex flex-col gap-1">
              <p>Have a question about TAG Heuer products or services?</p>
              <p>We're here to help!</p>
              <button className="flex items-center mt-5 text-white font-semibold hover:underline">
                <span className="mr-1">&#8250;</span> EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-[1440px] mx-auto bg-white p-5 sm:px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-black mb-4 border-b-2 border-black inline-block">
            GET IN TOUCH
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-black">✉️</span>
              <span>hello@herculeswatch.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-black">📞</span>
              <span>+44-796-960-6568</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-black mt-1">📍</span>
              <address className="not-italic">
                Hercules Watch Co Ltd,
                <br />
                Hyde House, The Hyde,
                <br />
                Edgware Road, London, NW9 6LH
              </address>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <h2 className="text-xl font-bold mb-4 border-b-2 border-black text-black inline-block">
            LET US CONTACT YOU
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm text-black font-semibold mb-1">
                YOUR NAME <span className=" text-red-700 text-lg">*</span>
              </label>
              <input
                type="text"
                placeholder="Write your full name"
                className="w-full border-b-2 border-gray-300 focus:border-black outline-none p-2"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm text-black font-semibold mb-1">
                YOUR EMAIL <span className=" text-red-700 text-lg">*</span>
              </label>
              <input
                type="email"
                placeholder="Write your email address"
                className="w-full border-b-2 border-gray-300 focus:border-black outline-none p-2"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm text-black font-semibold mb-1">
                SUBJECT <span className=" text-red-700 text-lg">*</span>
              </label>
              <input
                type="text"
                placeholder="Write subject"
                className="w-full border-b-2 border-gray-300 focus:border-black outline-none p-2"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm text-black font-semibold mb-1">
                MESSAGE <span className=" text-red-700 text-lg">*</span>
              </label>
              <textarea
                placeholder="Type your message here"
                className="w-full border-2 border-gray-300 focus:border-black outline-none p-2 h-32 resize-none"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300 flex items-center gap-2"
            >
              SEND MY MESSAGE <span>&#8250;</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
