import React from "react";
import { Link } from "wouter";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold font-serif">Excellence PU College</div>
                <div className="text-xs text-primary-foreground/70">Excellence in Education Since 1998</div>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 mb-4 max-w-xs">
              Empowering students with quality education in Science, Commerce, and Arts. Building the leaders of tomorrow.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="/facilities" className="hover:text-white transition-colors">Facilities</Link></li>
              <li><Link href="/faculty" className="hover:text-white transition-colors">Faculty</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/achievements" className="hover:text-white transition-colors">Achievements</Link></li>
              <li><Link href="/admission" className="hover:text-white transition-colors">Admissions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-white" />
                <span>MG Road, Bengaluru, Karnataka 560001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-white" />
                <span>+91 80 2345 6789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-white" />
                <span>admissions@greenvalley.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Excellence PU College. All rights reserved.</p>
          <p className="text-xs">Affiliated to Karnataka Pre-University Education Board</p>
        </div>
      </div>
    </footer>
  );
}
