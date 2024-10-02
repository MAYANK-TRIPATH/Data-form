"use client";

import React from 'react';
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
    const { user, isSignedIn } = useUser();

    return (
        <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-lg">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <span className="text-3xl font-bold  text-white ">
                                100x Forms
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        {isSignedIn ? (
                            <>
                                <Link href="/dashboard">
                                    <Button className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out">
                                        <span>Dashboard</span>
                                        <svg 
                                            className="ml-2 -mr-0.5 h-4 w-4" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 20 20" 
                                            fill="currentColor"
                                        >
                                            <path 
                                                fillRule="evenodd" 
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                                clipRule="evenodd" 
                                            />
                                        </svg>
                                    </Button>
                                </Link>
                                <UserButton 
                                    appearance={{
                                        elements: {
                                            avatarBox: "w-10 h-10 rounded-full ring-2 ring-gray-500"
                                        }
                                    }}
                                />
                            </>
                        ) : (
                            <SignInButton>
                                <Button className="relative overflow-hidden inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out group">
                                    <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                                        <svg 
                                            className="h-5 w-5" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 20 20" 
                                            fill="currentColor"
                                        >
                                            <path 
                                                fillRule="evenodd" 
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                                clipRule="evenodd" 
                                            />
                                        </svg>
                                    </span>
                                    <span className="group-hover:pr-5 transition-all rounded-lg">Get Started</span>
                                </Button>
                            </SignInButton>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
