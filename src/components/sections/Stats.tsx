import { HOMEPAGE } from "@/constants/content";

export default function Stats() {
  return (
    <section className="w-full border-y border-border-gray bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        {HOMEPAGE.stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold text-primary-blue md:text-4xl">
              {s.number}
            </p>
            <p className="mt-1 text-sm text-medium-gray">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
