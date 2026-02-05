 import { MapPin, Phone, Mail, Clock } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const ContactSection = () => {
   return (
     <section id="contact" className="py-16 md:py-24 px-4 md:px-8 bg-background">
       <div className="max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* Contact Info */}
           <div className="space-y-8">
             <div>
               <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                 Get in Touch
               </h2>
               <p className="text-muted-foreground text-base md:text-lg">
                 Have questions or want to place a large order? We'd love to hear from you!
               </p>
             </div>
 
             <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                   <MapPin className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                   <p className="text-muted-foreground">KG 123 Street, Kigali Heights<br />Kigali, Rwanda</p>
                 </div>
               </div>
 
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                   <Phone className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                   <p className="text-muted-foreground">+250 788 123 456</p>
                 </div>
               </div>
 
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                   <Mail className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                   <p className="text-muted-foreground">hello@smoothiebliss.rw</p>
                 </div>
               </div>
 
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                   <Clock className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-foreground mb-1">Opening Hours</h4>
                   <p className="text-muted-foreground">Mon - Sat: 7:00 AM - 9:00 PM<br />Sunday: 9:00 AM - 6:00 PM</p>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Contact Form */}
           <div className="bg-card rounded-3xl p-6 md:p-8 shadow-sm">
             <h3 className="font-heading text-2xl font-semibold mb-6">Send us a Message</h3>
             <form className="space-y-4">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <input
                   type="text"
                   placeholder="Your Name"
                   className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                 />
                 <input
                   type="email"
                   placeholder="Your Email"
                   className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                 />
               </div>
               <input
                 type="text"
                 placeholder="Subject"
                 className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
               />
               <textarea
                 placeholder="Your Message"
                 rows={4}
                 className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
               />
               <Button className="btn-primary w-full border-0">
                 Send Message
               </Button>
             </form>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default ContactSection;