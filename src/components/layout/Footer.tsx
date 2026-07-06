import Link from "next/link";
import Image from "next/image";
import { IconMail, IconPhone, IconLocation } from "@/components/common/Icons";
import {
  CONTACT_INFO,
  NAVIGATION_LINKS,
  SOCIAL_LINKS,
  SOLUTIONS,
  COMPANY,
} from "@/constants/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/satset-logo-white.svg"
              alt="SATSET"
              width={150}
              height={45}
              className="mb-4 h-10 w-auto"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              {COMPANY.legalName}. {COMPANY.tagline} — delivering fast, reliable,
              and affordable IT solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {NAVIGATION_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              {SOLUTIONS.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/solutions#${s.id}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-primary-blue" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-primary-blue" />
                <a href={`tel:${CONTACT_INFO.phoneHref}`} className="hover:text-white">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <IconLocation className="mt-0.5 h-5 w-5 shrink-0 text-primary-blue" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3 text-sm">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-gray-500 sm:flex-row">
          <p>&copy; {year} {COMPANY.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
