"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "../Header";
import { Button } from "../Button";
import { Card } from "../Card";

export interface ProjectDataRaw {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  impact: string;
  iconName: string;
  features: {
    iconName: string;
    title: string;
    desc: string;
  }[];
  frontendFeatures: string[];
  backendFeatures: string[];
  specialFeatures: {
    iconName: string;
    title: string;
    desc: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  ctaText: string;
  ctaIconName: string;
}

interface ProjectDetailProps {
  project: ProjectDataRaw;
}

async function loadIcon(iconName: string): Promise<LucideIcon> {
  const lucide = await import('lucide-react');
  return (lucide as unknown as Record<string, LucideIcon>)[iconName];
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [loadedIcons, setLoadedIcons] = useState<{
    mainIcon?: LucideIcon;
    ctaIcon?: LucideIcon;
    featureIcons: LucideIcon[];
  }>({
    featureIcons: [],
  });

  useEffect(() => {
    async function loadIcons() {
      const [mainIcon, ctaIcon, ...featureIcons] = await Promise.all([
        loadIcon(project.iconName),
        loadIcon(project.ctaIconName),
        ...project.features.map(f => loadIcon(f.iconName)),
      ]);

      setLoadedIcons({
        mainIcon,
        ctaIcon,
        featureIcons,
      });
    }

    loadIcons();
  }, [project]);

  // Don't render until icons are loaded
  if (!loadedIcons.mainIcon || !loadedIcons.ctaIcon) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Back Navigation */}
      <div className="pt-24 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              {project.longDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            {project.subtitle}
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, i) => {
              const IconComponent = loadedIcons.featureIcons[i];
              if (!IconComponent) return null;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card variant="hoverable">
                    <IconComponent className="h-10 w-10 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-white/70">{feature.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-8">Technical Architecture</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <h3 className="text-2xl font-semibold mb-4">Frontend & UX</h3>
                <ul className="space-y-3 text-white/80">
                  {project.frontendFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card>
                <h3 className="text-2xl font-semibold mb-4">Backend & Infrastructure</h3>
                <ul className="space-y-3 text-white/80">
                  {project.backendFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </motion.div>

          {/* Special Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">Advanced Features</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {project.specialFeatures.map((feature, i) => {
                if (!loadedIcons.featureIcons[project.features.length + i]) return null;

                const IconComponent = loadedIcons.featureIcons[project.features.length + i];
                return (
                  <Card key={i} variant="elevated">
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="h-6 w-6 text-blue-400" />
                      <h4 className="text-xl font-semibold">{feature.title}</h4>
                    </div>
                    <p className="text-black/80">
                      {feature.desc}
                    </p>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            Platform Impact
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {project.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button href="/contact" size="lg">
              {project.ctaText}
              <loadedIcons.ctaIcon className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
