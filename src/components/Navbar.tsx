import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Features", action: () => scrollTo("features") },
    { label: "Curriculum", action: () => scrollTo("curriculum") },
    { label: "Testimonials", action: () => scrollTo("testimonials") },
    { label: "Pricing", action: () => scrollTo("pricing") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-burgundy/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-display text-xl text-cream tracking-wide">
          Glow Academy
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className="text-champagne/80 hover:text-cream font-body text-xs tracking-[0.15em] uppercase transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/details"
            className="text-champagne/80 hover:text-cream font-body text-xs tracking-[0.15em] uppercase transition-colors"
          >
            Details
          </Link>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("pricing");
            }}
            className="px-5 py-2 bg-gold text-burgundy font-body font-semibold text-xs tracking-wider uppercase rounded-sm hover:bg-rose-gold transition-colors"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cream"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-burgundy/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-champagne/80 hover:text-cream font-body text-sm tracking-wider uppercase text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/details"
                onClick={() => setMobileOpen(false)}
                className="text-champagne/80 hover:text-cream font-body text-sm tracking-wider uppercase transition-colors"
              >
                Details
              </Link>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("pricing");
                }}
                className="mt-2 text-center px-5 py-3 bg-gold text-burgundy font-body font-semibold text-sm tracking-wider uppercase rounded-sm"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
