import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Clock, Users, BookOpen, Award, PlayCircle, Download,
  MessageCircle, Globe, Palette, Camera, Scissors, Heart
} from "lucide-react";
import productsImg from "@/assets/makeup-products.jpg";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Details = () => (
  <>
    <Navbar />
    <main>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-burgundy">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-rose-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
              Course Details
            </p>
            <h1 className="text-4xl md:text-6xl font-display text-cream mb-6">
              The Complete <em className="italic text-rose-gold">Makeup</em> Masterclass
            </h1>
            <p className="text-champagne/80 font-body text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our flagship 12-week professional makeup artistry program.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Overview</p>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                Who Is This <em className="italic text-burgundy">Course</em> For?
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Whether you're a complete beginner dreaming of a career in beauty, a self-taught enthusiast looking to refine your skills, or a working MUA wanting to stay current — this course is designed for you.
                </p>
                <p>
                  Our curriculum covers everything from foundational skin prep to advanced editorial techniques, taught by industry professionals with 15+ years of experience working with top fashion magazines and celebrities.
                </p>
                <p>
                  No prior experience is required. All you need is passion, dedication, and a willingness to learn.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <img
                src={productsImg}
                alt="Course products"
                className="rounded-sm shadow-2xl"
                loading="lazy"
                width={800}
                height={800}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Stats */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "60+", label: "Video Lessons", icon: PlayCircle },
              { num: "12", label: "Weeks", icon: Clock },
              { num: "2,500+", label: "Graduates", icon: Users },
              { num: "4.9★", label: "Average Rating", icon: Heart },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <s.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-3xl font-display text-foreground">{s.num}</p>
                <p className="text-muted-foreground font-body text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Curriculum */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Full Curriculum</p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground">
              What You'll <em className="italic text-burgundy">Learn</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Palette, title: "Skin Prep & Foundation", lessons: "8 lessons", desc: "Skin analysis, primer selection, foundation matching, concealer techniques, setting methods." },
              { icon: Camera, title: "Eye Makeup Mastery", lessons: "10 lessons", desc: "Eyeshadow blending, cut crease, smokey eye, graphic liner, false lash application." },
              { icon: Scissors, title: "Brow Sculpting", lessons: "5 lessons", desc: "Brow mapping, filling techniques, lamination basics, shaping for different face shapes." },
              { icon: Heart, title: "Lips & Contouring", lessons: "8 lessons", desc: "Lip lining, ombré techniques, face sculpting, highlighting, bronzing for all skin tones." },
              { icon: Globe, title: "Bridal & Editorial", lessons: "10 lessons", desc: "Bridal consultation, long-wear techniques, editorial concepts, working with photographers." },
              { icon: BookOpen, title: "SFX & Color Theory", lessons: "7 lessons", desc: "Color wheel mastery, color correction, basic SFX, aging techniques, creative looks." },
              { icon: Users, title: "Diverse Beauty", lessons: "5 lessons", desc: "Working with all skin tones, cultural sensitivity, inclusive beauty practices." },
              { icon: Download, title: "Tools & Products", lessons: "4 lessons", desc: "Brush guide, product ingredients, kit building, sanitization and hygiene protocols." },
              { icon: Award, title: "Business & Portfolio", lessons: "6 lessons", desc: "Portfolio photography, pricing strategies, social media marketing, client management." },
            ].map((m, i) => (
              <motion.div
                key={m.title}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="bg-cream rounded-sm p-6 hover:shadow-lg transition-shadow duration-300 border border-champagne/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-champagne flex items-center justify-center">
                    <m.icon className="w-5 h-5 text-burgundy" />
                  </div>
                  <div>
                    <h3 className="font-display text-base text-foreground">{m.title}</h3>
                    <p className="text-gold font-body text-xs">{m.lessons}</p>
                  </div>
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">What's Included</p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground">
              Your Complete <em className="italic text-burgundy">Toolkit</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "60+ HD Video Lessons", desc: "Professionally filmed tutorials you can watch at your own pace, from any device." },
              { title: "Downloadable Workbooks", desc: "Detailed PDF guides for each module with face charts, product lists, and practice exercises." },
              { title: "Live Monthly Q&A", desc: "Join our instructors live every month to get your questions answered in real-time." },
              { title: "Private Community", desc: "Access our exclusive student community to share work, get feedback, and network." },
              { title: "Pro Product Discounts", desc: "Exclusive discount codes from partnered brands including MAC, NARS, and Charlotte Tilbury." },
              { title: "Certificate of Completion", desc: "Industry-recognized digital certificate to add to your portfolio and LinkedIn profile." },
              { title: "Lifetime Access", desc: "Your enrollment never expires. Come back anytime, including for future course updates." },
              { title: "30-Day Money Back Guarantee", desc: "Not satisfied? Get a full refund within 30 days, no questions asked." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4"
              >
                <div className="shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Your Instructor</p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
              Meet <em className="italic text-burgundy">Elena Morozova</em>
            </h2>
            <div className="w-24 h-24 rounded-full bg-champagne mx-auto mb-6 flex items-center justify-center">
              <span className="font-display text-2xl text-burgundy">EM</span>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              With over 15 years in the beauty industry, Elena has worked with Vogue, Harper's Bazaar, and celebrity clients worldwide. She's a certified master makeup artist and passionate educator who has trained over 2,500 students.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Her teaching philosophy is simple: everyone deserves to feel confident with a brush in hand. She breaks down complex techniques into approachable steps that anyone can follow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground">
              Common <em className="italic text-burgundy">Questions</em>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { q: "Do I need any prior experience?", a: "Not at all! This course is designed for all levels, from complete beginners to experienced artists looking to level up." },
              { q: "How long do I have access to the course?", a: "You get lifetime access. Once enrolled, the course is yours forever — including all future updates and new content." },
              { q: "What products/tools do I need?", a: "We provide a starter kit checklist in Module 1. You don't need expensive products — we teach techniques that work with any budget." },
              { q: "Is there a payment plan available?", a: "Yes! You can split the payment into 3 monthly installments of $175. Select the option at checkout." },
              { q: "Can I get a refund if I'm not satisfied?", a: "Absolutely. We offer a 30-day money-back guarantee. If the course isn't right for you, just let us know." },
              { q: "Will I receive a certificate?", a: "Yes, upon completing all modules and the final project, you'll receive a digital certificate of completion." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="bg-background rounded-sm p-6 border border-champagne/50"
              >
                <h3 className="font-display text-base text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-burgundy text-center">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-display text-cream mb-4">
              Ready to Begin?
            </h2>
            <p className="text-champagne/80 font-body text-lg mb-8 max-w-lg mx-auto">
              Join 2,500+ graduates who transformed their passion into a thriving career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-burgundy font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-rose-gold transition-colors duration-300"
              >
                Enroll Now — $497
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-4 border border-champagne/40 text-cream font-body text-sm tracking-wider uppercase rounded-sm hover:bg-cream/10 transition-colors duration-300"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  </>
);

export default Details;
