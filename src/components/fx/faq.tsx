"use client";

import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, EASE } from "./motion-primitives";

const FAQS = [
  {
    question: "Are these effects really pure CSS?",
    answer:
      "Yes — 100%. Every effect is built with plain HTML and CSS only: keyframe animations, transitions, transforms, gradients and pseudo-elements. No JavaScript, no external libraries, no images.",
  },
  {
    question: "Can I use the effects in commercial projects?",
    answer:
      "Absolutely. All effects in the library are free to use in personal, client and commercial work — no attribution required. Copy the code and ship it.",
  },
  {
    question: "Will they work with React, Next.js or WordPress?",
    answer:
      "Yes. Because the code is plain HTML and CSS, it works anywhere CSS works — React, Next.js, Vue, Svelte, WordPress, Shopify, emails with CSS support, and plain static sites. Just paste the HTML into your markup and the CSS into your stylesheet.",
  },
  {
    question: "Will these effects slow down my website?",
    answer:
      "No. Each snippet is a few lines of CSS with no runtime cost. Animations run on the GPU via transform and opacity, which is exactly how browsers render them efficiently.",
  },
  {
    question: "How do I use an effect?",
    answer:
      "Open any card, switch between the HTML and CSS tabs, hit Copy, and paste both parts into your project. Rename the .fx-* classes if you like — each effect is namespaced so multiple effects never collide.",
  },
  {
    question: "Do you add new effects?",
    answer:
      "Yes — the library keeps growing with modern CSS techniques like @property, scroll-driven animations, 3D transforms and more. New effects land in the gallery as they're crafted.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-y bg-muted/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="text-center">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#f07025]">
              FAQ
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Everything you need to know before copying your first effect.
            </p>
          </Reveal>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: EASE }}
            >
              <AccordionItem value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline hover:text-[#f07025]">
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="h-4 w-4 shrink-0 text-[#f07025]" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
