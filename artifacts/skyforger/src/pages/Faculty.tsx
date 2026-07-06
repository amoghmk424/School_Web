import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";

const faculty = [
  { name: "Dr. R. K. Sharma", role: "Principal & Mathematics", qualification: "M.Sc., M.Ed., Ph.D.", experience: "28 yrs", initials: "RS" },
  { name: "Prof. Anitha Subramaniam", role: "Physics", qualification: "M.Sc. Physics, B.Ed.", experience: "19 yrs", initials: "AS" },
  { name: "Dr. Kavitha Rao", role: "Chemistry", qualification: "M.Sc., Ph.D. Chemistry", experience: "22 yrs", initials: "KR" },
  { name: "Mr. Deepak Nair", role: "Mathematics", qualification: "M.Sc. Maths, PGDM", experience: "15 yrs", initials: "DN" },
  { name: "Mrs. Priya Venkatesh", role: "Biology", qualification: "M.Sc. Zoology, B.Ed.", experience: "17 yrs", initials: "PV" },
  { name: "Mr. Suresh Kumar", role: "Computer Science", qualification: "M.Tech CSE, B.Ed.", experience: "12 yrs", initials: "SK" },
  { name: "Mrs. Lakshmi Prasad", role: "Economics", qualification: "M.A. Economics, B.Ed.", experience: "20 yrs", initials: "LP" },
  { name: "Mr. Rajesh Patel", role: "Accountancy", qualification: "M.Com, CA (Intermediate)", experience: "14 yrs", initials: "RP" },
  { name: "Dr. Shobha Iyer", role: "English", qualification: "M.A. English, Ph.D.", experience: "24 yrs", initials: "SI" },
  { name: "Mr. Harish Gowda", role: "History & Political Science", qualification: "M.A. History, M.Ed.", experience: "16 yrs", initials: "HG" },
  { name: "Mrs. Meena Krishnamurthy", role: "Business Studies", qualification: "MBA, B.Ed.", experience: "11 yrs", initials: "MK" },
  { name: "Mr. Arun Shetty", role: "Physical Education", qualification: "M.P.Ed, NIS Certified", experience: "13 yrs", initials: "AS2" },
];

const colors = [
  "bg-primary/10 text-primary",
  "bg-blue-100 text-blue-700",
  "bg-violet-100 text-violet-700",
  "bg-red-100 text-red-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45 } }),
};

export default function Faculty() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary-foreground/70 font-semibold tracking-widest uppercase text-sm mb-3">Our Team</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Faculty</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Our teachers are the heart of this college — experienced, passionate, and deeply invested in every student's success.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/40 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Award, value: "12+", label: "Expert Faculty" },
              { icon: BookOpen, value: "18 yrs", label: "Avg. Experience" },
              { icon: Award, value: "6", label: "PhD Holders" },
              { icon: BookOpen, value: "100%", label: "Post-Graduate Qualified" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-border">
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {faculty.map((member, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="group border border-border rounded-2xl p-6 text-center hover:border-primary/40 hover:shadow-md transition-all bg-white">
                <div className={`h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold font-serif ${colors[i % colors.length]}`}>
                  {member.initials.slice(0, 2)}
                </div>
                <h3 className="font-bold text-foreground mb-1 text-sm leading-tight">{member.name}</h3>
                <p className="text-xs text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-1">{member.qualification}</p>
                <span className="inline-block text-xs bg-muted text-muted-foreground rounded-full px-2.5 py-0.5 font-medium">{member.experience} experience</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-3">A Faculty You Can Trust</h2>
          <p className="text-muted-foreground leading-relaxed">
            Every teacher at our college is hand-picked not just for their academic credentials, but for their ability to inspire, mentor, and connect with students. We believe the right teacher changes everything.
          </p>
        </div>
      </section>
    </div>
  );
}
