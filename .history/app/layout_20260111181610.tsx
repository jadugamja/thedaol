import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "더다올디앤씨",
  description: "",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable} ${montserrat.variable}`}>
      <body
        className={`bg-background-light font-body text-text-main antialiased overflow-x-hidden selection:bg-primary/20 selection:text-secondary`}
      >
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-[4.5rem]">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
