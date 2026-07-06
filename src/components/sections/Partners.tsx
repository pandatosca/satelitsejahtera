import fs from "fs";
import path from "path";
import Image from "next/image";
import { HOMEPAGE } from "@/constants/content";

// Automatically reads every logo file inside /public/partners/.
// Just drop a PNG/JPG/SVG there — it shows up. No code changes needed.
function getPartners() {
  const dir = path.join(process.cwd(), "public", "partners");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return files
    .filter((f) => /\.(png|jpe?g|svg|webp)$/i.test(f))
    .sort() // alphabetical; prefix files like "01-zimbra.png" to control order
    .map((file) => {
      const base = file
        .replace(/\.[^.]+$/, "") // remove extension
        .replace(/^\d+[-_]/, ""); // remove optional leading "01-" order prefix
      const name = base
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return { name, logo: `/partners/${file}` };
    });
}

export default function Partners() {
  const partners = getPartners();
  if (partners.length === 0) return null;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-primary-black md:text-3xl">
            {HOMEPAGE.partnersTitle}
          </h2>
          <p className="mt-3 text-medium-gray">{HOMEPAGE.partnersSubtitle}</p>
        </div>

        <div className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((p) => (
            <div
              key={p.logo}
              className="flex h-24 items-center justify-center"
              title={p.name}
            >
              <Image
                src={p.logo}
                alt={`${p.name} logo`}
                width={220}
                height={120}
                className="max-h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
