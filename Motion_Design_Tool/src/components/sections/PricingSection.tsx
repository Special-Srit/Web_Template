"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon, XIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRICING_TIERS } from "@/lib/constants";

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="pricing" className="py-28 relative">
      <div className="absolute inset-0 bg-muted/5" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <Badge variant="purple">Pricing</Badge>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            No hidden fees. Cancel any time.
          </p>

          {/* Billing toggle */}
          <Tabs
            defaultValue="monthly"
            onValueChange={(v) => setBilling(v as "monthly" | "annual")}
            className="mt-2"
          >
            <TabsList className="bg-muted/50">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual" className="gap-2">
                Annual
                <Badge variant="purple" className="text-xs py-0 px-1.5">
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PRICING_TIERS.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={tier.highlighted ? "md:-translate-y-4" : ""}
            >
              <Card
                className={`card-gradient relative overflow-hidden transition-all duration-300 ${
                  tier.highlighted
                    ? "border-brand-primary/60 ring-2 ring-brand-primary/40 shadow-2xl shadow-brand-primary/20"
                    : "border-border/40 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/10"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent" />
                )}
                {tier.highlighted && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="purple" className="text-xs">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold">{tier.name}</CardTitle>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-4xl font-black">
                      {billing === "monthly"
                        ? tier.monthlyPrice === 0
                          ? "Free"
                          : `$${tier.monthlyPrice}`
                        : tier.annualPrice === 0
                        ? "Free"
                        : `$${tier.annualPrice}`}
                    </span>
                    {(billing === "monthly" ? tier.monthlyPrice : tier.annualPrice) > 0 && (
                      <span className="text-muted-foreground text-sm mb-1">/mo</span>
                    )}
                  </div>
                  {billing === "annual" && tier.monthlyPrice > 0 && (
                    <p className="text-xs text-brand-accent">
                      Billed annually (${tier.annualPrice * 12}/yr)
                    </p>
                  )}
                  <CardDescription className="mt-1">{tier.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-5">
                  <Button
                    className={`w-full ${
                      tier.highlighted
                        ? "glow-button"
                        : tier.name === "Team"
                        ? ""
                        : ""
                    }`}
                    variant={
                      tier.highlighted
                        ? "default"
                        : tier.name === "Team"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {tier.cta}
                  </Button>

                  <ul className="flex flex-col gap-2.5">
                    {tier.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-2.5 text-sm">
                        {feature.included ? (
                          <CheckIcon className="size-4 text-brand-accent shrink-0" />
                        ) : (
                          <XIcon className="size-4 text-muted-foreground/40 shrink-0" />
                        )}
                        <span
                          className={
                            feature.included ? "text-foreground" : "text-muted-foreground/50"
                          }
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
