import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Praveen | Web Development, Landing Pages, SaaS & Chatbots",
  description:
    "Unlock powerful web solutions with expert development services. Get high-converting landing pages, interactive chatbots, and scalable SaaS applications tailored for your business.",
  keywords: [
    "web development",
    "landing pages",
    "SaaS solutions",
    "chatbot development",
    "Next.js websites",
    "custom web applications",
    "full-stack development",
  ].join(", "),
  openGraph: {
    title: "Praveen | Web Development, Landing Pages, SaaS & Chatbots",
    description:
      "Unlock powerful web solutions with expert development services. Get high-converting landing pages, interactive chatbots, and scalable SaaS applications tailored for your business.",
    url: "https://krishnapraveen.tech",
    type: "website",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Praveen's Web Development Services",
      },
    ],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
