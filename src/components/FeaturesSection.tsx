import { motion } from "framer-motion";
import { Sparkles, Video, Award, Users } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "60+ HD Video Lessons",
    desc: "Step-by-step tutorials from basic techniques to advanced artistry.",
  },
  {
    icon: Sparkles,
    title: "Pro Product Guide",
    desc: "Curated kit list with exclusive brand discounts for students.",
  },
  {
    icon: Users,
    title: "Private Community",
    desc: "Connect with fellow artists, share work, and get feedback.",
  },
  {
    icon: Award,
    title: "Certificate of Completion",
    desc: "Industry-recognized certification to launch your career.",
  },
];

const FeaturesSection = () => (
  <section className="py-24 bg-cream">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Why Choose Us</p>
        <h2 className="text-3xl md:text-5xl font-display text-foreground">
          Everything You Need to <em className="italic text-burgundy">Succeed</em>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-8 rounded-sm bg-background hover:shadow-lg transition-shadow duration-300"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-champagne mb-5">
              <f.icon className="w-6 h-6 text-burgundy" />
            </div>
            <h3 className="font-display text-xl mb-3 text-foreground">{f.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
