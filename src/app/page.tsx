import { SiteFooter } from "@/components/fx/site-footer";
import { SiteHeader } from "@/components/fx/site-header";
import { Hero } from "@/components/fx/hero";
import { EffectGallery } from "@/components/fx/effect-gallery";
import { HowItWorks } from "@/components/fx/how-it-works";
import { Features } from "@/components/fx/features";
import { ColorPalettes } from "@/components/fx/color-palettes";
import { Faq } from "@/components/fx/faq";
import { FeedbackSection } from "@/components/fx/feedback";
import { CtaBand } from "@/components/fx/cta-band";
import { BackToTop } from "@/components/fx/back-to-top";
import { PageTransition } from "@/components/fx/motion-primitives";

export default function Home() {
  return (
    <PageTransition className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ColorPalettes />
        <EffectGallery />
        <HowItWorks />
        <Features />
        <Faq />
        <FeedbackSection />
        <CtaBand />
      </main>
      <SiteFooter />
      <BackToTop />
    </PageTransition>
  );
}
