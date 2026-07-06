import React from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <Link href="/admission" data-testid="btn-floating-apply">
        <div className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105 cursor-pointer">
          Apply Now
        </div>
      </Link>
      <a
        href="https://wa.me/918023456789"
        target="_blank"
        rel="noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5d] transition-all hover:scale-110"
        data-testid="btn-floating-whatsapp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
