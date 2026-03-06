import { XIcon, LinkedInIcon, GitHubIcon } from "./icons";

const socials = [
  {
    name: "X",
    url: "https://x.com/FounderDmytro",
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/damienissa",
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/damienissa",
    icon: GitHubIcon,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="text-zinc-400 transition-all hover:text-zinc-900 hover:scale-110"
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
