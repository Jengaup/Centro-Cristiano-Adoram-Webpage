"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

interface Props {
  title: string;
  excerpt: string;
  label: string;
  copiedLabel: string;
}

export default function ShareButton({ title, excerpt, label, copiedLabel }: Props) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text: excerpt, url });
      } catch {
        // User cancelled — do nothing
      }
      return;
    }

    // Fallback: copy URL to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Last resort: prompt
      window.prompt("Copia este enlace:", url);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-warm-300 text-slate-600 hover:border-gold-400 hover:text-gold-600 text-sm font-semibold transition-all duration-200"
      aria-label={label}
    >
      {copied ? (
        <>
          <Check size={14} className="text-emerald-500" />
          <span className="text-emerald-600">{copiedLabel}</span>
        </>
      ) : (
        <>
          <Share2 size={14} />
          {label}
        </>
      )}
    </button>
  );
}
