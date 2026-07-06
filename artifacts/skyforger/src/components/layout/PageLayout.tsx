import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}