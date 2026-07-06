import type { Metadata } from "next";
import { COMPANY } from "@/constants/content";

export const metadata: Metadata = { title: "Terms of Service — SATSET" };

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <h1 className="text-3xl font-bold text-primary-black md:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-4 leading-relaxed text-medium-gray">
        By accessing this website, you agree to use it for lawful purposes only.
        All content on this site is the property of {COMPANY.legalName} and may
        not be reproduced without permission.
      </p>
      <p className="mt-4 leading-relaxed text-medium-gray">
        Our services are provided under individual agreements. For details about
        a specific engagement, please contact our team.
      </p>
    </section>
  );
}
