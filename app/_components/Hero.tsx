import React from "react";
import { SignInButton } from "@clerk/nextjs";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen items-center justify-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-8 text-4xl font-extrabold text-white sm:text-6xl">
            Forms Made Easy,{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Data Done Right
              </span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 transform -skew-x-12"></span>
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-xl text-gray-300 leading-relaxed animate-fade-in-up">
            Design and share interactive forms with ease, gather real-time data, and manage all your data efficiently in one place.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <SignInButton>
              <a
                className="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-500"
                href="#"
              >
                <span className="absolute -end-full transition-all group-hover:end-4">
                  <svg
                    className="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:me-4">
                  Create Forms
                </span>
              </a>
            </SignInButton>

            <a
              className="group relative inline-flex items-center overflow-hidden rounded border border-blue-600 px-8 py-3 text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              href="#"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4">
                Learn More
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}