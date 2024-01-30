import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/topbar";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pinda Kombucha",
  description: "Destapa tu bienestar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:image"
          content="https://i0.wp.com/pindakombucha.cl/wp-content/uploads/2022/12/Pinda-Kombucha-Brand-e1683471453267.png?fit=607%2C766&ssl=1"
        />
      </head>

      <body>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
