"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import useGsap from "@/useGsap";
import Image from "next/image";
import Button from "../Button";
const ContactForm = () => {
  const contactRef = useRef([]);
  const getInTouchRef = useRef([]);
  useGsap(getInTouchRef, {
    stagger: true,
  });
  useGsap(contactRef);
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
            <Image
              ref={(el) => (contactRef.current[0] = el)}
              src="/Images/watch7.png"
              alt="Luxury Watch"
              width={500}
              height={500}
              className=" w-full h-full object-contain"
            />
          </div>
          <div className=" w-full sm:w-3/5 px-5 sm:px-10 h-full flex items-center justify-center text-white">
            <div className=" flex flex-col gap-1">
              <p ref={(el) => (contactRef.current[1] = el)}>
                Have a question about TAG Heuer products or services?
              </p>
              <p ref={(el) => (contactRef.current[2] = el)}>
                We're here to help!
              </p>
              <button
                ref={(el) => (contactRef.current[3] = el)}
                className="flex items-center mt-5 text-white font-semibold hover:underline"
              >
                <span className="mr-1">&#8250;</span> EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white">
        <div className=" max-w-[1440px] mx-auto bg-white p-5 sm:px-10 py-[120px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Contact Info */}
          <div>
            <h2
              className="text-2xl font-medium text-gold tracking-[8%] mb-6  inline-block"
              ref={(el) => (getInTouchRef.current[0] = el)}
            >
              <span className="border-b-2 border-gold">GET IN</span> TOUCH
            </h2>
            <div className="space-y-4 text-black text-base font-medium tracking-[8%]">
              <div
                className="flex items-center gap-3"
                ref={(el) => (getInTouchRef.current[1] = el)}
              >
                <span className="text-black text-xl">
                  <MdOutlineEmail />
                </span>
                <span>hello@herculeswatch.com</span>
              </div>
              <div
                className="flex items-center gap-3"
                ref={(el) => (getInTouchRef.current[2] = el)}
              >
                <span className="text-black text-xl">
                  <IoCallOutline />
                </span>
                <span>+44-796-960-6568</span>
              </div>
              <div
                className="flex items-start gap-3"
                ref={(el) => (getInTouchRef.current[3] = el)}
              >
                <span className="text-black text-xl">
                  <HiOutlineLocationMarker />
                </span>
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
          <div ref={(el) => (contactRef.current[4] = el)}>
            <h2 className="text-2xl font-medium text-gold tracking-[8%] mb-6  inline-block">
              <span className="border-b-2 border-gold">LET US</span> CONTACT
              YOU
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-[13px] text-black tracking-[8%] font-medium mb-1">
                  YOUR NAME <span className=" text-red-700 text-lg">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Write your full name"
                  className="w-full border-b-[2px] border-gray-300 focus:border-black outline-none p-2 text-base leading-8 font-light text-[#ABABAB]"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[13px] text-black tracking-[8%] font-medium mb-1">
                  YOUR EMAIL <span className=" text-red-700 text-lg">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Write your email address"
                  className="w-full border-b-[2px] border-gray-300 focus:border-black outline-none p-2 text-base leading-8 font-light text-[#ABABAB]"
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
                <label className="block text-[13px] text-black tracking-[8%] font-medium mb-1">
                  SUBJECT <span className=" text-red-700 text-lg">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Write subject"
                  className="w-full border-b-[2px] border-gray-300 focus:border-black outline-none p-2 text-base leading-8 font-light text-[#ABABAB]"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[13px] text-black tracking-[8%] font-medium mb-1">
                  MESSAGE <span className=" text-red-700 text-lg">*</span>
                </label>
                <textarea
                  placeholder="Type your message here"
                  className="w-full border-[2px] rounded-sm border-gray-300 focus:border-black outline-none p-2 h-32 resize-none text-base leading-8 font-light text-[#ABABAB]"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                text={"SEND MY MESSAGE"}
                className={"mt-6"}
                color={"black"}
                type="submit"
              />
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
