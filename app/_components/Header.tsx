"use client";

import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';



export default function Header() {

    const {user, isSignedIn} = useUser();

  return (
    <div className='p-4 shadow-sm bg-gray-900 text-white'>
    <div className='flex items-center justify-between'>
      <h1>100x forms</h1>
      {isSignedIn ? (
        <div className="flex items-center gap-5">
            <Link href={'/dashboard'}>
          <Button className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'
           variant="outline">Dashboard</Button>
           </Link>
          <UserButton />
        </div>
      ) : (
        <SignInButton>
        <Button className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'>
          Get started
        </Button>
        </SignInButton>
      )}
    </div>
  </div>
  )
}