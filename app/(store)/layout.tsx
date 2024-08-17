
import Navbar from "@/components/hero/navbar";
import { Toaster } from "react-hot-toast";

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
