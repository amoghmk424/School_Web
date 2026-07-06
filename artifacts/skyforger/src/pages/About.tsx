import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Heart, Target, Users, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function About() {
  return (
    <div>
      {/* Page Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary-foreground/70 font-semibold tracking-widest uppercase text-sm mb-3">Our Story</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our PU College</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              25 years of nurturing talent, building character, and shaping the next generation of leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Our History</p>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Founded With a Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our PU College was established in 1998 by a group of passionate educators who believed that quality education should be accessible to every aspiring student. What began as a modest institution with 120 students has grown into one of Bengaluru's most respected pre-university colleges.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the decades, we have consistently produced Karnataka Board toppers, national Olympiad winners, and thousands of alumni who now serve with distinction in medicine, engineering, law, business, and public service across India and abroad.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey is one of continuous growth — in infrastructure, faculty excellence, student achievement, and community impact. We are proud of our past and excited about the future we are building together.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "1998", label: "Year Founded" },
                  { value: "25+", label: "Years of Excellence" },
                  { value: "10,000+", label: "Alumni Worldwide" },
                  { value: "98%", label: "Board Pass Rate" },
                ].map((stat, i) => (
                  <div key={i} className="bg-muted rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Vision & Mission</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The principles that guide every decision we make</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white border border-border rounded-2xl p-8">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a globally recognized institution that empowers every student to realize their fullest potential through transformative education, ethical values, and a spirit of lifelong learning.
              </p>
            </motion.div>
            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white border border-border rounded-2xl p-8">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide an inclusive, innovative, and nurturing learning environment where academic rigour meets holistic development — preparing students for competitive exams, professional excellence, and responsible citizenship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Academic Excellence", desc: "Unwavering commitment to rigorous, outcome-oriented education." },
              { icon: Heart, title: "Integrity", desc: "Honesty, transparency, and ethical conduct in all we do." },
              { icon: Users, title: "Inclusion", desc: "Welcoming every student regardless of background or ability." },
              { icon: Award, title: "Achievement", desc: "Celebrating every milestone, big or small, in a student's journey." },
              { icon: Globe, title: "Global Perspective", desc: "Preparing students for opportunities in a connected world." },
              { icon: Target, title: "Purpose", desc: "Helping each student discover and pursue their unique calling." },
            ].map((val, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <val.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{val.title}</h4>
                  <p className="text-sm text-muted-foreground">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl border border-border p-10 md:p-14">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">Message from the Principal</p>
            <blockquote className="text-xl md:text-2xl font-serif italic text-foreground/90 leading-relaxed mb-8 border-l-4 border-primary pl-6">
              "Education is not the filling of a pail, but the lighting of a fire. We strive every day to ignite that spark of curiosity, creativity, and courage in every student who walks through our doors."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl font-serif">
                RK
              </div>
              <div>
                <div className="font-bold text-lg">Dr. R. K. Sharma</div>
                <div className="text-muted-foreground text-sm">Principal, Excellence PU College</div>
                <div className="text-muted-foreground text-xs mt-0.5">M.Sc., M.Ed., Ph.D. | 28 years in Education</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation */}
      <section className="py-14 bg-white border-t">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-muted-foreground text-sm mb-2">Recognised & Affiliated to</p>
          <p className="font-semibold text-foreground">Karnataka Pre-University Education Board (PUC) &bull; Bengaluru South Zone</p>
        </div>
      </section>
    </div>
  );
}
