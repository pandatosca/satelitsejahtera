"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconMenu, IconClose } from "@/components/common/Icons";
import { NAVIGATION_LINKS } from "@/constants/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-gray bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="SATSET home">
          <Image
            src="/satset-logo.svg"
            alt="SATSET"
            width={150}
            height={45}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAVIGATION_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-black transition-colors hover:text-primary-blue"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-primary-blue px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary-black md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border-gray bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {NAVIGATION_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-medium text-primary-black hover:bg-light-gray hover:text-primary-blue"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md bg-primary-blue px-3 py-2 text-center font-semibold text-white hover:bg-blue-hover"
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
