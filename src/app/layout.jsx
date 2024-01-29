import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/topbar";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YAGÁN",
  description: "Hotel Restobar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://app-valdi.s3.amazonaws.com/yagan/logotipo_Mesa+de+trabajo+1+copia+5.png" />
      </head>
      
      <body>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
