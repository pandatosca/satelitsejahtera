import Link from "next/link";
import HeroIllustration from "@/components/common/HeroIllustration";
import { IconArrow } from "@/components/common/Icons";
import { HOMEPAGE } from "@/constants/content";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-light-gray to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div>
            <span className="inline-block rounded-full bg-primary-blue/10 px-3 py-1 text-xs font-semibold text-primary-blue">
              {HOMEPAGE.heroBadge}
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-primary-black md:text-5xl">
              {HOMEPAGE.heroTitle}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-medium-gray">
              {HOMEPAGE.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-hover"
              >
                {HOMEPAGE.heroCtaPrimary}
                <IconArrow className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-primary-blue px-6 py-3 font-semibold text-primary-blue transition-colors hover:bg-primary-blue/5"
              >
                {HOMEPAGE.heroCtaSecondary}
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <HeroIllustration className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
