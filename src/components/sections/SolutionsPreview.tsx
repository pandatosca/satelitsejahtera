import Link from "next/link";
import { ICON_MAP, IconArrow, IconCheck } from "@/components/common/Icons";
import { HOMEPAGE, SOLUTIONS } from "@/constants/content";

export default function SolutionsPreview() {
  return (
    <section id="solutions" className="w-full bg-light-gray">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary-black md:text-4xl">
            {HOMEPAGE.solutionsTitle}
          </h2>
          <p className="mt-3 text-medium-gray">{HOMEPAGE.solutionsSubtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {SOLUTIONS.map((s) => {
            const Icon = ICON_MAP[s.icon] ?? ICON_MAP.briefcase;
            return (
              <div
                key={s.id}
                className="flex flex-col rounded-xl border border-border-gray bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg md:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-blue/10 text-primary-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary-black">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-medium-gray">
                  {s.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-medium-gray">
                      <IconCheck className="h-4 w-4 shrink-0 text-primary-blue" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/solutions#${s.id}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary-blue hover:gap-2"
                >
                  Learn more <IconArrow className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
