"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { call, siteConfig } from "@/lib/site";
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
    formData.append("subject", "New AI Adoption Call request — dmytrovirych.com");
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
      <div className="flex flex-col items-center gap-4 rounded-[3px] border border-[var(--hair)] bg-bone/[0.035] p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--hair-strong)] text-sand">
          <CheckIcon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-medium tracking-[-0.02em]">Request sent — thank you.</h3>
        <p className="max-w-md font-light text-mist">
          I&apos;ll review your note and come back within one business day
          with a couple of slots and a payment link for the {call.priceLabel}{" "}
          call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[3px] border border-[var(--hair)] bg-bone/[0.035] p-7 sm:p-10">
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
        <Field label="Where do you think the time or money is going?" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClass} resize-none`}
            placeholder="What your business does, roughly how many people, and the work that feels most repetitive…"
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-[3px] border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-8 w-full px-6 py-4 text-[15px] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          "Sending…"
        ) : (
          <>
            Request the {call.priceLabel} call
            <ArrowRightIcon className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-5 text-center text-[13px] font-light text-mist">
        Prefer email? Reach me at{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-sand hover:underline"
        >
          {siteConfig.email}
        </a>
      </p>
    </form>
  );
}

const inputClass = "field";

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
      <span className="mb-2 block text-[13px] font-medium uppercase tracking-[0.12em] text-mist">
        {label}
      </span>
      {children}
    </label>
  );
}
