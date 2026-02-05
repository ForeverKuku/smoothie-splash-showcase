 import { Facebook, Instagram, Twitter } from "lucide-react";
 
 const Footer = () => {
   return (
     <footer className="bg-primary text-primary-foreground py-12 px-4 md:px-8">
       <div className="max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
           {/* Brand */}
           <div className="space-y-4">
             <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center">
                 <span className="text-primary text-lg">🥤</span>
               </div>
               <span className="font-heading text-xl font-semibold">SmoothieBliss</span>
             </div>
             <p className="text-primary-foreground/80 text-sm">
               Crafting the freshest smoothies in Kigali since 2018. Made with love and premium ingredients.
             </p>
           </div>
 
           {/* Quick Links */}
           <div>
             <h4 className="font-semibold mb-4">Quick Links</h4>
             <ul className="space-y-2 text-sm text-primary-foreground/80">
               <li><a href="#home" className="hover:text-primary-foreground transition-colors">Home</a></li>
               <li><a href="#menu" className="hover:text-primary-foreground transition-colors">Menu</a></li>
               <li><a href="#our-story" className="hover:text-primary-foreground transition-colors">Our Story</a></li>
               <li><a href="#reviews" className="hover:text-primary-foreground transition-colors">Reviews</a></li>
             </ul>
           </div>
 
           {/* Contact */}
           <div>
             <h4 className="font-semibold mb-4">Contact</h4>
             <ul className="space-y-2 text-sm text-primary-foreground/80">
               <li>KG 123 Street, Kigali Heights</li>
               <li>Kigali, Rwanda</li>
               <li>+250 788 123 456</li>
               <li>hello@smoothiebliss.rw</li>
             </ul>
           </div>
 
           {/* Social */}
           <div>
             <h4 className="font-semibold mb-4">Follow Us</h4>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                 <Facebook className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                 <Twitter className="w-5 h-5" />
               </a>
             </div>
           </div>
         </div>
 
         <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
           <p>© {new Date().getFullYear()} SmoothieBliss. All rights reserved.</p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;