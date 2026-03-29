import { motion } from "framer-motion";
import { Check } from "lucide-react";

const included = [
  "60+ HD video lessons",
  "Downloadable workbooks & guides",
  "Pro product kit checklist",
  "Private student community access",
  "Live Q&A sessions (monthly)",
  "Certificate of completion",
  "Lifetime access to updates",
  "30-day money-back guarantee",
];

const PricingSection = () => (
  <section id="pricing" className="py-24 bg-cream">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Investment</p>
        <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">
          Start Your <em className="italic text-burgundy">Journey</em>
        </h2>
        <p className="text-muted-foreground font-body mb-12">
          One-time payment. Lifetime access. No hidden fees.
        </p>

        <div className="bg-background border border-champagne rounded-sm p-10 shadow-xl">
          <div className="mb-8">
            <span className="text-muted-foreground font-body text-sm line-through">$997</span>
            <div className="flex items-baseline justify-center gap-2 mt-1">
              <span className="text-5xl font-display text-foreground">$497</span>
              <span className="text-muted-foreground font-body text-sm">USD</span>
            </div>
            <p className="text-gold font-body text-xs tracking-wider uppercase mt-2">
              Limited Time — Save 50%
            </p>
          </div>

          <ul className="text-left space-y-3 mb-10">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-foreground font-body text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="block w-full py-4 bg-burgundy text-cream font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-primary transition-colors duration-300 text-center"
          >
            Enroll Now
          </a>
          <p className="text-muted-foreground font-body text-xs mt-4">
            Secure checkout • Instant access after purchase
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
