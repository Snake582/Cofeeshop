import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./components/CartItem";
import Navbar from "./components/Navbar/page";

export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "A simple coffee shop website built with Next.js and TypeScript.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>

      <body className="bg-gradient-to-br from-white to-black">
          <CartProvider>
          <Navbar />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
