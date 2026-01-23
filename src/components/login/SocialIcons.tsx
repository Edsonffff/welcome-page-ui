import { Facebook, Twitter, Instagram } from "lucide-react";

const SocialIcons = () => {
  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-muted-foreground font-medium tracking-wider">
        FOLLOW
      </span>
      <div className="flex gap-3">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="social-icon"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
