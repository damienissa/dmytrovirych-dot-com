import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="mb-4 mt-8 text-3xl font-bold tracking-tight text-zinc-900" {...props} />
  ),
  h2: (props) => (
    <h2 className="mb-3 mt-8 text-2xl font-semibold tracking-tight text-zinc-900" {...props} />
  ),
  h3: (props) => (
    <h3 className="mb-2 mt-6 text-xl font-semibold text-zinc-900" {...props} />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-zinc-700" {...props} />
  ),
  a: (props) => (
    <a
      className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mb-4 list-disc space-y-1 pl-6 text-zinc-700" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-4 list-decimal space-y-1 pl-6 text-zinc-700" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mb-4 border-l-2 border-zinc-300 pl-4 italic text-zinc-600"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mb-4 overflow-x-auto rounded-lg bg-zinc-950 p-4 font-mono text-sm text-zinc-100"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-zinc-900" {...props} />
  ),
  hr: () => <hr className="my-8 border-zinc-200" />,
};
