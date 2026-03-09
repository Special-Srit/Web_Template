import React from "react";
import { Separator } from "@/components/ui/separator";
import { TwitterIcon, GithubIcon, LinkedinIcon } from "lucide-react";

const FOOTER_LINKS = {
  Product: ["Features", "Changelog", "Roadmap", "Status"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg shadow-brand-primary/30">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 2L15.5 6V12L9 16L2.5 12V6L9 2Z"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="9" cy="9" r="2.5" fill="white" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg gradient-text">
                Motionix
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The professional timeline editor for UI animation, product demos,
              and cinematic motion graphics.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="text-muted-foreground hover:text-brand-accent transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="size-4" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-brand-accent transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-brand-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-foreground">{heading}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-border/50" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Motionix. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-brand-accent font-medium">Next.js</span> &{" "}
            <span className="text-brand-accent font-medium">shadcn</span> by srit
          </p>
        </div>
      </div>
    </footer>
  );
}
