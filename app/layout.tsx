import StarBackground from "@/components/stars/stars";
import "./globals.scss";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Chad Rossouw Portfolio",
    description: "Portfolio Website for Chad Rossouw",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <StarBackground /> */}
                <Navbar />
                <div className="wrapper">{children}</div>
            </body>
        </html>
    );
}
