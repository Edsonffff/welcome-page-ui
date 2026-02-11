import { Facebook, Instagram } from "lucide-react";

const PinterestIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 12a4 4 0 1 1 8 0c0 3-2 5-4 7" />
    <path d="M9 17l1-5" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const SocialIcons = () => {
  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: PinterestIcon, href: "#", label: "Pinterest" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 pt-2">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 border border-white/20 hover:text-white hover:border-white/50 transition-all duration-300"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
};
export default SocialIcons;
