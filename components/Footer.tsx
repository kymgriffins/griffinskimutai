"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/12">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
              Gr8<span className="text-white/60">Builds</span>
            </Link>
            <p className="text-white/60 mb-6 max-w-md leading-relaxed">
              Premium software development agency crafting exceptional digital experiences.
              From payment systems to learning platforms, we build solutions that scale.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@gr8builds.com"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/projects" className="text-white/60 hover:text-white transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/projects/payment-escrow" className="text-white/60 hover:text-white transition-colors">
                  Payment Systems
                </Link>
              </li>
              <li>
                <Link href="/projects/teaching-platform" className="text-white/60 hover:text-white transition-colors">
                  Learning Platforms
                </Link>
              </li>
              <li>
                <Link href="/projects/design-build" className="text-white/60 hover:text-white transition-colors">
                  Business Solutions
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/60 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-1">
                  Get Started
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/12 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/40 text-sm">
            © {currentYear} GR8Builds. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
