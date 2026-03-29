import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Laurent",
    role: "Freelance MUA",
    text: "This course completely transformed my career. Within 3 months of graduating, I was fully booked with bridal clients.",
  },
  {
    name: "Amara Chen",
    role: "Beauty Influencer",
    text: "The techniques I learned here took my content to the next level. My audience can see the professional difference.",
  },
  {
    name: "Isabella Rossi",
    role: "Salon Owner",
    text: "I invested in this course for my entire team. The curriculum is thorough, modern, and incredibly well-taught.",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-burgundy">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-rose-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-5xl font-display text-cream">
          Loved by <em className="italic text-rose-gold">Artists</em>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-sm p-8"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-champagne/90 font-body text-sm leading-relaxed mb-6 italic">
              "{t.text}"
            </p>
            <div>
              <p className="text-cream font-display text-base">{t.name}</p>
              <p className="text-rose-gold/70 font-body text-xs tracking-wider uppercase">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
