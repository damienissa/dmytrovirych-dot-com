"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { siteConfig } from "@/lib/site";
import { ArrowRightIcon, CheckIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const configured = siteConfig.web3formsKey.length > 0;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!configured) {
      setStatus("error");
      setError(
        "The form isn't connected yet. Email me directly at " +
          siteConfig.email +
          " and I'll get right back to you."
      );
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", siteConfig.web3formsKey);
    formData.append("subject", "New inquiry from dmytrovirych.com");
    formData.append("from_name", "dmytrovirych.com");

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        track("contact_submit");
        form.reset();
      } else {
        setStatus("error");
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError(
        "Couldn't send your message. Please email me at " + siteConfig.email
      );
    }
  }

  if (status === "success") {
    return (
      <div className="gradient-border flex flex-col items-center gap-4 p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-400">
          <CheckIcon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold">Message sent — thank you.</h3>
        <p className="max-w-md text-muted">
          I&apos;ll review your note and get back to you within one business
          day. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="gradient-border p-7 sm:p-9">
      {/* Honeypot for spam bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Work email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="jane@company.com"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Company" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Company name (optional)"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="What do you want to achieve with AI?" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClass} resize-none`}
            placeholder="Tell me a bit about your business and where you think AI could help…"
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-7 w-full justify-center px-6 py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          "Sending…"
        ) : (
          <>
            Send inquiry
            <ArrowRightIcon className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-muted">
        Prefer email? Reach me at{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-indigo-300 hover:underline"
        >
          {siteConfig.email}
        </a>
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-zinc-500 transition-colors focus:border-indigo-400/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/30";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-medium text-zinc-300">
        {label}
      </span>
      {children}
    </label>
  );
}
