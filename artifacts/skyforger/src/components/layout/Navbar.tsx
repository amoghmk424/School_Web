import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/facilities", label: "Facilities" },
    { href: "/faculty", label: "Faculty" },
    { href: "/gallery", label: "Gallery" },
    { href: "/achievements", label: "Achievements" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-primary font-serif">Excellence</span>
              <span className="text-xs text-muted-foreground -mt-0.5 font-sans">PU College</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/admission" data-testid="link-nav-apply">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5">
                Apply Now
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="btn-mobile-menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-sm font-medium ${
                  location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/admission" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-2 bg-primary hover:bg-primary/90">Apply Now</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
