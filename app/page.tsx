"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Code, Users, Palette, Globe } from "lucide-react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Build Faster. Ship Smarter.{" "}
            <span className="text-blue-400">GR8Builds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto mb-10"
          >
            Premium software development agency crafting payment systems, learning platforms,
            and digital experiences that scale. From concept to deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/projects" size="lg">
              View Our Work
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="secondary" href="/contact" size="lg">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose GR8Builds</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We deliver production-ready solutions with unmatched speed and quality.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
                desc: "Intuitive interfaces that convert. Every pixel serves a purpose.",
              },
              {
                icon: Palette,
                title: "Full-Stack Expertise",
                desc: "Frontend to backend, we handle every layer of your application.",
              },
              {
                icon: Globe,
                title: "Global Scale Ready",
                desc: "Built for millions of users with performance and reliability at scale.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card variant="hoverable">
                  <feature.icon className="h-10 w-10 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Real solutions for real businesses. Each project showcases our expertise.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Payment Escrow Platform",
                desc: "Secure payment processing with integrated project management for construction and services.",
                link: "/projects/payment-escrow",
              },
              {
                title: "Trading Psychology Platform",
                desc: "Psychology-first trading development platform transforming traders through mental mastery.",
                link: "/projects/mentorship-platform",
              },
              {
                title: "Design & Build Platform",
                desc: "End-to-end solution connecting architects, contractors, and clients in the construction industry.",
                link: "/projects/design-build",
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card variant="hoverable" onClick={() => window.location.href = project.link}>
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.desc}</p>
                  <div className="flex items-center text-blue-400 font-semibold">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
            >
            <Button href="/projects" variant="secondary">
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Ready to Build Something GR8?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xl text-white/70 mb-10"
          >
            Let&apos;s discuss your project and create something exceptional together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button href="/contact" size="lg">
              Start Your Project Today
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
