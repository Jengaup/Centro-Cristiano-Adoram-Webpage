"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, Pause, Square, Play } from "lucide-react";

interface Labels {
  listen: string;
  pause: string;
  resume: string;
  stop: string;
  reading: string;
}

interface Props {
  title: string;
  content: string;
  locale: string;
  labels: Labels;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

type Status = "idle" | "reading" | "paused";

export default function DevotionalReader({ title, content, locale, labels }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis?.cancel();
    };
  }, []);

  const start = () => {
    window.speechSynthesis.cancel();
    const text = `${title}. ${stripHtml(content)}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = locale === "es" ? "es" : "en-US";
    utterance.rate = 0.88;
    utterance.pitch = 1;
    utterance.onstart = () => setStatus("reading");
    utterance.onend = () => setStatus("idle");
    utterance.onerror = () => setStatus("idle");
    utterance.onpause = () => setStatus("paused");
    utterance.onresume = () => setStatus("reading");
    window.speechSynthesis.speak(utterance);
  };

  const pause = () => { window.speechSynthesis.pause(); setStatus("paused"); };
  const resume = () => { window.speechSynthesis.resume(); setStatus("reading"); };
  const stop = () => { window.speechSynthesis.cancel(); setStatus("idle"); };

  if (!supported) return null;

  if (status === "idle") {
    return (
      <button
        onClick={start}
        className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-navy-200 text-navy-700 hover:border-navy-500 hover:bg-navy-50 text-sm font-semibold transition-all duration-200 group"
        aria-label={labels.listen}
      >
        <Volume2 size={15} className="text-navy-500 group-hover:text-navy-700 transition-colors" />
        {labels.listen}
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {/* Reading indicator */}
      <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-navy-50 border border-navy-200">
        {status === "reading" && (
          <span className="flex gap-0.5 items-end h-4">
            {[0, 150, 300].map((delay) => (
              <span
                key={delay}
                className="w-0.5 rounded-full bg-navy-600 animate-bounce"
                style={{ height: "60%", animationDelay: `${delay}ms`, animationDuration: "0.8s" }}
              />
            ))}
          </span>
        )}
        {status === "paused" && <Volume2 size={13} className="text-navy-400" />}
        <span className="text-navy-600 text-xs font-semibold">
          {status === "reading" ? labels.reading : labels.pause + "d"}
        </span>
      </div>

      {/* Pause / Resume */}
      <button
        onClick={status === "paused" ? resume : pause}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-navy-200 text-navy-700 hover:bg-navy-50 text-sm font-semibold transition-colors"
        aria-label={status === "paused" ? labels.resume : labels.pause}
      >
        {status === "paused"
          ? <><Play size={13} />{labels.resume}</>
          : <><Pause size={13} />{labels.pause}</>
        }
      </button>

      {/* Stop */}
      <button
        onClick={stop}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-warm-300 text-slate-500 hover:border-red-300 hover:text-red-600 text-sm font-semibold transition-colors"
        aria-label={labels.stop}
      >
        <Square size={13} fill="currentColor" />
        {labels.stop}
      </button>
    </div>
  );
}
