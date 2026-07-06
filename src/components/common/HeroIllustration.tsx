export default function HeroIllustration({
  className = "w-full h-auto",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 480 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hi-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0064C9" />
          <stop offset="1" stopColor="#0052A3" />
        </linearGradient>
      </defs>

      {/* soft background blobs */}
      <circle cx="380" cy="90" r="70" fill="#0064C9" opacity="0.08" />
      <circle cx="90" cy="320" r="55" fill="#10B981" opacity="0.1" />

      {/* main dashboard card */}
      <rect x="70" y="70" width="300" height="210" rx="16" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
      <rect x="70" y="70" width="300" height="40" rx="16" fill="url(#hi-blue)" />
      <rect x="70" y="94" width="300" height="16" fill="url(#hi-blue)" />
      <circle cx="90" cy="90" r="5" fill="#FFFFFF" opacity="0.8" />
      <circle cx="106" cy="90" r="5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="122" cy="90" r="5" fill="#FFFFFF" opacity="0.4" />

      {/* bar chart */}
      <rect x="92" y="200" width="22" height="50" rx="4" fill="#0064C9" opacity="0.5" />
      <rect x="124" y="175" width="22" height="75" rx="4" fill="#0064C9" opacity="0.7" />
      <rect x="156" y="150" width="22" height="100" rx="4" fill="#0064C9" />
      <rect x="188" y="185" width="22" height="65" rx="4" fill="#10B981" opacity="0.8" />

      {/* line + text rows */}
      <rect x="240" y="140" width="110" height="10" rx="5" fill="#E5E7EB" />
      <rect x="240" y="162" width="90" height="10" rx="5" fill="#E5E7EB" />
      <rect x="240" y="184" width="110" height="10" rx="5" fill="#E5E7EB" />
      <rect x="240" y="206" width="70" height="10" rx="5" fill="#0064C9" opacity="0.4" />

      {/* floating badge: check */}
      <g>
        <circle cx="360" cy="250" r="34" fill="#10B981" />
        <path d="M346 250l9 9 18-20" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* floating small card */}
      <g>
        <rect x="60" y="150" width="70" height="54" rx="10" fill="url(#hi-blue)" />
        <path d="M78 178l10 10 18-20" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
