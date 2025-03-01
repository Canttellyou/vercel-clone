"use client";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <div className="min-h-screen bg-vercel-black w-full antialiased">
      <NavBar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
