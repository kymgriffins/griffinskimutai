"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Clock, Code, Zap, Shield, TrendingUp } from "lucide-react";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              About GR8Builds
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              We&apos;re a premium software development agency specializing in crafting exceptional
              digital experiences that drive business growth and user engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              To empower businesses with cutting-edge technology solutions that not only meet
              today&apos;s needs but anticipate tomorrow&apos;s opportunities. We believe in building
              software that scales, performs, and delivers measurable results.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Precision",
                desc: "Every pixel, every line of code, every user interaction is crafted with meticulous attention to detail.",
              },
              {
                icon: Zap,
                title: "Innovation",
                desc: "We stay ahead of the curve, leveraging the latest technologies and methodologies.",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "Your vision combined with our expertise creates solutions that exceed expectations.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "We don&apos;t just deliver projects – we deliver exceptional experiences that drive success.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="text-center h-full">
                  <value.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-white/70">{value.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Full-stack development expertise across modern technologies and platforms.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code,
                title: "Web Applications",
                desc: "Modern, responsive web apps built with React, Next.js, and cutting-edge frameworks.",
                tech: ["React", "Next.js", "TypeScript", "Tailwind"],
              },
              {
                icon: Shield,
                title: "Payment Systems",
                desc: "Secure payment processing and escrow solutions with enterprise-grade security.",
                tech: ["Stripe", "Blockchain", "Security Audits"],
              },
              {
                icon: Users,
                title: "Learning Platforms",
                desc: "Comprehensive LMS solutions with real-time features and advanced analytics.",
                tech: ["WebRTC", "AI", "Video Processing"],
              },
              {
                icon: TrendingUp,
                title: "Business Intelligence",
                desc: "Data-driven dashboards and analytics platforms for informed decision making.",
                tech: ["Data Visualization", "APIs", "Real-time"],
              },
              {
                icon: Clock,
                title: "Rapid Prototyping",
                desc: "Quick MVP development and proof-of-concept solutions to validate ideas.",
                tech: ["Agile", "MVP", "Iterative Design"],
              },
              {
                icon: Award,
                title: "Consulting",
                desc: "Technical architecture, code reviews, and strategic technology guidance.",
                tech: ["Architecture", "Code Review", "Strategy"],
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card variant="hoverable" className="h-full">
                  <service.icon className="h-10 w-10 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/70 mb-4">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and successful delivery.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We dive deep into your business goals, target audience, and technical requirements.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Crafting the perfect technical architecture and development roadmap.",
              },
              {
                step: "03",
                title: "Development",
                desc: "Agile development with regular check-ins, testing, and iterative improvements.",
              },
              {
                step: "04",
                title: "Launch",
                desc: "Comprehensive testing, deployment, and ongoing support to ensure success.",
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-white/70">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Ready to Build Something GR8?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 mb-8"
          >
            Let&apos;s discuss your project and create something exceptional together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button href="/contact" size="lg">
              Start Your Project
              <Target className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
