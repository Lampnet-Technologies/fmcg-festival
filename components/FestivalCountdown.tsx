"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownPart = {
  label: string;
  value: string;
};

function getCountdownParts(targetTime: number): CountdownPart[] {
  const distance = Math.max(targetTime - Date.now(), 0);
  const totalSeconds = Math.floor(distance / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    { label: "Days", value: String(days) },
    { label: "Hours", value: String(hours).padStart(2, "0") },
    { label: "Minutes", value: String(minutes).padStart(2, "0") },
    { label: "Seconds", value: String(seconds).padStart(2, "0") },
  ];
}

export function FestivalCountdown({ startsAt }: { startsAt: string }) {
  const targetTime = useMemo(() => new Date(startsAt).getTime(), [startsAt]);
  const [parts, setParts] = useState<CountdownPart[]>([
    { label: "Days", value: "--" },
    { label: "Hours", value: "--" },
    { label: "Minutes", value: "--" },
    { label: "Seconds", value: "--" },
  ]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setParts(getCountdownParts(targetTime));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetTime]);

  const hasStarted = parts.every((part) => Number(part.value) === 0);

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 md:p-8 w-full max-w-lg">
      <p className="text-white text-base md:text-lg font-semibold mb-6 text-center lg:text-left">
        {hasStarted ? "Festival is live" : "Countdown to Festival"}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {parts.map((part) => (
          <div key={part.label} className="text-center">
            <p className="text-3xl font-black text-white tabular-nums">
              {part.value}
            </p>
            <p className="text-xs text-gray-300 uppercase tracking-widest mt-2">
              {part.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
