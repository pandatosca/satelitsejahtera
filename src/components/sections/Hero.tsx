import Link from "next/link";
import { IconArrow } from "@/components/common/Icons";
import { HOMEPAGE } from "@/constants/content";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        aria-hidden
      />
      {/* Dark gradient overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-black/90 via-primary-black/75 to-primary-black/40" aria-hidden />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
            {HOMEPAGE.heroBadge}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {HOMEPAGE.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-200">
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
              className="inline-flex items-center justify-center rounded-md border-2 border-white/70 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-primary-black"
            >
              {HOMEPAGE.heroCtaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
