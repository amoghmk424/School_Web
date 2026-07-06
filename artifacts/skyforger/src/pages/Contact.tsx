import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateContact } from "@workspace/api-client-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Please write a message"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [successOpen, setSuccessOpen] = useState(false);
  const createContact = useCreateContact();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    createContact.mutate(
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
            <p className="text-primary-foreground/70 font-semibold tracking-widest uppercase text-sm mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
              We'd love to hear from you. Reach us for admissions, queries, or just to learn more about us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-8">Our Contact Details</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: MapPin, label: "Address", value: "MG Road, Near Trinity Circle, Bengaluru, Karnataka 560001" },
                  { icon: Phone, label: "Phone", value: "+91 80 2345 6789 / +91 80 2345 6790" },
                  { icon: Mail, label: "Email", value: "admissions@greenvalley.edu.in" },
                  { icon: Clock, label: "Office Hours", value: "Mon–Sat: 8:00 AM – 5:00 PM" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/918023456789"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1ebe5d] transition-colors"
                data-testid="btn-whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>

              <div className="mt-8 rounded-xl overflow-hidden border border-border h-52 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-10 w-10 mx-auto mb-2 text-primary/40" />
                  <p className="text-sm font-medium">Excellence PU College</p>
                  <p className="text-xs">MG Road, Bengaluru 560001</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="border-border shadow-sm">
                <CardContent className="pt-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Full name" {...field} data-testid="input-contact-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 98765 43210" type="tel" {...field} data-testid="input-contact-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" type="email" {...field} data-testid="input-contact-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="subject" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Admission enquiry for Science stream" {...field} data-testid="input-contact-subject" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Write your message here..." className="min-h-[110px]" {...field} data-testid="input-contact-message" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 font-semibold"
                        disabled={createContact.isPending} data-testid="btn-submit-contact">
                        {createContact.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="max-w-sm text-center" data-testid="dialog-contact-success">
          <DialogHeader>
            <div className="flex justify-center mb-3">
              <CheckCircle className="h-16 w-16 text-primary" />
            </div>
            <DialogTitle className="text-2xl">Message Sent!</DialogTitle>
            <DialogDescription className="text-base mt-2">
              Thank you for reaching out. We'll get back to you within one business day.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setSuccessOpen(false)} className="mt-4 w-full bg-primary hover:bg-primary/90" data-testid="btn-close-contact-success">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
