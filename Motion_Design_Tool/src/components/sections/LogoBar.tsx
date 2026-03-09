import React from "react";
import { Separator } from "@/components/ui/separator";
import { LOGO_COMPANIES } from "@/lib/constants";

function MarqueeRow() {
  return (
    <div className="flex gap-12 shrink-0 animate-marquee" aria-hidden>
      {LOGO_COMPANIES.map((company, i) => (
        <span
          key={i}
          className="text-lg font-display font-bold text-zinc-600 hover:text-zinc-400 transition-colors cursor-default select-none"
        >
          {company}
        </span>
      ))}
    </div>
  );
}

export default function LogoBar() {
  return (
    <section className="py-12 border-y border-border/30 bg-muted/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-4">
          <Separator className="flex-1 bg-border/40" />
          <p className="text-xs text-muted-foreground uppercase tracking-widest whitespace-nowrap select-none">
            Trusted by teams at
          </p>
          <Separator className="flex-1 bg-border/40" />
        </div>
      </div>

      {/* Marquee — two identical rows animate in tandem for a seamless loop */}
      <div className="relative overflow-hidden">
        <div className="flex gap-12 w-max">
          <MarqueeRow />
          <MarqueeRow />
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
