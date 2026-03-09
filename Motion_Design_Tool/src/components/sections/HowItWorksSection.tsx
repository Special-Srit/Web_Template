"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { STEPS } from "@/lib/constants";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 relative">
      <div className="absolute inset-0 bg-muted/5" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <Badge variant="purple">How it works</Badge>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
            From concept to export in minutes
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Three simple steps between your idea and a production-ready
            animation.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px border-t border-dashed border-brand-primary/30" />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center gap-5"
            >
              {/* Number + icon */}
              <div className="relative">
                <div className="size-24 rounded-2xl border border-brand-primary/30 bg-brand-primary/10 flex items-center justify-center group hover:bg-brand-primary/20 hover:border-brand-primary/50 transition-all duration-300 shadow-lg shadow-brand-primary/10">
                  <step.icon className="size-8 text-brand-accent" />
                </div>
                <div className="absolute -top-3 -right-3 text-3xl font-black gradient-text font-display leading-none">
                  {step.number}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
