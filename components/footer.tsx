import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 border-t border-zinc-200 py-8">
      <SocialLinks />
      <p className="text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} Dmytro Virych
      </p>
    </footer>
  );
}
