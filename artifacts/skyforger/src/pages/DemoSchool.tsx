import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Trophy, ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DemoSchool() {
  return (
    <PageLayout>
      {/* Demo Banner */}
      <div className="bg-yellow-100 text-yellow-800 py-2 text-center text-sm font-medium border-b border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-500 dark:border-yellow-900/50">
        This is a demo showcase website created by SkyForger Technologies. It demonstrates how a school website could look.
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/demo-school-hero.png" 
            alt="Green Valley PU College Campus" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="uppercase tracking-widest text-green-400 font-semibold mb-4 block">Excellence in Education</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">Green Valley PU College</h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">Empowering minds, shaping futures since 1998.</p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">Admissions Open</Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">Virtual Tour</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Principal Message */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6 font-serif text-slate-900 dark:text-white">Message from the Principal</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                "Welcome to Green Valley PU College. Our mission is to provide an environment where students can discover their true potential. We believe that education is not just about academic excellence, but about character building, critical thinking, and developing a sense of social responsibility. With state-of-the-art facilities and a dedicated faculty, we ensure every student is prepared for the challenges of tomorrow."
              </p>
              <div className="font-semibold text-lg text-slate-900 dark:text-slate-200">Dr. R. K. Sharma</div>
              <div className="text-green-600 font-medium">Principal</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/demo-library.png" alt="Library" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="text-4xl font-bold mb-1">25+</div>
                <div className="text-green-100 font-medium">Years of Legacy</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 font-serif">Academic Programs</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive Pre-University courses designed to prepare students for competitive exams and professional degrees.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Science (PCMB/PCMC)", desc: "Physics, Chemistry, Mathematics, Biology/Computer Science. Perfect for aspiring engineers and doctors.", icon: <BookOpen className="h-8 w-8" /> },
              { title: "Commerce (CEBA/SEBA)", desc: "Computer Science/Statistics, Economics, Business Studies, Accountancy. For future business leaders.", icon: <Users className="h-8 w-8" /> },
              { title: "Arts (HEPS)", desc: "History, Economics, Political Science, Sociology. Building foundation for civil services and humanities.", icon: <GraduationCap className="h-8 w-8" /> }
            ].map((course, i) => (
              <Card key={i} className="border-t-4 border-t-green-500 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-green-600 mb-4">{course.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{course.desc}</p>
                  <Button variant="link" className="text-green-600 p-0 h-auto font-semibold">
                    View Syllabus <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center font-serif">Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden relative group">
              <img src="/images/demo-lab.png" alt="Science Lab" className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Modern Laboratories</h3>
                  <p className="text-slate-200 text-sm">Fully equipped Physics, Chemistry, and Biology labs with the latest apparatus.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden relative group">
              <img src="/images/demo-library.png" alt="Library" className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Digital Library</h3>
                  <p className="text-slate-200 text-sm">Over 10,000+ reference books, journals, and digital resources.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-8 font-serif">Ready to Join Green Valley?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 text-slate-300">
            <div className="flex items-center gap-2"><Phone className="h-5 w-5 text-green-400" /> +91 80 2345 6789</div>
            <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-green-400" /> admissions@greenvalley.edu.in</div>
            <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-green-400" /> MG Road, Bengaluru, 560001</div>
          </div>
          <Button size="lg" className="bg-green-600 hover:bg-green-500 text-white">Apply Now</Button>
        </div>
      </section>
    </PageLayout>
  );
}