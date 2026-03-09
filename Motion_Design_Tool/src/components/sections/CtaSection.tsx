"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, LockIcon, ShieldCheckIcon, UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRUST_ITEMS = [
  { icon: LockIcon, label: "SOC 2 Compliant" },
  { icon: ShieldCheckIcon, label: "99.9% Uptime" },
  { icon: UsersIcon, label: "12,000+ Designers" },
];

export default function CtaSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-1/2 left-1/4 size-80 rounded-full bg-brand-primary/8 blur-3xl -translate-y-1/2 animate-float" />
      <div
        className="absolute top-1/2 right-1/4 size-64 rounded-full bg-brand-secondary/8 blur-3xl -translate-y-1/2 animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-8"
        >
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter">
            Start animating{" "}
            <span className="gradient-text">in seconds</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            No credit card required. Free forever on the Starter plan. Join
            12,000+ designers already using Motionix.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="xl"
              className="glow-button transition-shadow duration-300 font-semibold"
            >
              Create Free Account
              <ArrowRightIcon className="size-4" />
            </Button>
            <Button size="xl" variant="ghost">
              Talk to Sales
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-2">
            {TRUST_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <item.icon className="size-4 text-brand-accent" />
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
