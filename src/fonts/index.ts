import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "./satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
