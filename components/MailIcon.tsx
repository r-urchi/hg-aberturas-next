export default function MailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg className="mail-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7.5 8 6 8-6" />
    </svg>
  );
}
