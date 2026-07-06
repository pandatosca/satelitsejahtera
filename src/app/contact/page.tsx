import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import { IconMail, IconPhone, IconLocation } from "@/components/common/Icons";
import { CONTACT_INFO, CONTACT_PAGE, SOCIAL_LINKS } from "@/constants/content";

export const metadata: Metadata = {
  title: "Contact SATSET",
  description: CONTACT_PAGE.subtitle,
};

export default function ContactPage() {
  return (
    <section className="w-full bg-gradient-to-b from-light-gray to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-primary-black md:text-5xl">
            {CONTACT_PAGE.title}
          </h1>
          <p className="mt-4 text-lg text-medium-gray">{CONTACT_PAGE.subtitle}</p>
        </div>

        <div className="grid gap-10 md:grid-cols-5">
          {/* Contact info */}
          <div className="md:col-span-2">
            <div className="space-y-6 rounded-xl border border-border-gray bg-white p-8">
              <div className="flex items-start gap-3">
                <IconMail className="mt-0.5 h-6 w-6 shrink-0 text-primary-blue" />
                <div>
                  <p className="font-semibold text-primary-black">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-medium-gray hover:text-primary-blue">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconPhone className="mt-0.5 h-6 w-6 shrink-0 text-primary-blue" />
                <div>
                  <p className="font-semibold text-primary-black">Phone</p>
                  <a href={`tel:${CONTACT_INFO.phoneHref}`} className="text-medium-gray hover:text-primary-blue">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconLocation className="mt-0.5 h-6 w-6 shrink-0 text-primary-blue" />
                <div>
                  <p className="font-semibold text-primary-black">Location</p>
                  <p className="text-medium-gray">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="border-t border-border-gray pt-6">
                <p className="mb-2 font-semibold text-primary-black">Follow us</p>
                <div className="flex gap-4 text-sm">
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">LinkedIn</a>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Instagram</a>
                  <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-xl border border-border-gray">
          <iframe
            title="SATSET office location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              "Plaza Oleos, Jl. T.B. Simatupang No. 53A, Jakarta Selatan 12520",
            )}&z=16&output=embed`}
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
