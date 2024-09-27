"use client";

import { SignedIn } from "@clerk/nextjs";
import SideNav from "./_components/SideNav";



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SignedIn>
            <div>
                <div className="md:w-64 fixed">
                    <SideNav />
                </div>
                <div className="md:ml-64">

                    {children}

                </div>
            </div>
        </SignedIn>
    );
}