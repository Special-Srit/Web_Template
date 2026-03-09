"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const DEMO_TABS = [
  {
    value: "keyframes",
    label: "Keyframes",
    title: "Frame-accurate control",
    points: [
      "Add keyframes at any frame with a single click",
      "Bezier curve editor for custom easing",
      "Copy & paste keyframes across layers",
      "Bulk transform with multi-select",
      "Keyframe snapping and grid alignment",
    ],
  },
  {
    value: "easing",
    label: "Easing",
    title: "Motion that feels alive",
    points: [
      "30+ built-in easing presets (spring, bounce, elastic)",
      "Custom cubic bezier editor with live preview",
      "Physics-based spring with configurable stiffness & damping",
      "Per-property easing — position, opacity, scale",
      "Import easing curves from CSS tokens",
    ],
  },
  {
    value: "export",
    label: "Export",
    title: "Ship to any platform",
    points: [
      "One-click Lottie JSON export, optimized for web",
      "MP4 / WebM with custom resolution & frame rate",
      "GIF with dithering and palette optimization",
      "CSS @keyframes — clean, production-ready code",
      "Batch export multiple sequences at once",
    ],
  },
];

export default function DemoSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <Badge variant="purple">See it in action</Badge>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
            A timeline editor built for precision
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Every detail of your animation, under complete control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Mock app window */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 select-none"
          >
            <div className="rounded-2xl border border-border/50 bg-card shadow-2xl shadow-black/50 overflow-hidden">
              {/* Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex gap-1 ml-2">
                  {["Intro", "Loop", "Exit"].map((tab) => (
                    <div
                      key={tab}
                      className="px-3 py-1 rounded-t text-xs text-muted-foreground hover:text-foreground first:bg-muted first:text-foreground cursor-default"
                    >
                      {tab}
                    </div>
                  ))}
                </div>
              </div>

              {/* Canvas */}
              <div className="h-48 bg-gradient-to-br from-background via-muted/10 to-background flex items-center justify-center relative">
                <div className="absolute inset-0 bg-grid opacity-30" />
                {/* Center animation preview */}
                <div className="relative flex items-center gap-6">
                  <motion.div
                    animate={{ x: [0, 12, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="size-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary shadow-lg shadow-brand-primary/40"
                  />
                  <motion.div
                    animate={{ x: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="size-10 rounded-xl bg-gradient-to-br from-brand-secondary to-brand-accent"
                  />
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="size-8 rounded-lg bg-brand-accent/60"
                  />
                </div>
              </div>

              {/* Timeline */}
              <div className="border-t border-border/50 bg-muted/20 p-3">
                <div className="flex items-center gap-2 mb-3 pointer-events-none">
                  <div className="text-xs text-muted-foreground px-2 py-1 rounded">◀</div>
                  <div className="text-xs bg-brand-primary text-white px-3 py-1 rounded">▶ Play</div>
                  <div className="text-xs text-muted-foreground px-2 py-1 rounded">⏹</div>
                  <div className="ml-auto text-xs font-mono text-muted-foreground">00:00 / 00:03</div>
                </div>
                {/* Tracks */}
                <div className="flex flex-col gap-1.5">
                  {[
                    { name: "Position X", color: "bg-violet-500", w: "65%" },
                    { name: "Opacity", color: "bg-purple-500", w: "80%" },
                    { name: "Scale", color: "bg-indigo-500", w: "50%" },
                    { name: "Rotation", color: "bg-fuchsia-500", w: "40%" },
                  ].map((track, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-20 text-xs text-muted-foreground truncate">{track.name}</div>
                      <div className="flex-1 h-4 bg-muted/50 rounded relative overflow-hidden">
                        <div className={`h-full ${track.color}/50 rounded`} style={{ width: track.w }} />
                        {[0.2, 0.5, 0.8].map((p, ki) => (
                          <div
                            key={ki}
                            className="absolute top-1/2 -translate-y-1/2 size-1.5 rounded-full bg-white/80 shadow"
                            style={{ left: `${p * parseFloat(track.w)}` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Scrubber bar */}
                <div className="relative h-1 bg-muted/60 rounded-full mt-2 overflow-hidden">
                  <div className="absolute h-full w-0.5 bg-brand-accent animate-scrub" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tabs panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Tabs defaultValue="keyframes">
              <TabsList className="w-full bg-muted/50">
                {DEMO_TABS.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value} className="flex-1 text-xs">
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {DEMO_TABS.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="mt-6">
                  <div className="flex flex-col gap-5">
                    <h3 className="text-xl font-bold">{tab.title}</h3>
                    <ul className="flex flex-col gap-3">
                      {tab.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="size-5 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="size-1.5 rounded-full bg-brand-accent" />
                          </div>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Button size="sm" variant="outline" className="w-fit border-brand-primary/40 text-brand-accent hover:bg-brand-primary/10 hover:border-brand-primary/60">
                      Try this feature
                      <ArrowRightIcon className="size-3" />
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
