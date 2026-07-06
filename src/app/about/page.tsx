import Image from "next/image";
import type { Metadata } from "next";
import { ICON_MAP } from "@/components/common/Icons";
import { ABOUT_PAGE, IMAGES } from "@/constants/content";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About SATSET — Your Digital Excellence Partner",
  description: ABOUT_PAGE.intro,
};

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="w-full bg-gradient-to-b from-light-gray to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-blue">
              {ABOUT_PAGE.tagline}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-primary-black md:text-5xl">
              {ABOUT_PAGE.title}
            </h1>
            <p className="mt-5 leading-relaxed text-medium-gray">
              {ABOUT_PAGE.intro}
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border-gray">
            <Image
              src={IMAGES.aboutTeam}
              alt="SATSET team collaborating"
              width={800}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
          <div className="rounded-xl border border-border-gray bg-light-gray p-8">
            <h2 className="text-2xl font-bold text-primary-black">
              {ABOUT_PAGE.missionTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-medium-gray">
              {ABOUT_PAGE.mission}
            </p>
          </div>
          <div className="rounded-xl border border-border-gray bg-light-gray p-8">
            <h2 className="text-2xl font-bold text-primary-black">
              {ABOUT_PAGE.visionTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-medium-gray">
              {ABOUT_PAGE.vision}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-light-gray">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary-black md:text-4xl">
            {ABOUT_PAGE.valuesTitle}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT_PAGE.values.map((v) => {
              const Icon = ICON_MAP[v.icon] ?? ICON_MAP.star;
              return (
                <div key={v.title} className="rounded-xl border border-border-gray bg-white p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-blue/10 text-primary-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-black">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-medium-gray">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary-black md:text-4xl">
            {ABOUT_PAGE.timelineTitle}
          </h2>
          <ol className="relative border-l-2 border-border-gray">
            {ABOUT_PAGE.timeline.map((t) => (
              <li key={t.year} className="mb-8 ml-6 last:mb-0">
                <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-primary-blue" />
                <p className="text-sm font-bold text-primary-blue">{t.year}</p>
                <p className="text-medium-gray">{t.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </>
  );
}
