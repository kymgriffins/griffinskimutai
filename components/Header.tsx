"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 border-b border-white/12 bg-black/40 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white" onClick={closeMobileMenu}>
            Gr8<span className="text-blue-400">Builds</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/70 hover:text-white transition">
              Home
            </Link>
            <Link href="/projects" className="text-white/70 hover:text-white transition">
              Projects
            </Link>
            <Link href="/about" className="text-white/70 hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-black/95 backdrop-blur-md border-l border-white/12 z-50 md:hidden"
            >
              <nav className="flex flex-col p-6 space-y-6">
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition py-3 text-lg font-medium border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-white/70 hover:text-white transition py-3 text-lg font-medium border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition py-3 text-lg font-medium border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white transition py-3 text-lg font-medium border-b border-white/10"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>

                {/* Mobile CTA Button */}
                <div className="pt-6">
                  <Button href="/contact" onClick={closeMobileMenu} className="w-full">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
