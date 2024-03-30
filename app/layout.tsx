"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "@/components/Providers";

import { usePathname } from "next/navigation";
import { title } from "process";
import { useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// export const metadata = {
//   title: "Am Cheachamroeun",
//   description: "This is my portfolio website",
// };




export default function RootLayout({ children }: any) {

  useEffect(() => {
    document.title = "Am Cheachamroeun";
  
  })

  const currentPath = usePathname();


  const noNavbarPaths = ["/github/view"];

  const noNavbarRegex = /^\/project\/[^\/]+$/;

  const isExactNoNavbarPath = noNavbarPaths.includes(currentPath);

  const isRegexNoNavbarPath = noNavbarRegex.test(currentPath);

  const showNavbar = !(isExactNoNavbarPath || isRegexNoNavbarPath);

  return (
    <html lang="en">
      <body
        className={`bg-bg text-textColor ${poppins.className}`}
        suppressHydrationWarning={true}
      >
        <Providers>
          {showNavbar && <Navbar />}
          {children}
        </Providers>
      </body>
    </html>
  );
}
