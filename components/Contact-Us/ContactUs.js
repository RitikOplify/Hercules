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
      <Image
        src="/Images/contact_img.png"
        height={400}
        width={1440}
        alt="banner"
        className="w-full"
      />
      <div className=" bg-white ">
        <div className="bg-white font-urbanist max-w-[1440px] mx-auto text-[#292321] py-[120px] px-5 sm:px-10 md:px-[60px] lg:px-[120px]">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            {/* Left Side - Info */}
            <div className="flex-1">
              <p className="text-[24px] font-regular leading-[140%] tracking-[0.6px] mb-20 text-[#292321]">
                Have a question about <br /> Hercules products or services?
                <span className="mt-6 block">We're here to help!</span>
              </p>

              <h2 className="text-[28px] font-semibold mb-6 text-[#292321]">
                Get In Touch
              </h2>

              <div className="space-y-8 text-[#292321] text-base font-medium">
                <div className="flex items-center gap-3">
                  <span className="text-black text-xl">
                    <MdOutlineEmail />
                  </span>
                  <span>hello@herculeswatch.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-black text-xl">
                    <IoCallOutline />
                  </span>
                  <span>+44-796-960-6568</span>
                </div>
                <div className="flex items-start gap-3">
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

            {/* Right Side - Form */}
            <div className="flex-1">
              <h2 className="text-[32px] font-semibold mb-10">
                Let Us Contact You
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-[13px] font-medium tracking-[1px] mb-3">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Write your full name"
                    className="w-full border border-[#EDEAE7] p-4 text-sm"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[13px] font-medium tracking-[1px] mb-3">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Write your email address"
                    className="w-full border border-[#EDEAE7] p-4 text-sm"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[13px] font-medium tracking-[1px] mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    placeholder="Write subject"
                    className="w-full border border-[#EDEAE7] p-4 text-sm"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[13px] font-medium tracking-[1px] mb-3">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    placeholder="Type your message here"
                    className="w-full border border-[#EDEAE7] p-4 text-[14px] font-light tracking-[0.6px] text-[#808080]"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="pt-9">
                  <Button
                    text={"Send My Message"}
                    type={"submit"}
                    className={" font-medium"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/Images/location.png"
            width={1440}
            height={300}
            alt="Map showing location"
            className="w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
