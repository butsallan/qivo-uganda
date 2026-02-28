import { motion } from "motion/react";
import { Check, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Starter Pack",
    price: "1,850,000",
    desc: "Perfect for new startups in Kampala looking to establish a professional digital presence fast.",
    features: ["Modern 1-Page Website", "Logo & Brand Identity", "7-Day Rapid Delivery", "Google Business Profile", "Mobile Responsive"],
    dark: false,
    popular: false
  },
  {
    name: "Professional",
    price: "3,500,000",
    desc: "For growing businesses needing advanced features and deeper market penetration.",
    features: ["Multi-page Website", "SEO Foundation", "MTN/Airtel Payments", "Content Management System", "Priority Support", "Social Media Integration"],
    dark: true,
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Bespoke digital ecosystems for established brands scaling across East Africa.",
    features: ["Custom Web Application", "Full API Integrations", "Advanced SEO Strategy", "High-Load Optimization", "Dedicated Account Manager", "24/7 Monitoring"],
    dark: false,
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-bg-dark relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-pink/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-brand-light/5 rounded-full blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-10 h-[1px] bg-brand-pink" />
            <span className="text-sm font-bold uppercase tracking-widest text-brand-pink">Pricing Models</span>
            <div className="w-10 h-[1px] bg-brand-pink" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl text-white mb-8 font-display font-extrabold"
          >
            Premium quality. <br /> <span className="text-gradient-pink">Local pricing.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/60 font-body"
          >
            Choose a plan that fits your current stage. All our websites are optimized for the Ugandan market with seamless local payment support.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 px-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 relative border-white/5 shadow-premium ${plan.popular ? "bg-brand-pink text-white scale-105 z-20 pink-glow" : "glass text-white hover:bg-white/[0.08]"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-brand-pink px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                  <Star className="w-3 h-3 fill-brand-pink" />
                  Most Popular
                </div>
              )}

              <div>
                <h4 className={`text-2xl font-black mb-4 uppercase tracking-tighter ${plan.popular ? "text-white" : "text-brand-pink"}`}>
                  {plan.name}
                </h4>
                <p className={`text-sm mb-10 font-body leading-relaxed ${plan.popular ? "text-white/90" : "text-white/50"}`}>
                  {plan.desc}
                </p>
                <div className="flex items-end gap-2 mb-10 pb-8 border-b border-white/10">
                  <span className="text-4xl font-display font-black tracking-tighter">
                    {plan.price === "Custom" ? "Custom" : `UGX ${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className={`text-xs mb-2 font-bold uppercase tracking-widest ${plan.popular ? "text-white/70" : "text-white/40"}`}>/fixed</span>
                  )}
                </div>
                <ul className="space-y-5 mb-12">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-body">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-white/20" : "bg-brand-pink/10 text-brand-pink"}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={plan.popular ? "text-white" : "text-white/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 ${plan.popular ? "bg-white text-brand-pink hover:bg-brand-navy hover:text-white" : "bg-brand-pink text-white hover:bg-brand-light"
                }`}>
                Select Plan
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

