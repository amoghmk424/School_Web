import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateAdmission } from "@workspace/api-client-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle, ClipboardList, FileText, GraduationCap, Users, Calendar } from "lucide-react";

const admissionSchema = z.object({
  studentName: z.string().min(2, "Student name is required"),
  parentName: z.string().min(2, "Parent/guardian name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email address required"),
  course: z.string().min(1, "Please select a course"),
  message: z.string().optional(),
});

type AdmissionFormValues = z.infer<typeof admissionSchema>;

const steps = [
  { icon: ClipboardList, title: "Fill Application", desc: "Complete the online form below" },
  { icon: FileText, title: "Document Submission", desc: "Submit 10th marksheet & other docs" },
  { icon: Users, title: "Counselling Session", desc: "Meet our academic counsellor" },
  { icon: GraduationCap, title: "Enrolment Confirmed", desc: "Pay fees & get your seat confirmed" },
];

export default function Admission() {
  const [successOpen, setSuccessOpen] = useState(false);
  const createAdmission = useCreateAdmission();

  const form = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
    defaultValues: { studentName: "", parentName: "", phone: "", email: "", course: "", message: "" },
  });

  const onSubmit = (data: AdmissionFormValues) => {
    createAdmission.mutate(
      { data },
      {
        onSuccess: () => {
          setSuccessOpen(true);
          form.reset();
        },
      }
    );
  };

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary-foreground/70 font-semibold tracking-widest uppercase text-sm mb-3">Join Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions 2024–25</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Applications are now open for Science, Commerce, and Arts streams. Seats are limited — apply early.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-muted/40 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-10">Admission Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 relative">
                  <step.icon className="h-5 w-5 text-primary" />
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
                </div>
                <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-10 bg-white border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <div className="flex items-center gap-3 bg-muted rounded-xl px-5 py-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Application Deadline</div>
                <div className="font-semibold text-sm">30 June 2024</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-muted rounded-xl px-5 py-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Document Submission</div>
                <div className="font-semibold text-sm">1–10 July 2024</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-muted rounded-xl px-5 py-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Classes Begin</div>
                <div className="font-semibold text-sm">15 July 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="shadow-sm border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Online Application Form</CardTitle>
                <CardDescription>Fill in the details below. Our team will contact you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField control={form.control} name="studentName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name of student" {...field} data-testid="input-student-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="parentName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parent / Guardian Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name" {...field} data-testid="input-parent-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" type="tel" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" type="email" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="course" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stream / Course</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-course">
                              <SelectValue placeholder="Select preferred stream" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Science-PCMB">Science — PCMB</SelectItem>
                            <SelectItem value="Science-PCMC">Science — PCMC</SelectItem>
                            <SelectItem value="Commerce-CEBA">Commerce — CEBA</SelectItem>
                            <SelectItem value="Commerce-SEBA">Commerce — SEBA</SelectItem>
                            <SelectItem value="Arts-HEPS">Arts — HEPS</SelectItem>
                            <SelectItem value="Other">Not decided yet</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message / Queries (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any specific questions or requirements..." className="min-h-[90px]" {...field} data-testid="input-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 font-semibold text-base"
                      disabled={createAdmission.isPending} data-testid="btn-submit-admission">
                      {createAdmission.isPending ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="max-w-sm text-center" data-testid="dialog-success">
          <DialogHeader>
            <div className="flex justify-center mb-3">
              <CheckCircle className="h-16 w-16 text-primary" />
            </div>
            <DialogTitle className="text-2xl">Application Submitted!</DialogTitle>
            <DialogDescription className="text-base mt-2">
              Thank you for applying. Our admissions team will contact you within 24 hours to discuss next steps.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setSuccessOpen(false)} className="mt-4 bg-primary hover:bg-primary/90 w-full" data-testid="btn-close-success">
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
