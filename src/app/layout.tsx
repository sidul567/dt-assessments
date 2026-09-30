import type { Metadata } from "next";
import { poppins, satoshi } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Get access to hundreds of courses available on ByteSpace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
