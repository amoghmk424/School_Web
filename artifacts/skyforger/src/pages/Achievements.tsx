import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal, BookOpen, Users } from "lucide-react";

const toppers = [
  { year: "2023–24", name: "Sneha Iyer", stream: "Science (PCMB)", percentage: "99.2%", rank: "State Rank 3" },
  { year: "2023–24", name: "Arjun Mehta", stream: "Commerce (CEBA)", percentage: "98.8%", rank: "District Rank 1" },
  { year: "2022–23", name: "Priya Krishnaswamy", stream: "Science (PCMB)", percentage: "98.6%", rank: "State Rank 7" },
  { year: "2022–23", name: "Rohan Desai", stream: "Arts (HEPS)", percentage: "97.4%", rank: "District Rank 2" },
  { year: "2021–22", name: "Meghana Nair", stream: "Science (PCMC)", percentage: "99.0%", rank: "State Rank 4" },
  { year: "2021–22", name: "Karthik Rao", stream: "Commerce (SEBA)", percentage: "98.2%", rank: "District Rank 1" },
];

const achievements = [
  {
    icon: Trophy,
    category: "Board Results",
    items: [
      "100% pass rate for 8 consecutive years (2016–2024)",
      "3 state toppers in Science stream in last 5 years",
      "Over 500 students scored above 90% in 2023–24",
    ],
  },
  {
    icon: BookOpen,
    category: "Competitive Exams",
    items: [
      "45 students qualified JEE Mains 2024",
      "28 students cleared NEET 2024",
      "12 students selected for Karnataka CET merit list",
    ],
  },
  {
    icon: Medal,
    category: "Sports Achievements",
    items: [
      "Bengaluru District Champions — Basketball (Boys) 2023",
      "State Gold — 100m Sprint (Girls) 2024",
      "Runners Up — Zonal Cricket Tournament 2023",
    ],
  },
  {
    icon: Star,
    category: "Cultural & Arts",
    items: [
      "Best College Award — Youth Fest Bengaluru 2024",
      "1st Place — Inter-College Debate Championship 2023",
      "National finalist — Science Olympiad 2024",
    ],
  },
  {
    icon: Award,
    category: "Institutional Awards",
    items: [
      "NAAC Grade 'A' Institution — Karnataka Board",
      "Best Infrastructure Award — Education Summit 2023",
      "ISO 9001:2015 Quality Certification",
    ],
  },
  {
    icon: Users,
    category: "Alumni Success",
    items: [
      "10,000+ alumni across 30+ countries",
      "Alumni serving as IAS, IPS, and IFS officers",
      "Alumni CEOs at Fortune 500 companies",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function Achievements() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary-foreground/70 font-semibold tracking-widest uppercase text-sm mb-3">Our Pride</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Achievements & Accolades</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              25 years of consistent excellence — in academics, sports, culture, and character.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: Trophy, value: "8 Years", label: "100% Pass Rate" },
              { icon: Star, value: "500+", label: "Students Above 90%" },
              { icon: Medal, value: "45+", label: "State / District Toppers" },
              { icon: Award, value: "10,000+", label: "Alumni Worldwide" },
            ].map((stat, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-xl p-5 border border-border">
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3">Board Exam Toppers</h2>
            <p className="text-muted-foreground">Our brightest students who made us proud</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Year</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Student Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Stream</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Score</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Achievement</th>
                </tr>
              </thead>
              <tbody>
                {toppers.map((topper, i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-white" : "bg-muted/30"}`}>
                    <td className="px-6 py-4 text-sm font-semibold text-primary">{topper.year}</td>
                    <td className="px-6 py-4 text-sm font-medium">{topper.name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{topper.stream}</td>
                    <td className="px-6 py-4 text-sm font-bold text-foreground">{topper.percentage}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-0.5 font-semibold">{topper.rank}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3">Awards & Recognition</h2>
            <p className="text-muted-foreground">Excellence beyond the classroom</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((ach, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-border p-7 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <ach.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-4">{ach.category}</h3>
                <ul className="space-y-2">
                  {ach.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
