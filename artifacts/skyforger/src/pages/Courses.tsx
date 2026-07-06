import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Microscope, Calculator, Globe, ChevronDown, ChevronUp, GraduationCap, Briefcase, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: "science",
    icon: Microscope,
    color: "text-blue-600 bg-blue-50",
    title: "Science Stream",
    tagline: "For future engineers, doctors, and researchers",
    combinations: [
      {
        name: "PCMB",
        subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
        careers: ["Medicine (MBBS / BDS)", "Engineering (B.Tech)", "Pharmacy", "Biotechnology", "Pure Sciences"],
      },
      {
        name: "PCMC",
        subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
        careers: ["Software Engineering", "Computer Science", "Data Science", "Electronics", "IT Industry"],
      },
    ],
    description: "Our science stream is designed for students who aspire to careers in medicine, engineering, and technology. With fully equipped labs and experienced faculty, we ensure every student is prepared for competitive exams like JEE, NEET, and CET.",
  },
  {
    id: "commerce",
    icon: Briefcase,
    color: "text-red-600 bg-red-50",
    title: "Commerce Stream",
    tagline: "For future business leaders and finance professionals",
    combinations: [
      {
        name: "CEBA",
        subjects: ["Computer Science", "Economics", "Business Studies", "Accountancy"],
        careers: ["Chartered Accountancy", "MBA / BBA", "Banking & Finance", "Entrepreneurship", "CA / CMA / CS"],
      },
      {
        name: "SEBA",
        subjects: ["Statistics", "Economics", "Business Studies", "Accountancy"],
        careers: ["Actuarial Science", "Data Analysis", "Economics Research", "Financial Planning", "Civil Services"],
      },
    ],
    description: "Our commerce stream combines strong theoretical foundations with practical business knowledge. Students develop analytical skills in accounting, economics, and entrepreneurship — ideally preparing them for CA, MBA, and corporate careers.",
  },
  {
    id: "arts",
    icon: Globe,
    color: "text-violet-600 bg-violet-50",
    title: "Arts & Humanities Stream",
    tagline: "For future changemakers, writers, and administrators",
    combinations: [
      {
        name: "HEPS",
        subjects: ["History", "Economics", "Political Science", "Sociology"],
        careers: ["IAS / IPS (Civil Services)", "Journalism & Media", "Law (LLB)", "Social Work", "Research & Academia"],
      },
    ],
    description: "Our arts stream fosters critical thinking, social awareness, and communication skills. It is ideal for students passionate about humanities, law, journalism, or public service — and who want to make a meaningful difference in the world.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function Courses() {
  const [expanded, setExpanded] = useState<string | null>("science");

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary-foreground/70 font-semibold tracking-widest uppercase text-sm mb-3">Academic Programs</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Courses We Offer</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Three streams, multiple combinations — each pathway carefully designed to open doors to the career of your choice.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-6">
            {courses.map((course, i) => (
              <motion.div key={course.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="border border-border rounded-2xl overflow-hidden shadow-sm">
                <button
                  className="w-full flex items-center gap-4 p-6 text-left hover:bg-muted/30 transition-colors"
                  onClick={() => setExpanded(expanded === course.id ? null : course.id)}
                  data-testid={`btn-expand-${course.id}`}
                >
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${course.color}`}>
                    <course.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold">{course.title}</h2>
                    <p className="text-sm text-muted-foreground mt-0.5">{course.tagline}</p>
                  </div>
                  {expanded === course.id ? <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" /> : <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />}
                </button>

                {expanded === course.id && (
                  <div className="px-6 pb-8 border-t border-border bg-muted/20">
                    <p className="text-muted-foreground leading-relaxed mt-6 mb-8">{course.description}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      {course.combinations.map((combo) => (
                        <div key={combo.name} className="bg-white rounded-xl border border-border p-6">
                          <div className="flex items-center gap-2 mb-4">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span className="font-bold text-primary text-lg">{combo.name}</span>
                          </div>
                          <div className="mb-4">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Subjects</p>
                            <ul className="space-y-1">
                              {combo.subjects.map((s) => (
                                <li key={s} className="text-sm text-foreground flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Career Paths</p>
                            <div className="flex flex-wrap gap-1.5">
                              {combo.careers.map((c) => (
                                <span key={c} className="text-xs bg-primary/10 text-primary rounded-full px-3 py-0.5 font-medium">{c}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Not sure which stream to choose?</h2>
          <p className="text-muted-foreground mb-6">Our counsellors are here to help. Book a free guidance session and we'll help you find the right path based on your interests and goals.</p>
          <Link href="/admission">
            <Button size="lg" className="bg-primary hover:bg-primary/90" data-testid="btn-book-counselling">
              Book Free Counselling
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: GraduationCap, value: "3 Streams", label: "Science, Commerce, Arts" },
              { icon: BookOpen, value: "4 Combos", label: "Flexible subject choices" },
              { icon: Calculator, value: "JEE / NEET", label: "Exam-focused coaching" },
              { icon: Globe, value: "CET / CA", label: "Professional entry prep" },
            ].map((item, i) => (
              <div key={i} className="p-4">
                <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-bold">{item.value}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
