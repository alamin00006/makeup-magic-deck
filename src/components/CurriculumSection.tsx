import { motion } from "framer-motion";
import productsImg from "@/assets/makeup-products.jpg";

const modules = [
  { week: "Weeks 1–2", title: "Foundation & Skin Prep", topics: "Skin types, primers, foundation matching, flawless base techniques" },
  { week: "Weeks 3–4", title: "Eye Artistry", topics: "Eyeshadow blending, cut crease, smokey eye, liner techniques" },
  { week: "Weeks 5–6", title: "Lips & Contouring", topics: "Lip lining, ombré lips, sculpting, highlighting, bronzing" },
  { week: "Weeks 7–8", title: "Bridal & Editorial", topics: "Bridal looks, editorial creativity, working with photographers" },
  { week: "Weeks 9–10", title: "Special Effects & Color Theory", topics: "Color correction, SFX basics, creative makeup, prosthetics intro" },
  { week: "Weeks 11–12", title: "Business & Portfolio", topics: "Building your portfolio, pricing, marketing, client management" },
];

const CurriculumSection = () => (
  <section id="curriculum" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Curriculum</p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-10">
            12 Weeks to <em className="italic text-burgundy">Mastery</em>
          </h2>
          <div className="space-y-6">
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 group"
              >
                <div className="shrink-0 w-20 text-right">
                  <span className="text-xs font-body tracking-wider text-gold uppercase">{m.week}</span>
                </div>
                <div className="border-l-2 border-champagne pl-5 group-hover:border-gold transition-colors">
                  <h3 className="font-display text-lg text-foreground mb-1">{m.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{m.topics}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block"
        >
          <img
            src={productsImg}
            alt="Luxury makeup products"
            className="rounded-sm shadow-2xl"
            loading="lazy"
            width={800}
            height={800}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default CurriculumSection;
