import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "더다올디앤씨",
  description: "",
};

const montserrat = Montserrat({ subsets: ["latin"] });

const pretendard = localFont({
  src: "../fonts//PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.className} ${montserrat.className} bg-background-light font-body text-text-main antialiased overflow-x-hidden selection:bg-primary/20 selection:text-secondary`}
      >
        {children}
      </body>
    </html>
  );
}
