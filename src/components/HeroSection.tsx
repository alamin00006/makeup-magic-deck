import { motion } from "framer-motion";
import heroImg from "@/assets/hero-studio.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Professional makeup studio"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy/80 via-burgundy/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-rose-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Professional Makeup Masterclass
          </p>
          <h1 className="text-5xl md:text-7xl font-display text-cream leading-[1.1] mb-6">
            Unlock Your <em className="italic text-rose-gold">Artistry</em>
          </h1>
          <p className="text-champagne/90 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Transform your passion into profession. Learn from award-winning makeup artists 
            in our comprehensive 12-week course.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-burgundy font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-rose-gold transition-colors duration-300"
            >
              Enroll Now — $497
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center px-8 py-4 border border-champagne/40 text-cream font-body text-sm tracking-wider uppercase rounded-sm hover:bg-cream/10 transition-colors duration-300"
            >
              View Curriculum
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
