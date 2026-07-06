import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useListTestimonials, getListTestimonialsQueryKey } from "@workspace/api-client-react";
import {
  GraduationCap, Users, BookOpen, Trophy, Star,
  CheckCircle, ArrowRight, MapPin, Phone, Mail
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55 } }),
};

export default function Home() {
  const { data: testimonials = [], isLoading } = useListTestimonials({
    query: { queryKey: getListTestimonialsQueryKey() },
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-[hsl(222,57%,18%)] to-[hsl(222,57%,12%)]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-red-300 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-white/20 text-white/90 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
                Admissions Open 2024–25
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 font-serif">
                Excellence<br />
                <span className="text-red-300">PU College</span>
              </h1>
              <p className="text-xl text-white/80 mb-4 max-w-xl leading-relaxed">
                Empowering minds, shaping futures since 1998. Karnataka Board Science, Commerce & Arts.
              </p>
              <p className="text-sm text-white/60 mb-10">MG Road, Bengaluru &bull; Affiliated to Karnataka PU Board</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/admission">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-13 text-base" data-testid="btn-hero-apply">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 font-semibold px-8 h-13 text-base" data-testid="btn-hero-courses">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="py-14 bg-white border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "25+", label: "Years of Excellence", icon: Trophy },
              { value: "10,000+", label: "Alumni Worldwide", icon: Users },
              { value: "98%", label: "Board Pass Rate", icon: CheckCircle },
              { value: "500+", label: "Toppers Produced", icon: Star },
            ].map((stat, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary font-serif">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Academics</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Academic Programs</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Three streams designed to launch you into the career of your dreams.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Science Stream",
                combos: "PCMB / PCMC",
                desc: "For aspiring engineers and doctors. Rigorous preparation for JEE, NEET, and CET.",
                careers: ["Engineering", "Medicine", "Research"],
                color: "border-t-blue-500",
              },
              {
                title: "Commerce Stream",
                combos: "CEBA / SEBA",
                desc: "For future business leaders. Strong foundation in accounting, economics, and entrepreneurship.",
                careers: ["CA", "MBA", "Banking"],
                color: "border-t-red-600",
              },
              {
                title: "Arts Stream",
                combos: "HEPS",
                desc: "For changemakers and thinkers. Ideal for civil services, law, journalism, and social work.",
                careers: ["IAS / IPS", "Law", "Journalism"],
                color: "border-t-violet-500",
              },
            ].map((course, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`bg-white rounded-2xl border-t-4 ${course.color} border border-border p-7 hover:shadow-md transition-shadow`}>
                <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                <p className="text-primary text-sm font-semibold mb-3">{course.combos}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{course.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.careers.map((c) => (
                    <span key={c} className="text-xs bg-muted text-muted-foreground px-3 py-0.5 rounded-full">{c}</span>
                  ))}
                </div>
                <Link href="/courses">
                  <Button variant="outline" size="sm" className="w-full border-primary/30 text-primary hover:bg-primary/5">
                    View Details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">From the Principal's Desk</p>
              <h2 className="text-3xl font-bold mb-6">Dr. R. K. Sharma</h2>
              <blockquote className="text-lg text-foreground/80 italic leading-relaxed border-l-4 border-primary pl-5 mb-6 font-serif">
                "We believe education is not the filling of a pail, but the lighting of a fire. We nurture each student's unique potential — in academics, arts, and athletics."
              </blockquote>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With 28 years of teaching experience and a PhD in Education, Dr. Sharma leads a faculty of 40+ dedicated educators committed to holistic development.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Founded", value: "1998" },
                  { label: "Board Pass Rate", value: "98%" },
                  { label: "Expert Faculty", value: "40+" },
                  { label: "Smart Classrooms", value: "24" },
                ].map((item, i) => (
                  <div key={i} className="bg-muted rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary font-serif">{item.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Highlights */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3">Our Recent Achievements</h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">Recognition that reflects our relentless commitment to excellence.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Trophy, title: "100% Pass Rate", desc: "8 consecutive years of 100% board results" },
              { icon: Star, title: "State Toppers", desc: "3 state rank holders in Science stream (2019–2024)" },
              { icon: GraduationCap, title: "JEE / NEET", desc: "45 students qualified JEE Mains & 28 cleared NEET in 2024" },
              { icon: BookOpen, title: "NAAC Grade A", desc: "Recognised as a Grade A institution by Karnataka Board" },
              { icon: Users, title: "10,000+ Alumni", desc: "Serving across 30+ countries worldwide" },
              { icon: Trophy, title: "Sports Champions", desc: "District Basketball Champions 2023 & State Sprint Gold 2024" },
            ].map((item, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex gap-4 p-5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors">
                <item.icon className="h-8 w-8 text-red-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-primary-foreground/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/achievements">
              <Button variant="outline" className="border-white/40 text-white hover:bg-white/10">
                View All Achievements <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">What They Say</p>
            <h2 className="text-3xl font-bold">Voices from Our Community</h2>
          </div>
          {isLoading ? (
            <div className="text-center py-10 text-muted-foreground">Loading testimonials...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 6).map((t, i) => (
                <motion.div key={t.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-border p-7 hover:shadow-sm transition-shadow"
                  data-testid={`card-testimonial-${t.id}`}>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400" />)}
                  </div>
                  <p className="text-muted-foreground italic text-sm leading-relaxed mb-5">"{t.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm font-serif shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}, {t.institution}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA + Contact snippet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <GraduationCap className="h-14 w-14 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Admissions for the 2024–25 academic year are now open. Secure your seat today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/admission">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 font-bold" data-testid="btn-cta-apply">
                Apply Online Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-8 border-primary/40 text-primary hover:bg-primary/5">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> MG Road, Bengaluru 560001</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 80 2345 6789</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> admissions@greenvalley.edu.in</div>
          </div>
        </div>
      </section>
    </div>
  );
}
