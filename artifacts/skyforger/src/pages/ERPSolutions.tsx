import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { 
  Users, Calendar, CreditCard, FileText, 
  Clock, MessageSquare, Briefcase, Home as HomeIcon, 
  Bus, Library, CheckCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const modules = [
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Student Information System",
    description: "Centralized database for all student records, academic history, and personal details.",
    benefits: ["Secure cloud storage", "Easy search & filter", "Document management"]
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-500" />,
    title: "Attendance Management",
    description: "Track daily attendance of students and staff with automated alerts for absentees.",
    benefits: ["Biometric integration", "Automated SMS to parents", "Monthly reports"]
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-500" />,
    title: "Fee Collection",
    description: "Streamline fee collection with online gateways, automated receipts, and reminder systems.",
    benefits: ["Online payment gateway", "Due alerts via SMS/Email", "Defaulter tracking"]
  },
  {
    icon: <FileText className="h-8 w-8 text-blue-500" />,
    title: "Examination Management",
    description: "Handle the entire examination process from scheduling to result generation.",
    benefits: ["Custom report cards", "Online exams support", "Grading automation"]
  },
  {
    icon: <Calendar className="h-8 w-8 text-blue-500" />,
    title: "Timetable Management",
    description: "Conflict-free schedule generation for classes, teachers, and exams.",
    benefits: ["Drag-and-drop builder", "Substitute management", "Teacher workload tracking"]
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
    title: "Parent Communication",
    description: "Bridge the gap between school and home with integrated messaging tools.",
    benefits: ["Dedicated parent portal", "Mass SMS & Emails", "PTM scheduling"]
  },
  {
    icon: <Briefcase className="h-8 w-8 text-blue-500" />,
    title: "HR & Payroll",
    description: "Manage staff records, attendance, leaves, and automated salary processing.",
    benefits: ["One-click payroll", "Leave management", "Tax calculations"]
  },
  {
    icon: <HomeIcon className="h-8 w-8 text-blue-500" />,
    title: "Hostel Management",
    description: "Complete administration of hostel facilities, room allocation, and mess.",
    benefits: ["Room availability tracking", "Out-pass management", "Mess fee collection"]
  },
  {
    icon: <Bus className="h-8 w-8 text-blue-500" />,
    title: "Transport Management",
    description: "Optimize school transport with route planning and vehicle tracking.",
    benefits: ["Live GPS tracking", "Route optimization", "Transport fee integration"]
  },
  {
    icon: <Library className="h-8 w-8 text-blue-500" />,
    title: "Library Management",
    description: "Digital cataloging of books, issue/return tracking, and fine calculation.",
    benefits: ["Barcode scanner support", "Auto-fine calculation", "E-book repository"]
  }
];

export default function ERPSolutions() {
  return (
    <PageLayout>
      <section className="bg-slate-50 dark:bg-slate-900 py-16 border-b">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Enterprise ERP Modules</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            A unified system that connects every department of your institution. Choose the modules you need and build your perfect management platform.
          </p>
          <Link href="/admission">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Request a Demo</Button>
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-xl flex items-center justify-center">
                      {mod.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">{mod.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 min-h-[60px]">
                      {mod.description}
                    </p>
                    <ul className="space-y-2">
                      {mod.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}