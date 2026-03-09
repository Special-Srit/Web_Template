"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, PlayIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const SOCIAL_PROOF_AVATARS = ["SK", "DR", "PM", "JT", "AN"];
const AVATAR_COLORS = [
  "bg-violet-600",
  "bg-purple-600",
  "bg-indigo-600",
  "bg-violet-700",
  "bg-purple-700",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-brand-primary/5 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 right-1/4 size-72 rounded-full bg-brand-secondary/5 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center gap-8">
        {/* Announcement badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="purple"
            className="px-4 py-1.5 text-xs font-medium gap-2 cursor-pointer hover:bg-brand-primary/20 transition-colors"
          >
            <span className="size-1.5 rounded-full bg-brand-accent animate-pulse" />
            Introducing Motionix 2.0
            <ArrowRightIcon className="size-3" />
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
            Design Motion,
          </h1>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none gradient-text">
            Without Limits.
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          The professional-grade timeline editor for UI animation, product
          demos, and cinematic motion graphics. From idea to export in minutes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button size="xl" className="glow-button transition-shadow duration-300 font-semibold">
            Start for Free
            <ArrowRightIcon className="size-4" />
          </Button>
          <Button size="xl" variant="ghost" className="gap-2 group">
            <div className="size-8 rounded-full border border-border/60 flex items-center justify-center group-hover:border-brand-accent/60 group-hover:bg-brand-primary/10 transition-all">
              <PlayIcon className="size-3 fill-current ml-0.5" />
            </div>
            Watch Demo
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-3"
        >
          <div className="flex -space-x-2">
            {SOCIAL_PROOF_AVATARS.map((initials, i) => (
              <Avatar
                key={i}
                className={`size-8 border-2 border-background ${AVATAR_COLORS[i]}`}
              >
                <AvatarFallback
                  className={`${AVATAR_COLORS[i]} text-white text-xs font-semibold`}
                >
                  {initials}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="text-foreground font-semibold">12,000+</span>{" "}
            designers already animating
          </div>
        </motion.div>

        {/* Mock Editor UI */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-full max-w-5xl mt-8 select-none"
        >
          <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl shadow-black/50 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-500/80" />
                <div className="size-3 rounded-full bg-yellow-500/80" />
                <div className="size-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="px-3 py-1 rounded-md bg-muted text-xs text-muted-foreground font-mono">
                  motionix — hero-animation.mtx
                </div>
              </div>
            </div>

            {/* Editor body */}
            <div className="flex h-72">
              {/* Canvas area */}
              <div className="flex-1 relative bg-gradient-to-br from-background to-muted/30 flex items-center justify-center">
                {/* Animated shape */}
                <div className="relative">
                  <div className="size-28 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary shadow-lg shadow-brand-primary/40 animate-float" />
                  <div
                    className="absolute -top-3 -right-3 size-12 rounded-xl bg-gradient-to-br from-brand-secondary to-brand-accent opacity-70 animate-float"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute -bottom-2 -left-4 size-8 rounded-lg bg-brand-accent/60 animate-float"
                    style={{ animationDelay: "2s" }}
                  />
                </div>
                {/* Layer panel mock */}
                <div className="absolute left-3 top-3 flex flex-col gap-1.5 w-28">
                  {["Layer 1", "Shape", "Background"].map((layer, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs ${
                        i === 0
                          ? "bg-brand-primary/20 text-brand-accent border border-brand-primary/30"
                          : "text-muted-foreground hover:bg-muted/50"
                      }`}
                    >
                      <div
                        className={`size-2 rounded-sm ${
                          i === 0
                            ? "bg-brand-primary"
                            : i === 1
                            ? "bg-purple-500"
                            : "bg-zinc-600"
                        }`}
                      />
                      {layer}
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline panel */}
              <div className="w-72 border-l border-border/50 bg-muted/20 flex flex-col">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-border/50">
                  <div className="flex gap-1.5">
                    {["◀", "▶", "⏹"].map((ctrl, i) => (
                      <div
                        key={i}
                        className="size-6 rounded text-xs text-muted-foreground flex items-center justify-center pointer-events-none"
                      >
                        {ctrl}
                      </div>
                    ))}
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground font-mono">
                    00:02.4
                  </div>
                </div>
                <div className="flex-1 px-3 py-3 flex flex-col gap-2.5 overflow-hidden">
                  {[
                    { label: "Position", color: "bg-violet-500", width: "70%" },
                    { label: "Opacity", color: "bg-purple-500", width: "55%" },
                    { label: "Scale", color: "bg-indigo-500", width: "85%" },
                  ].map((track, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="text-xs text-muted-foreground">
                        {track.label}
                      </div>
                      <div className="relative h-5 bg-muted/50 rounded-md overflow-hidden">
                        <div
                          className={`h-full ${track.color}/60 rounded-md`}
                          style={{ width: track.width }}
                        />
                        {/* Keyframe dots */}
                        <div className="absolute inset-0 flex items-center px-2 gap-3">
                          {[0.15, 0.45, 0.75].map((pos, ki) => (
                            <div
                              key={ki}
                              className="size-2 rounded-full bg-white shadow-sm border border-white/30 absolute"
                              style={{ left: `${pos * 100}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Scrubber */}
                  <div className="relative h-1 bg-muted rounded-full mt-1 overflow-hidden">
                    <div className="absolute top-0 h-full w-0.5 bg-brand-accent animate-scrub" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow under editor */}
          <div className="h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent mt-0" />
        </motion.div>
      </div>
    </section>
  );
}
