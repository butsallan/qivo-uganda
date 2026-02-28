import { motion } from "motion/react";
import { ArrowRight, Menu, X, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4 glass-nav" : "py-8 bg-transparent"
        }`}
    >
      <div className="container-custom flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-pink rounded-xl flex items-center justify-center shadow-lg shadow-brand-pink/20">
            <Zap className="text-white w-6 h-6 fill-white" />
          </div>
          <span className="text-2xl font-display font-black tracking-tighter text-white">
            qivo<span className="text-brand-pink">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {["About", "Services", "Pricing", "Portfolio"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-black uppercase tracking-widest text-white/70 hover:text-brand-pink transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-gradient-pink text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 hover-glow transition-all group">
            Work with us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 glass rounded-xl border-white/5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-4 right-4 bg-brand-navy border border-white/5 shadow-2xl rounded-3xl p-8 flex flex-col gap-6 md:hidden mt-4"
        >
          {["About", "Services", "Pricing", "Portfolio"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-black uppercase tracking-widest text-white/70 hover:text-brand-pink"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-gradient-pink text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest w-full">
            Work with us
          </button>
        </motion.div>
      )}
    </nav>
  );
}

