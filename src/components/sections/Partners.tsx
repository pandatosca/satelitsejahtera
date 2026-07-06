import Image from "next/image";
import { HOMEPAGE, PARTNERS } from "@/constants/content";

export default function Partners() {
  return (
    <section className="w-full bg-light-gray">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-primary-black md:text-3xl">
            {HOMEPAGE.partnersTitle}
          </h2>
          <p className="mt-3 text-medium-gray">{HOMEPAGE.partnersSubtitle}</p>
        </div>

        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex h-20 items-center justify-center rounded-lg border border-border-gray bg-white px-4 grayscale transition hover:grayscale-0"
              title={p.name}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
