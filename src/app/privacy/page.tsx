import type { Metadata } from "next";
import { COMPANY } from "@/constants/content";

export const metadata: Metadata = { title: "Privacy Policy — SATSET" };

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <h1 className="text-3xl font-bold text-primary-black md:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 leading-relaxed text-medium-gray">
        {COMPANY.legalName} respects your privacy. We only collect the
        information you provide through our contact form — such as your name,
        email, and message — and use it solely to respond to your inquiry. We do
        not sell or share your personal data with third parties.
      </p>
      <p className="mt-4 leading-relaxed text-medium-gray">
        For any questions about how your data is handled, please contact us at
        sales@satelit-sejahtera.id.
      </p>
    </section>
  );
}
