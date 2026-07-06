import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

const plans = [
  {
    name: "Starter Website",
    price: "₹15,000",
    period: "one-time setup",
    description: "Perfect for institutions taking their first step online.",
    features: [
      "Responsive 5-Page Website",
      "Domain Name (1 year)",
      "Basic Hosting (1 year)",
      "Contact Form Integration",
      "Photo Gallery",
      "Social Media Links",
      "Standard Support"
    ],
    recommended: false,
  },
  {
    name: "Professional Website",
    price: "₹35,000",
    period: "one-time setup",
    description: "Dynamic website with portal features for growing schools.",
    features: [
      "Everything in Starter",
      "Up to 15 Pages",
      "Notice Board/News Section",
      "Online Admission Form",
      "Faculty Directory",
      "Premium Hosting",
      "CMS for Easy Updates",
      "Priority Support"
    ],
    recommended: false,
  },
  {
    name: "Website + ERP",
    price: "₹75,000",
    period: "starting from",
    description: "Complete digital transformation for established institutions.",
    features: [
      "Professional Website",
      "Student Information System",
      "Fee Management Module",
      "Attendance Tracking",
      "Parent Portal App",
      "Exam Management",
      "Cloud Server Setup",
      "Dedicated Account Manager"
    ],
    recommended: true,
  },
  {
    name: "Custom Solution",
    price: "Let's Talk",
    period: "custom pricing",
    description: "Tailored multi-campus ERP & custom app development.",
    features: [
      "All ERP Modules",
      "Custom Android/iOS App",
      "Multi-branch Support",
      "HR & Payroll Integration",
      "Transport GPS Tracking",
      "Library Management",
      "API Integrations",
      "24/7 Enterprise Support"
    ],
    recommended: false,
  }
];

export default function Pricing() {
  return (
    <PageLayout>
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white">Transparent Pricing for Educational Institutions</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            No hidden fees. Choose a plan that fits your institution's size and needs. Upgrades are seamless as you grow.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex"
              >
                <Card className={`relative flex flex-col w-full h-full ${plan.recommended ? 'border-blue-500 shadow-lg dark:border-blue-500' : 'border-slate-200 dark:border-slate-800'}`}>
                  {plan.recommended && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-8 pt-8">
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</CardTitle>
                    <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
                    <div className="mt-6">
                      <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                      <span className="block text-sm text-slate-500 mt-1">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className={`h-5 w-5 shrink-0 ${plan.recommended ? 'text-blue-500' : 'text-slate-400'}`} />
                          <span className="text-sm text-slate-700 dark:text-slate-300">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full" variant={plan.recommended ? "default" : "outline"}>
                        {plan.price === "Let's Talk" ? "Contact Us" : "Get Started"}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl flex items-start gap-4 border border-blue-100 dark:border-blue-900/30">
            <Info className="h-6 w-6 text-blue-500 shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">Annual AMC / Server Costs</h4>
              <p className="text-sm text-blue-800/80 dark:text-blue-300/80">
                After the first year, an Annual Maintenance Contract (AMC) applies covering server hosting, domain renewal, SSL certificates, and technical support. Starter plans have an AMC of ₹5,000/year, while ERP solutions vary based on module usage and student count.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}