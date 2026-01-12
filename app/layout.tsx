import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Background from "@/components/layout/background";

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
          <Background />
          <Header />
          <main className="grow pt-18">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
