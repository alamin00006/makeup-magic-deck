import { Facebook, Phone, Mail } from "lucide-react";

const FooterSection = () => (
  <footer className="py-12 bg-dark border-t border-primary-foreground/10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-xl text-primary-foreground mb-1">
            <span className="text-hot-pink">Nigar</span> Fashion World
          </p>
          <p className="text-primary-foreground/50 font-body text-xs tracking-wider">
            প্রফেশনাল মেকআপ কোর্স
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.facebook.com/NigarFashionWorld"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/60 hover:text-hot-pink transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a href="tel:+8801XXXXXXXXX" className="text-primary-foreground/60 hover:text-hot-pink transition-colors" aria-label="Phone">
            <Phone className="w-5 h-5" />
          </a>
          <a href="mailto:info@nigarfashionworld.com" className="text-primary-foreground/60 hover:text-hot-pink transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
        <p className="text-primary-foreground/40 font-body text-xs">
          © 2026 Nigar Fashion World. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
