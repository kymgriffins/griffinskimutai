"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Globe, Palette, Rocket, Shield, Target, Users, Zap } from "lucide-react";
import { useRef } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Fixed pulseAnimation with proper TypeScript types
  const pulseAnimation = {
    initial: { scale: 1 },
    whileHover: {
      scale: 1.05,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight"
          >
            Build Faster. Ship Smarter.{" "}
            <span className="text-blue-400 block md:inline">Gr8Builds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            Premium software development agency crafting payment systems, learning platforms,
            and digital experiences that scale. From concept to deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button href="/projects" size="lg" className="text-lg px-12 py-6">
              View Our Work
              <ArrowRight className="h-6 w-6 ml-2" />
            </Button>
            <Button variant="secondary" href="/contact" size="lg" className="text-lg px-12 py-6 border-white/30 hover:bg-white/10">
              Start Your Project
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group"
              aria-label="Scroll to next section"
            >
              <span className="text-sm font-medium tracking-wider uppercase">Discover More</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/80 transition-colors"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-3 bg-white/40 rounded-full mt-2 group-hover:bg-white/80 transition-colors"
                />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-32 px-6 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <Target className="h-8 w-8 text-white" />
              <h2 className="text-5xl font-bold text-white">
                Why Choose Gr8Builds
              </h2>
            </motion.div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We deliver <span className="text-white font-semibold">production-ready solutions</span> with
              unmatched speed, quality, and attention to detail that sets us apart.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {[
              {
                icon: Zap,
                title: "Lightning-Fast Development",
                desc: "Modern tech stack with optimized workflows. From idea to production in weeks, not months.",
              },
              {
                icon: Shield,
                title: "Enterprise-Grade Security",
                desc: "Built-in security best practices, compliance-ready, and scalable architecture.",
              },
              {
                icon: Code,
                title: "Clean, Maintainable Code",
                desc: "Well-documented, testable code that your team can easily maintain and extend.",
              },
              {
                icon: Users,
                title: "User-Centric Design",
                desc: "Intuitive interfaces that convert. Every pixel serves a purpose and drives results.",
              },
              {
                icon: Palette,
                title: "Full-Stack Expertise",
                desc: "Frontend to backend, DevOps to AI - we handle every layer of your application.",
              },
              {
                icon: Globe,
                title: "Global Scale Ready",
                desc: "Built for millions of users with performance and reliability at global scale.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={pulseAnimation}
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <Card variant="hoverable" className="h-full group border-gray-700">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-gray-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real solutions for real businesses. Each project showcases our expertise in
              delivering exceptional digital experiences.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Payment Escrow Platform",
                desc: "Secure payment processing with integrated project management for construction and service industries.",
                link: "/projects/payment-escrow",
                tech: ["React", "Node.js", "Stripe"],
              },
              {
                title: "Trading Psychology Platform",
                desc: "Psychology-first trading development platform transforming traders through mental mastery and analytics.",
                link: "/projects/mentorship-platform",
                tech: ["Next.js", "Python", "ML"],
              },
              {
                title: "Design & Build Platform",
                desc: "End-to-end solution connecting architects, contractors, and clients in the construction industry.",
                link: "/projects/design-build",
                tech: ["Vue.js", "Laravel", "AWS"],
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => window.location.href = project.link}
              >
                <Card variant="hoverable" className="h-full relative overflow-hidden border-gray-700">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-gray-400"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-gray-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-white font-semibold group-hover:text-gray-300 transition-colors">
                      View Case Study
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Button href="/projects" variant="secondary" size="lg" className="group border-white text-white hover:bg-white/10">
              Explore All Projects
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gray-500/5 to-black/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-8 text-white"
            >
              Ready to Build
              <br />
              Something <span className="text-white">Gr8</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-gray-300 mb-12 leading-relaxed"
            >
              Let&apos;s discuss your vision and create something exceptional together.
              Your next big idea is just a conversation away.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button href="/contact" size="lg" className="group bg-white text-black hover:bg-gray-200">
                <Rocket className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Start Your Project Today
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" href="/schedule" size="lg" className="border-white text-white hover:bg-white/10">
                Book a Discovery Call
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 mt-12 border-t border-white/10"
          >
            {[
              "No upfront costs",
              "Fixed timelines",
              "Dedicated team",
              "24/7 support"
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex items-center justify-center gap-2 text-gray-400"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
