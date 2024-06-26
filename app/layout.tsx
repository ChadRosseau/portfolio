import StarBackground from "@/components/stars/stars";
import "./globals.scss";
import { Inter, Varela_Round } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const varelaRound = Varela_Round({ weight: "400", variable: '--font-varela-round', subsets: ["latin"] });

export const metadata = {
  title: "Chad Rossouw",
  description: "Portfolio Website for Chad Rossouw",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
      <body className={clsx(varelaRound.variable, inter.variable, "font-round")}>
        {/* <StarBackground /> */}
        <Navbar />
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
