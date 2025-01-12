import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FrameProvider from "./frame-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bec.watch",
  description: "a log of all the bacon egg and cheese sandwiches i eat",
  openGraph: {
    title: "bec.watch",
    description: "a log of all the bacon egg and cheese sandwiches i eat",
    images: ['https://i.imgur.com/p6IuC48.png']
  },
  other: {
    'fc:frame': JSON.stringify(
      {
        version: "next",
        imageUrl: 'https://i.imgur.com/p6IuC48.png',
        button: {
          title: 'view bec.watch',
          action: {
            type: "launch_frame",
            name: "bec.watch",
            url: 'https://bec.watch',
            splashImageUrl: 'https://i.imgur.com/ylSBHuG.png',
            splashBackgroundColor: "#000000",
          },
        },
      }
    )
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FrameProvider>
          {children}
        </FrameProvider>
      </body>
    </html>
  );
}