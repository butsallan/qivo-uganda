import { motion } from "motion/react";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-dark to-brand-dark opacity-90" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-light/5 rounded-full blur-[100px]" />

        {/* Abstract Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container-custom relative z-10 px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-brand-pink/20"
            >
              <Zap className="w-4 h-4 text-brand-pink fill-brand-pink" />
              <span className="text-sm font-bold text-white tracking-wide uppercase">Websites delivered in 7 days</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-display font-extrabold text-white leading-[1] mb-8 tracking-tighter"
            >
              Affordable, Modern <br />
              <span className="text-gradient-pink">Web Design</span> for
              <span className="block italic">Uganda.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/70 mb-12 max-w-xl font-body leading-relaxed"
            >
              We help Kampala's most ambitious brands scale with high-performance websites, SEO, and digital strategy. Premium quality without the premium price tag.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <button className="w-full sm:w-auto bg-gradient-pink text-white px-12 py-5 rounded-full text-lg font-bold flex items-center justify-center gap-3 hover-glow transition-all group">
                Start your project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto glass text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/10 transition-all border-white/5">
                View our work
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16 flex flex-wrap gap-8 opacity-50"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-pink" />
                <span className="text-sm font-medium">SEO Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-pink" />
                <span className="text-sm font-medium">Mobile First</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-pink" />
                <span className="text-sm font-medium">UGX Payments ready</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl glass p-4 border-white/10 shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?q=80&w=2070&auto=format&fit=crop"
                alt="Kampala Digital Growth"
                className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-pink/10 mix-blend-overlay" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-pink/40 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-light/20 blur-3xl rounded-full shadow-premium" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

