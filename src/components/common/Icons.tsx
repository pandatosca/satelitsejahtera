// Clean line icons (stroke-based, inherit currentColor).
type IconProps = { className?: string };

const base = "w-6 h-6";

function Svg({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className ?? base}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const IconSpeed = (p: IconProps) => (
  <Svg {...p}><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" /></Svg>
);
export const IconShield = (p: IconProps) => (
  <Svg {...p}><path d="M12 3 5 6v6c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></Svg>
);
export const IconWallet = (p: IconProps) => (
  <Svg {...p}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /><circle cx="16" cy="14" r="1.2" /></Svg>
);
export const IconHandshake = (p: IconProps) => (
  <Svg {...p}><path d="m11 17 2 2 4-4" /><path d="M3 12l4-4 5 4 2-2 7 6-3 3-4-3" /><path d="M7 8 3 12" /></Svg>
);
export const IconBriefcase = (p: IconProps) => (
  <Svg {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></Svg>
);
export const IconCode = (p: IconProps) => (
  <Svg {...p}><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m13 6-2 12" /></Svg>
);
export const IconLink = (p: IconProps) => (
  <Svg {...p}><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" /></Svg>
);
export const IconHeadset = (p: IconProps) => (
  <Svg {...p}><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="13" width="4" height="6" rx="1" /><rect x="17" y="13" width="4" height="6" rx="1" /><path d="M20 19a4 4 0 0 1-4 3h-2" /></Svg>
);
export const IconSpark = (p: IconProps) => (
  <Svg {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="m6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></Svg>
);
export const IconStar = (p: IconProps) => (
  <Svg {...p}><path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8-4.3-4.1 5.9-.9L12 3Z" /></Svg>
);
export const IconArrow = (p: IconProps) => (
  <Svg {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Svg>
);
export const IconCheck = (p: IconProps) => (
  <Svg {...p}><path d="m5 12 5 5 9-11" /></Svg>
);
export const IconMenu = (p: IconProps) => (
  <Svg {...p}><path d="M4 6h16M4 12h16M4 18h16" /></Svg>
);
export const IconClose = (p: IconProps) => (
  <Svg {...p}><path d="M6 6 18 18M18 6 6 18" /></Svg>
);
export const IconMail = (p: IconProps) => (
  <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Svg>
);
export const IconPhone = (p: IconProps) => (
  <Svg {...p}><path d="M4 5c0-1 1-2 2-2h2l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v2c0 1-1 2-2 2A16 16 0 0 1 4 5Z" /></Svg>
);
export const IconLocation = (p: IconProps) => (
  <Svg {...p}><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></Svg>
);

// Map string -> component (used by content.ts icon keys)
export const ICON_MAP: Record<string, (p: IconProps) => React.ReactElement> = {
  speed: IconSpeed,
  shield: IconShield,
  wallet: IconWallet,
  handshake: IconHandshake,
  briefcase: IconBriefcase,
  code: IconCode,
  link: IconLink,
  headset: IconHeadset,
  spark: IconSpark,
  star: IconStar,
};
