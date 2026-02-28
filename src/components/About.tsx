import { motion } from "motion/react";
import { Zap, ShieldCheck, Trophy, Globe, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "7-Day Delivery",
    desc: "Speed is our competitive advantage. We launch professional sites in just one week.",
    num: "01"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Optimized for Uganda",
    desc: "Built-in support for MTN MoMo, Airtel Money, and local SEO dominance.",
    num: "02"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Premium Aesthetics",
    desc: "World-class design standards brought to the local Ugandan business landscape.",
    num: "03"
  }
];

export default function About() {
  return (
    <section id="about-us" className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-[140px] -z-0" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-pink" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-pink">Our Vision</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white font-display font-black leading-tight tracking-tighter">
              Empowering Kampala's <br /> brands to <span className="text-gradient-pink">win online.</span>
            </h2>
            <p className="text-xl text-white/60 font-body leading-relaxed max-w-xl">
              Qivo Uganda was founded on a simple belief: high-end web design shouldn't be a luxury reserved for global giants. We bring premium digital solutions to Ugandan SMEs.
            </p>
            <p className="text-lg text-white/40 font-body leading-relaxed max-w-xl">
              Our team of local experts understands the Ugandan consumer journey, ensuring every pixel we place and every line of code we write drives growth for your business.
            </p>
            <button className="bg-gradient-pink text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-3 hover-glow transition-all group">
              Learn our story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-8 p-10 glass rounded-[2rem] border-white/5 hover:bg-white/[0.08] transition-all group cursor-default"
              >
                <div className="w-16 h-16 shrink-0 bg-brand-pink text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shadow-lg shadow-brand-pink/20">
                  {f.num}
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-brand-pink transition-colors">{f.title}</h4>
                  <p className="text-white/50 font-body text-sm leading-relaxed group-hover:text-white/70 transition-colors">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Local Growth Section */}
        <div className="mt-40 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square glass rounded-[3rem] border-white/10 overflow-hidden p-8">
              <div className="w-full h-full bg-brand-navy/40 rounded-[2rem] flex items-center justify-center text-8xl font-black text-white/5 select-none">
                UGANDA
              </div>
            </div>
            {/* Local Context Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-12">
              <div className="text-gradient-pink text-9xl font-black font-display opacity-20">7-DAY</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 order-1 lg:order-2"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-pink" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-pink">Local Impact</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white font-display font-black leading-tight tracking-tighter">
              Built in Kampala. <br /> Built for <span className="text-gradient-pink">Growth.</span>
            </h2>
            <p className="text-xl text-white/60 font-body leading-relaxed">
              We've helped over 100 Ugandan businesses transform their online presence. From coffee exporters to real estate developers, we deliver results that matter.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-8">
              <div className="group">
                <div className="text-6xl font-display font-black text-brand-pink tracking-tighter group-hover:scale-110 transition-transform">100+</div>
                <div className="text-xs text-white/40 font-black uppercase tracking-widest mt-3">Projects Delivered</div>
              </div>
              <div className="group">
                <div className="text-6xl font-display font-black text-brand-pink tracking-tighter group-hover:scale-110 transition-transform">99%</div>
                <div className="text-xs text-white/40 font-black uppercase tracking-widest mt-3">Uptime Guarantee</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

