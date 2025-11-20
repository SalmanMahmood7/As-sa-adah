import { useId } from "react";

const FacebookIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="24" height="24" rx="6" fill="#1877F2" />
    <path
      fill="#fff"
      d="M13.8 20v-6.3h2.1l.33-2.63h-2.43V9.53c0-.9.24-1.47 1.5-1.47h1.04V5.62C15.84 5.55 14.99 5.5 14.15 5.5 11.84 5.5 10.25 6.91 10.25 9.5v1.57H8.46v2.63h1.79V20h3.55Z"
    />
  </svg>
);

const InstagramIcon = ({ size = 24 }) => {
  const gradientId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="35%" stopColor="#DD2A7B" />
          <stop offset="65%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradientId})`} />
      <rect
        x="6.5"
        y="6.5"
        width="11"
        height="11"
        rx="3.6"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="3.2"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" />
    </svg>
  );
};

const LinkedInIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="24" height="24" rx="6" fill="#0A66C2" />
    <circle cx="7" cy="7" r="1.5" fill="#fff" />
    <rect x="5.5" y="9.6" width="3" height="9.9" fill="#fff" />
    <path
      fill="#fff"
      d="M18.6 19.5h-3.2v-4.7c0-1.09-.4-1.78-1.32-1.78-.97 0-1.48.7-1.48 1.78v4.7h-3.1V9.6h3v1.3h.04c.43-.88 1.38-1.63 2.87-1.63 2 0 3.19 1.26 3.19 3.62v6.61Z"
    />
  </svg>
);

const YouTubeIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="24" height="24" rx="6" fill="#FF0000" />
    <path fill="#fff" d="M10 16.5V7.5l6 4.5-6 4.5Z" />
  </svg>
);

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/assadahofficial123",
    Icon: FacebookIcon
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/asaadaoffical123?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    Icon: InstagramIcon
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/as-saadah-b605b2357/",
    Icon: LinkedInIcon
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@assadahofficial123",
    Icon: YouTubeIcon
  }
];
