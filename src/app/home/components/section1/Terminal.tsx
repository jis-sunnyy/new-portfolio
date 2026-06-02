"use client";
import React, { useEffect, useRef, useState } from "react";

interface TermLine {
  cmd: string;
  out: string[];
}

const LINES: TermLine[] = [
  { cmd: "whoami", out: ["Jis Sunny"] },
  {
    cmd: "cat profile.json",
    out: [
      "{",
      '  "role":     "Full Stack Engineer",',
      '  "based":    "Calicut, Kerala — IN",',
      '  "stack":    ["React", "Node", "AWS", "AI/LLM"],',
      '  "clients":  ["IN", "UAE", "KE"],',
      '  "shipping": true',
      "}",
    ],
  },
  {
    cmd: "ls ./focus --verbose",
    out: [
      "scalable systems       // ERPs, CRMs, data layers",
      "ai integration         // RAG, vector DBs, LLM APIs",
      "cloud architecture     // AWS, CI/CD, deployment",
      "mobile + native        // React Native, biometrics, bluetooth",
    ],
  },
  { cmd: "echo $STATUS", out: ["○ open to opportunities — let's talk."] },
];

interface Segment {
  kind: "cmd" | "out";
  text: string;
  line: number;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function colorize(s: string): string {
  let esc = escapeHtml(s);
  esc = esc.replace(/"([^"]*)"/g, '<span class="val">"$1"</span>');
  esc = esc.replace(
    /^(\s*)([a-z_]+):/gi,
    '$1<span class="key">$2</span><span class="punct">:</span>'
  );
  esc = esc.replace(/(\/\/[^<]*)$/, '<span style="color: var(--fg-dim)">$1</span>');
  esc = esc.replace(/([{}\[\],])/g, '<span class="punct">$1</span>');
  esc = esc.replace(
    /\b(true|false|null)\b/g,
    '<span style="color: var(--accent)">$1</span>'
  );
  esc = esc.replace(/○/, '<span style="color: var(--accent)">●</span>');
  return esc;
}

const Prompt = ({ hidden }: { hidden?: boolean }) => (
  <span className="term-prompt" style={hidden ? { visibility: "hidden" } : undefined}>
    <span className="user">jis</span>
    <span className="at">@</span>
    <span className="host">portfolio</span>
    <span className="arrow"> ❯</span>
  </span>
);

export default function Terminal() {
  // Flatten lines into a sequential stream of segments
  const segments = useRef<Segment[]>([]);
  if (segments.current.length === 0) {
    LINES.forEach((line, i) => {
      segments.current.push({ kind: "cmd", text: line.cmd, line: i });
      line.out.forEach((o) => segments.current.push({ kind: "out", text: o, line: i }));
    });
  }
  const total = segments.current.length;

  const [active, setActive] = useState(0);
  const [counts, setCounts] = useState<number[]>(() =>
    segments.current.map(() => 0)
  );
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (active >= total) {
      setDone(true);
      return;
    }
    const seg = segments.current[active];
    if (counts[active] < seg.text.length) {
      const speed = seg.kind === "cmd" ? 38 : 8;
      const step = seg.kind === "cmd" ? 1 : 2;
      const t = setTimeout(() => {
        setCounts((prev) => {
          const next = [...prev];
          next[active] = Math.min(seg.text.length, next[active] + step);
          return next;
        });
      }, speed);
      return () => clearTimeout(t);
    }
    const pause = seg.kind === "cmd" ? 260 : 50;
    const t = setTimeout(() => setActive((a) => a + 1), pause);
    return () => clearTimeout(t);
  }, [active, counts, total]);

  const indexed = segments.current.map((s, idx) => ({ ...s, idx }));

  return (
    <div className="terminal" role="presentation" aria-hidden="true">
      <div className="terminal-bar">
        <div className="terminal-dots">
          <span className="terminal-dot r" />
          <span className="terminal-dot y" />
          <span className="terminal-dot g" />
        </div>
        <span className="terminal-title">
          <span className="path">~/jis</span> — zsh — 80×24
        </span>
      </div>

      <div className="terminal-body">
        {LINES.map((_, i) => {
          const lineSegs = indexed.filter((s) => s.line === i);
          const cmdSeg = lineSegs[0];
          const outSegs = lineSegs.slice(1);
          if (cmdSeg.idx > active) return null;

          const cmdText = cmdSeg.text.slice(0, counts[cmdSeg.idx]);
          const cmdTyping = active === cmdSeg.idx && counts[cmdSeg.idx] < cmdSeg.text.length;

          return (
            <div key={i} style={{ marginBottom: i === LINES.length - 1 ? 0 : 12 }}>
              <div className="term-line">
                <Prompt />
                <span className="term-cmd">
                  {cmdText}
                  {cmdTyping && <span className="cursor" />}
                </span>
              </div>
              {outSegs.map((s) => {
                if (s.idx > active) return null;
                const txt = s.text.slice(0, counts[s.idx]);
                const typing = active === s.idx && counts[s.idx] < s.text.length;
                return (
                  <div key={s.idx} className="term-line">
                    <Prompt hidden />
                    <span
                      className="term-out"
                      dangerouslySetInnerHTML={{ __html: colorize(txt) }}
                    />
                    {typing && <span className="cursor" />}
                  </div>
                );
              })}
            </div>
          );
        })}

        {done && (
          <div className="term-line" style={{ marginTop: 8 }}>
            <Prompt />
            <span className="cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
