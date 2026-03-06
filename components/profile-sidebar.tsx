import Image from "next/image";
import { SocialLinks } from "./social-links";

export function ProfileSidebar() {
  return (
    <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
      <div className="animate-in">
        <div className="avatar-ring inline-block rounded-full">
          <Image
            src="/images/avatar.jpg"
            alt="Dmytro Virych"
            width={100}
            height={100}
            className="rounded-full"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 lg:items-start">
        <h1 className="animate-in-delay-1 text-3xl font-extrabold tracking-tight">
          <span className="gradient-text">Dmytro Virych</span>
        </h1>
        <p className="animate-in-delay-2 text-sm leading-relaxed text-zinc-500">
          Engineer turned builder. I ship profitable products solo, from
          Ukraine.
        </p>
      </div>

      <div className="animate-in-delay-3">
        <SocialLinks />
      </div>
    </div>
  );
}
