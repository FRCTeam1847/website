import { useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { teamHistoryQuery } from "../routes/queries/teamHistory";

function AnimatedCounter({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let startTime: number | null = null;
    const duration = 3000;

    const step = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };

    frameId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(frameId);
  }, [value]);

  return <span>{displayValue}</span>;
}

export default function QuickFacts() {
  const { data } = useSuspenseQuery(teamHistoryQuery);
  const { awards, events } = data;

  let regionals = 0,
    offSeason = 0,
    worldAppearance = 0,
    seasons: number[] = [],
    awardsByName: Record<string, number> = {};

  events.forEach((event) => {
    const eventType = event.event_type_string;
    if (eventType === "Regional") {
      regionals++;
    } else if (eventType === "Offseason") {
      offSeason++;
    } else if (eventType === "Championship Division") {
      worldAppearance++;
    } else {
      console.warn(`${eventType} is not being handled.`);
      // console.warn(event);
    }

    if (!seasons.includes(event.year)) {
      seasons.push(event.year);
    }
  });

  awards.forEach((award) => {
    const key = String(award.name);
    awardsByName[key] = (awardsByName[key] || 0) + 1;
  });

  const statItems = [
    { label: "Regional Events", value: regionals },
    { label: "Seasons", value: seasons.length },
    { label: "Off-Season Events", value: offSeason },
    ...Object.entries(awardsByName).map(([key, value]) => ({
      label: key,
      value,
    })),
    { label: "World Championship Appearance", value: worldAppearance },
  ];

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 text-center">
      {statItems.map((item, index) => {
        const isLastSingleItem =
          statItems.length % 2 === 1 && index === statItems.length - 1;

        return (
          <div
            className={`rise-in ${isLastSingleItem ? "col-span-2 flex justify-center" : ""}`}
            key={item.label}
          >
            <div
              className={`flex flex-col items-center ${isLastSingleItem ? "w-full max-w-xs" : ""}`}
            >
              <div className="text-5xl font-semibold leading-none text-(--wyandotte-red) sm:text-6xl">
                <AnimatedCounter value={item.value} />
              </div>
              <div className="mt-2 text-base text-gray-700 sm:text-lg">
                {item.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
