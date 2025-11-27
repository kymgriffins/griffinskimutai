"use client";

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Code, Users, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { getProjectsList } from "../../data/projects";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const projectsData = getProjectsList();

      // Load icons for each project
      const projectsWithIcons = await Promise.all(
        projectsData.map(async (project) => {
          const lucide = await import('lucide-react');
          const icon = (lucide as any)[project.icon];
          return { ...project, icon };
        })
      );

      setProjects(projectsWithIcons);
    }

    loadProjects();
  }, []);

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
              Our Work
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Real solutions for real businesses. Each project showcases our expertise in building
              scalable, high-performance applications that drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={project.link}>
                  <Card variant="hoverable" className="h-full">
                    <div className="bg-white/10 p-4 rounded-2xl mb-6 w-fit">
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 text-white/80 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-semibold">{project.impact}</span>
                      <ArrowRight className="h-5 w-5 text-blue-400" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Websites Section */}
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Custom Websites</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Beyond platforms, we&apos;ve built hundreds of high-converting websites for businesses
              across industries. Each one designed for performance and results.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { category: "E-commerce", count: "50+", icon: TrendingUp },
              { category: "Business", count: "100+", icon: Users },
              { category: "Portfolio", count: "75+", icon: Code },
              { category: "Landing Pages", count: "200+", icon: Globe },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="text-center">
                  <item.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-blue-400 mb-2">{item.count}</div>
                  <div className="text-white/70">{item.category}</div>
                </Card>
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
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
