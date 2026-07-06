import React from "react";
import { motion } from "framer-motion";
import { Microscope, BookOpen, Dumbbell, Monitor, Mic2, UtensilsCrossed, Bus, Wifi } from "lucide-react";

const facilities = [
  {
    icon: Microscope,
    title: "Science Laboratories",
    description: "Three fully equipped labs — Physics, Chemistry, and Biology — with the latest apparatus and safety systems. Students perform 40+ experiments per year under expert supervision.",
    highlights: ["Modern instruments", "Safety certified", "Air-conditioned", "40+ experiments"],
  },
  {
    icon: BookOpen,
    title: "Digital Library",
    description: "A 5,000 sq.ft. library housing over 15,000 reference books, journals, and e-resources. Quiet study zones and a dedicated digital section with internet-enabled computers.",
    highlights: ["15,000+ books", "E-resource access", "Quiet study zones", "Extended hours"],
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description: "Sprawling outdoor grounds for cricket, football, basketball, and athletics. Indoor facilities for chess, table tennis, and carrom. Professional sports coaches on staff.",
    highlights: ["Cricket ground", "Basketball court", "Athletics track", "Indoor games"],
  },
  {
    icon: Monitor,
    title: "Computer Centre",
    description: "120-seat computer lab with high-end systems running the latest software. 100 Mbps dedicated internet, professional programming tools, and certified IT instructors.",
    highlights: ["120 systems", "100 Mbps internet", "Latest software", "Expert instructors"],
  },
  {
    icon: Mic2,
    title: "Auditorium & Stage",
    description: "A 600-seat air-conditioned auditorium for cultural events, seminars, guest lectures, and annual day celebrations. Professional sound and lighting systems.",
    highlights: ["600 seat capacity", "Pro AV systems", "AC auditorium", "Backstage rooms"],
  },
  {
    icon: UtensilsCrossed,
    title: "Cafeteria",
    description: "A clean, hygienic canteen serving wholesome, nutritious meals and snacks throughout the day. Vegetarian and non-vegetarian options at affordable prices.",
    highlights: ["Hygienic kitchen", "Balanced meals", "Affordable pricing", "Spacious seating"],
  },
  {
    icon: Bus,
    title: "Transport",
    description: "A fleet of 12 GPS-enabled school buses covering 30+ routes across Bengaluru. Real-time tracking available to parents. Annual passes at subsidised rates.",
    highlights: ["12 buses", "30+ routes", "GPS tracking", "Parent app"],
  },
  {
    icon: Wifi,
    title: "Smart Classrooms",
    description: "All 24 classrooms are equipped with interactive smart boards, HD projectors, and wireless connectivity — making every lesson an engaging multimedia experience.",
    highlights: ["24 smart rooms", "Interactive boards", "HD projectors", "Wireless access"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function Facilities() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary-foreground/70 font-semibold tracking-widest uppercase text-sm mb-3">Campus Infrastructure</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">World-Class Facilities</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Every space on our campus has been thoughtfully designed to support learning, growth, and well-being.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="group border border-border rounded-2xl p-8 hover:border-primary/40 hover:shadow-md transition-all">
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <facility.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{facility.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {facility.highlights.map((h) => (
                        <span key={h} className="text-xs bg-muted text-muted-foreground rounded-full px-3 py-1 font-medium">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-muted/40 border-t">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5 Acres", label: "Campus Area" },
              { value: "24", label: "Smart Classrooms" },
              { value: "3", label: "Science Labs" },
              { value: "15,000+", label: "Library Books" },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
