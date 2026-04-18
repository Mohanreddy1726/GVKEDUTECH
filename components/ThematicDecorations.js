/* Floating thematic SVG decorations for different page contexts.
   Rendered as subtle background elements with smooth infinite animations. */

/* Stethoscope (MBBS) */
export const StethoscopeDecoration = ({ className = "" }) => (
  <svg
    className={`absolute opacity-[0.06] text-accent animate-float-slow ${className}`}
    width="120"
    height="120"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.8 2.62a2 2 0 0 1 1.52.05L7.95 3.5a2 2 0 0 1 1.05 1.76V9a3 3 0 0 1-6 0V5.26a2 2 0 0 1 1.05-1.76l1.63-.82z" />
    <path d="M2 9h2" />
    <path d="M8 9h2" />
    <path d="M6 9v5a5 5 0 0 0 10 0v-1a2 2 0 1 1 4 0v1a9 9 0 0 1-18 0" />
  </svg>
);

/* Heartbeat Pulse (MBBS) */
export const HeartbeatDecoration = ({ className = "" }) => (
  <svg
    className={`absolute opacity-[0.05] text-accent animate-pulse-slow ${className}`}
    width="200"
    height="60"
    viewBox="0 0 200 60"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="0,30 40,30 50,10 60,50 70,20 80,40 90,30 200,30" />
  </svg>
);

/* Airplane (Foreign Education / Travel) */
export const AirplaneDecoration = ({ className = "" }) => (
  <svg
    className={`absolute opacity-[0.06] text-primary animate-fly ${className}`}
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
);

/* Dotted flight path */
export const FlightPathDecoration = ({ className = "" }) => (
  <svg
    className={`absolute opacity-[0.04] text-primary ${className}`}
    width="300"
    height="100"
    viewBox="0 0 300 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeDasharray="6 6"
  >
    <path d="M0 80 Q75 10 150 50 Q225 90 300 20" className="animate-dash" />
  </svg>
);

/* Globe (International) */
export const GlobeDecoration = ({ className = "" }) => (
  <svg
    className={`absolute opacity-[0.05] text-highlight animate-spin-very-slow ${className}`}
    width="100"
    height="100"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

/* Graduation Cap (Masters) */
export const GraduationCapDecoration = ({ className = "" }) => (
  <svg
    className={`absolute opacity-[0.06] text-primary animate-float-gentle ${className}`}
    width="100"
    height="100"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5" />
  </svg>
);

/* Book (Education) */
export const BookDecoration = ({ className = "" }) => (
  <svg
    className={`absolute opacity-[0.05] text-accent animate-float-slow ${className}`}
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

/* DNA Helix (Medical) */
export const DNADecoration = ({ className = "" }) => (
  <svg
    className={`absolute opacity-[0.04] text-accent animate-float-gentle ${className}`}
    width="60"
    height="160"
    viewBox="0 0 60 160"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M10 0 Q30 20 50 40 Q30 60 10 80 Q30 100 50 120 Q30 140 10 160" />
    <path d="M50 0 Q30 20 10 40 Q30 60 50 80 Q30 100 10 120 Q30 140 50 160" />
    <line x1="15" y1="20" x2="45" y2="20" />
    <line x1="15" y1="60" x2="45" y2="60" />
    <line x1="15" y1="100" x2="45" y2="100" />
    <line x1="15" y1="140" x2="45" y2="140" />
  </svg>
);