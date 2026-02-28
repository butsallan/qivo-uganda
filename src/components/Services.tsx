import { motion } from "motion/react";
import { Layout, ShoppingCart, Search, Globe, PenTool, Smartphone, ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Web Design & Dev",
    icon: <Layout className="w-8 h-8" />,
    desc: "Bespoke, high-performance websites built for conversion. Delivering premium UI/UX that sets you apart.",
    price: "From 1.5M UGX"
  },
  {
    title: "eCommerce Solutions",
    icon: <ShoppingCart className="w-8 h-8" />,
    desc: "Robust online stores with MTN MoMo and Airtel Money integration. Sell to the world from Kampala.",
    price: "From 3.5M UGX"
  },
  {
    title: "SEO & Growth",
    icon: <Search className="w-8 h-8" />,
    desc: "Dominating Google searches for Ugandan businesses. We get you found by your ideal customers.",
    price: "Growth focused"
  },
  {
    title: "Brand Identity",
    icon: <PenTool className="w-8 h-8" />,
    desc: "Logo design, color palettes, and brand guidelines that tell your unique Ugandan story.",
    price: "Premium styling"
  },
  {
    title: "Mobile App Strategy",
    icon: <Smartphone className="w-8 h-8" />,
    desc: "Android and iOS applications that provide seamless experiences for the Ugandan market.",
    price: "Scalable tech"
  },
  {
    title: "Digital Marketing",
    icon: <Globe className="w-8 h-8" />,
    desc: "Social media, PPC, and content strategy that drives measurable ROI and brand awareness.",
    price: "Reach millions"
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-pink/5 blur-[120px] rounded-full" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-brand-pink" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-pink">Our Expertise</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl text-white font-display leading-tight"
            >
              Digital solutions crafted <br /> for <span className="text-gradient-pink italic">impact.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/60 font-body leading-relaxed max-w-sm mb-2"
          >
            We combine local insights with global standards to build digital products that drive results for Ugandan SMEs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 glass hover:bg-white/[0.08] transition-all duration-500 rounded-3xl cursor-pointer border-white/5 flex flex-col justify-between min-h-[380px]"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-brand-pink/10 text-brand-pink flex items-center justify-center mb-8 group-hover:bg-brand-pink group-hover:text-white transition-all duration-500">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-pink transition-colors">{s.title}</h4>
                <p className="text-white/60 font-body leading-relaxed mb-6 group-hover:text-white/80 transition-colors">{s.desc}</p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <span className="text-brand-pink font-bold text-sm tracking-wide uppercase">{s.price}</span>
                <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center group-hover:bg-brand-pink transition-all">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <button className="glass text-white px-12 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-brand-pink transition-all group border-white/10">
            View full capabilities
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

