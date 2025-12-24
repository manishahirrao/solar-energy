import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingInquiryButton from "@/components/FloatingInquiryButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Procura Solar - Renewable Energy Solutions",
  description: "Leading renewable energy revolution with cutting-edge solar solutions for homes and businesses in India",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body
        className={`${poppins.variable} ${roboto.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
        <FloatingInquiryButton />
      </body>
    </html>
  );
}
