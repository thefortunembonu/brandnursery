import type { Metadata } from "next";
import {Sora} from "next/font/google";
import "./globals.css";
import Footer from "@/sections/footer";
import Navcontainer from "@/components/Navcontainer";

const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brandnursery",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${soraSans.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       <Navcontainer/>
        <main className="flex-1">
    {children}
        </main>
    
       <Footer/>
        </body>
    </html>
  );
}
