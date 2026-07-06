import Image from "next/image";
import type { Metadata } from "next";
import { ICON_MAP, IconCheck } from "@/components/common/Icons";
import { SOLUTIONS, IMAGES } from "@/constants/content";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Solutions — SATSET IT Services",
  description:
    "Enterprise software, custom development, IT integration, and support & maintenance from SATSET.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-light-gray to-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-4xl font-bold text-primary-black md:text-5xl">
            Our Solutions
          </h1>
          <p className="mt-4 text-lg text-medium-gray">
            End-to-end technology services designed to move your business
            forward — from strategy to deployment and ongoing support.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 md:py-20">
          {SOLUTIONS.map((s, i) => {
            const Icon = ICON_MAP[s.icon] ?? ICON_MAP.briefcase;
            const img = IMAGES[s.image as keyof typeof IMAGES];
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.id}
                id={s.id}
                className="grid scroll-mt-24 items-center gap-8 md:grid-cols-2"
              >
                <div className={reverse ? "md:order-2" : ""}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-blue/10 text-primary-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-black md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-medium-gray">
                    {s.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-medium-gray">
                        <IconCheck className="h-5 w-5 shrink-0 text-primary-blue" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`overflow-hidden rounded-2xl border border-border-gray ${
                    reverse ? "md:order-1" : ""
                  }`}
                >
                  <Image
                    src={img}
                    alt={s.title}
                    width={800}
                    height={520}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
