import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"

import "../globals.css";
import Navbar from "@/components/hero/navbar";
import { Toaster } from "react-hot-toast";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (

        <html lang="en">
            <body>
                <Toaster position="bottom-right" />
                <Navbar />
                <div className="pt-20 p-8 ">
                    {children}
                </div>
            </body>
        </html>

    );
}
