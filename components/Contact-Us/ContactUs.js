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
import toast from "react-hot-toast";
import Link from "next/link";
const ContactForm = () => {
  const contactRef = useRef([]);
  useGsap(contactRef, {
    stagger: true,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const loading = toast.loading("Sending Mail");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      reset();
      toast.dismiss(loading);
      toast.success(
        "Thank you for contacting us! We'll get back to you shortly."
      );
    } else {
      toast.dismiss(loading);
      toast.error("Failed to send email.");
    }
  };

  return (
    <>
      <div className="relative min-h-[75vh] md:min-h-[90vh] bg-[url(../public/Images/home-banner-mobile-bg.png)]  md:bg-[url(../public/Images/contact_img.png)] bg-cover bg-center  flex pt-20 md:pt-0 items-end justify-start overflow-hidden">
        {/* <Image
          src="/Images/contact_img.png"
          height={400}
          width={1440}
          alt="banner"
          className="w-full"
        /> */}
        {/* <div className="absolute bottom-0 h-24 sm:h-36 lg:h-64 w-full bg-gradient-to-t from-black to-transparent hidden md:flex justify-center items-center flex-col">
          <h2 className="hidden md:inline text-2xl lg:text-4xl font-gelasio text-white font-normal lg:leading-[140%]">
            Begin Your Journey with Hercules — Precision Crafted for You.
          </h2> 
        </div> */}
        <h2
          className="hidden md:flex text-2xl leading-[140%] md:text-4xl text-center font-gelasio text-white font-normal items-center justify-center w-full md:leading-[140%] px-5 md:px-0 h-64 bg-gradient-to-t from-black to-transparent"
          ref={(el) => (contactRef.current[0] = el)}
        >
          Begin Your Journey with Hercules — Precision Crafted for You.
        </h2>
        <div className="w-full md:w-1/2 flex md:hidden flex-col justify-center items-center md:items-start ps-0 md:ps-20">
          <h2
            className="text-2xl leading-[140%] md:text-4xl text-center md:text-left font-gelasio text-[#111] font-normal w-full lg:max-w-sm md:leading-[140%] px-5 md:px-0"
            ref={(el) => (contactRef.current[1] = el)}
          >
            Begin Your Journey with Hercules — Precision Crafted for You.
          </h2>
          <Image
            ref={(el) => (contactRef.current[2] = el)}
            src="/Images/contact_sec_watch.png"
            alt="Luxury Watch"
            width={799}
            height={586}
            priority
            className="object-contain h-full w-fit inline md:hidden mt-10"
          />
        </div>
      </div>

      <div className=" bg-white ">
        <div className="bg-white font-urbanist max-w-[1440px] mx-auto text-[#292321] py-[120px] px-5 sm:px-10 md:px-[60px] lg:px-[120px]">
          <div
            className="flex flex-col lg:flex-row justify-between gap-16"
            ref={(el) => (contactRef.current[3] = el)}
          >
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

            <div className="flex-1">
              <h2 className="text-[28px] font-semibold mb-10 text-[#292321]">
                Let Us Contact You
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-[13px] font-medium tracking-[1px] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Write your full name"
                    className="w-full border border-[#EDEAE7] p-4 text-[14px] font-light tracking-[0.6px] text-[#808080]"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[13px] font-medium tracking-[1px] mb-2">
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
                    className="w-full border border-[#EDEAE7] p-4 text-[14px] font-light tracking-[0.6px] text-[#808080]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[13px] font-medium tracking-[1px] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    placeholder="Write subject"
                    className="w-full border border-[#EDEAE7] p-4 text-[14px] font-light tracking-[0.6px] text-[#808080]"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[13px] font-medium tracking-[1px] mb-2">
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
        <div className="w-full overflow-hidden">
          <Image
            ref={(el) => (contactRef.current[4] = el)}
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
