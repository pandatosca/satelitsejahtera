import Link from "next/link";
import { IconArrow } from "@/components/common/Icons";
import { HOMEPAGE } from "@/constants/content";

export default function CTA() {
  return (
    <section className="w-full bg-gradient-to-r from-primary-blue to-blue-hover">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          {HOMEPAGE.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          {HOMEPAGE.ctaSubtitle}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-primary-blue transition-colors hover:bg-gray-100"
          >
            {HOMEPAGE.ctaPrimary}
            <IconArrow className="h-5 w-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-primary-blue"
          >
            {HOMEPAGE.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
