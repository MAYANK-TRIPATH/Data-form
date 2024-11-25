import React from "react";
import { SignInButton } from "@clerk/nextjs";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-60"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gray-700 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gray-800 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen items-center justify-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-8 text-4xl font-extrabold text-white sm:text-6xl">
            Forms Made Easy  <br></br> 
            <span>
              <span className="relative z-10 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 bg-clip-text text-transparent">
                Data Done Right
              </span>
              {/* <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 transform -skew-x-12"></span> */}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-xl text-gray-400 leading-relaxed">
            Design and share interactive forms with ease, gather real-time data, and manage all your data efficiently in one place.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <SignInButton>
              <a
                className="group relative inline-flex items-center overflow-hidden rounded bg-gray-700 px-8 py-3 text-white focus:outline-none focus:ring active:bg-gray-600"
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
              className="group relative inline-flex items-center overflow-hidden rounded border border-gray-500 px-8 py-3 text-gray-300 focus:outline-none focus:ring active:text-gray-400"
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

              <span className="text-sm font-medium transition-all group-hover:me-4 text-white rounded-lg">
                Learn More
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
