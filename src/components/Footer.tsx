import { motion } from "motion/react";
import { Twitter, Instagram, Linkedin, ArrowUpRight, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-32 pb-12 px-6 border-t border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-pink rounded-xl flex items-center justify-center shadow-lg shadow-brand-pink/20">
                <Zap className="text-white w-6 h-6 fill-white" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter text-white">
                qivo<span className="text-brand-pink">.</span>
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-black leading-[1.1] max-w-lg tracking-tighter">
              Ready to scale your <span className="text-gradient-pink italic">business?</span>
            </h3>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-brand-pink hover:border-brand-pink transition-all duration-300 group shadow-premium"
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="glass rounded-[2.5rem] p-12 space-y-10 border-white/5 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-pink/10 rounded-full blur-[80px]" />
            <p className="text-xl text-white/70 font-body leading-relaxed">
              Join 5,000+ Ugandan entrepreneurs receiving our weekly digital growth insights.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-brand-pink transition-all text-white placeholder:text-white/20 font-body"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-gradient-pink text-white px-10 rounded-xl font-black uppercase tracking-widest text-xs hover-glow transition-all">
                Join Now
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-24 pt-24 border-t border-white/5">
          <div className="space-y-8">
            <h6 className="font-black uppercase tracking-widest text-xs text-brand-pink">Services</h6>
            <ul className="space-y-5 text-white/50 font-body text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">eCommerce</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO Growth</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand Identity</a></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h6 className="font-black uppercase tracking-widest text-xs text-brand-pink">Packages</h6>
            <ul className="space-y-5 text-white/50 font-body text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Starter Pack</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Professional</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h6 className="font-black uppercase tracking-widest text-xs text-brand-pink">Company</h6>
            <ul className="space-y-5 text-white/50 font-body text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h6 className="font-black uppercase tracking-widest text-xs text-brand-pink">Campala HQ</h6>
            <ul className="space-y-5 text-white/50 font-body text-sm font-medium leading-relaxed">
              <li>Plot 12, Nakasero Road<br />Kampala, Uganda</li>
              <li>+256 700 000000</li>
              <li>hello@qivo.ug</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Qivo Digital Uganda. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

