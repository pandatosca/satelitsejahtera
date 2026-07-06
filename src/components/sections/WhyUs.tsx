import { ICON_MAP } from "@/components/common/Icons";
import { HOMEPAGE } from "@/constants/content";

export default function WhyUs() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary-black md:text-4xl">
            {HOMEPAGE.whyUsTitle}
          </h2>
          <p className="mt-3 text-medium-gray">{HOMEPAGE.whyUsSubtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOMEPAGE.whyUs.map((f) => {
            const Icon = ICON_MAP[f.icon] ?? ICON_MAP.spark;
            return (
              <div
                key={f.title}
                className="rounded-xl border border-border-gray p-6 text-center transition-colors hover:border-primary-blue"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-primary-black">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-medium-gray">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
