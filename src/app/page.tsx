'use client';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1 space-y-20">
        <Content />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}