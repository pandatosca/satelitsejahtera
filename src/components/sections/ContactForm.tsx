"use client";

import { useState } from "react";
import { CONTACT_INFO, CONTACT_PAGE } from "@/constants/content";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Static site: open the user's email client with a prefilled message.
    const subject = encodeURIComponent(`Website inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\n` +
        `Email: ${data.get("email")}\n` +
        `Phone: ${data.get("phone") ?? ""}\n` +
        `Company: ${data.get("company") ?? ""}\n\n` +
        `${data.get("message")}`,
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border-gray bg-white p-8"
    >
      {sent && (
        <p className="mb-6 rounded-md bg-success/10 px-4 py-3 text-sm text-success">
          {CONTACT_PAGE.successMessage}
        </p>
      )}
      <div className="grid gap-5">
        {CONTACT_PAGE.formFields.map((f) => (
          <div key={f.name}>
            <label
              htmlFor={f.name}
              className="mb-1.5 block text-sm font-medium text-primary-black"
            >
              {f.label}
              {f.required && <span className="text-error"> *</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea
                id={f.name}
                name={f.name}
                required={f.required}
                rows={5}
                className="w-full rounded-md border border-border-gray px-4 py-2.5 text-primary-black outline-none transition focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20"
              />
            ) : (
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required={f.required}
                className="w-full rounded-md border border-border-gray px-4 py-2.5 text-primary-black outline-none transition focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="mt-2 rounded-md bg-primary-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-hover"
        >
          {CONTACT_PAGE.submitButton}
        </button>
      </div>
    </form>
  );
}
