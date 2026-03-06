import { ProfileSidebar } from "@/components/profile-sidebar";
import { ProjectsSection } from "@/components/projects-section";
import { BlogPreviewSection } from "@/components/blog-preview-section";

export default function Home() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 py-8 lg:py-12">
      {/* Page-level mesh gradient */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
        {/* Left: sticky profile sidebar */}
        <aside className="lg:sticky lg:top-12 lg:w-[280px] lg:shrink-0 lg:self-start">
          <ProfileSidebar />
        </aside>

        {/* Right: projects + blog */}
        <main className="min-w-0 flex-1">
          <ProjectsSection />
          <BlogPreviewSection />
          <footer className="pt-8 pb-4 text-center text-sm text-zinc-400 lg:text-left">
            &copy; {new Date().getFullYear()} Dmytro Virych
          </footer>
        </main>
      </div>
    </div>
  );
}
