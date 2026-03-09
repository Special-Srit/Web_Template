"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES } from "@/lib/constants";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 relative">
      <div className="absolute inset-0 hero-glow opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <Badge variant="purple">Features</Badge>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
            Everything a motion designer needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            One tool. The complete motion design workflow — from first frame to
            final export.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="card-gradient border-border/40 hover:border-brand-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/10 h-full">
                <CardContent className="flex flex-col gap-4 pt-2">
                  <div className="size-11 rounded-xl bg-brand-primary/15 border border-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary/25 group-hover:border-brand-primary/40 transition-all duration-300">
                    <feature.icon className="size-5 text-brand-accent" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
