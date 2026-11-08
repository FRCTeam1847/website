import { useEffect, useState } from "react";
import FacebookComponent from "./FacebookComponent";
import GithubComponent from "./GithubComponent";
import InstagramComponent from "./InstagramComponent";
import { Item, ItemGroup, ItemTitle } from "./ui/item";

const countdowns = [
  {
    start: new Date("2027-01-09T12:00:00-05:00"),
    end: new Date("2027-01-09T12:00:00-05:00"),
    text: "2027 FRC Kickoff",
  },
  {
    start: new Date("2027-03-18T09:00:00-05:00"),
    end: new Date("2027-03-20T18:00:00-05:00"),
    text: "2027 Heartland Regional",
  },
  {
    start: new Date("2027-04-01T09:00:00-05:00"),
    end: new Date("2027-04-03T18:00:00-05:00"),
    text: "2027 City of Fountains Regional",
  },
  {
    start: new Date("2027-04-28T09:00:00-05:00"),
    end: new Date("2027-05-01T18:00:00-05:00"),
    text: "2027 FIRST Championship",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [distance, setDistance] = useState(0);
  const [currentCountdownIndex, setCurrentCountdownIndex] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const nextCountdownIndex = countdowns.findIndex(
        (countdown) => countdown.start.getTime() > now,
      );

      if (nextCountdownIndex === -1) {
        setCurrentCountdownIndex(countdowns.length - 1);
        setDistance(0);
        window.clearInterval(intervalId);
        return;
      }

      setCurrentCountdownIndex(nextCountdownIndex);
      setDistance(countdowns[nextCountdownIndex].start.getTime() - now);
    };

    const intervalId = window.setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <footer className="mt-20 border-t border-(--line) px-4 pb-14 pt-10">
      <section
        aria-label={`Countdown to ${countdowns[currentCountdownIndex].text}`}
        className="mx-auto mb-6 w-full"
      >
        <ItemTitle className="line-clamp-none w-full justify-center text-center text-2xl lg:text-3xl lg:whitespace-nowrap">
          Countdown to <b>{countdowns[currentCountdownIndex].text}</b>
        </ItemTitle>
        <ItemGroup className="mx-auto grid max-w-md grid-cols-4 gap-2">
          <Item
            variant="outline"
            className="min-w-0 flex-col justify-center gap-1 px-2 py-3 text-center"
          >
            <p className="text-2xl font-semibold tabular-nums">
              {Math.floor(distance / (1000 * 60 * 60 * 24))}
            </p>
            <p className="text-xs text-muted-foreground">Days</p>
          </Item>
          <Item
            variant="outline"
            className="min-w-0 flex-col justify-center gap-1 px-2 py-3 text-center"
          >
            <p className="text-2xl font-semibold tabular-nums">
              {Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
              )}
            </p>
            <p className="text-xs text-muted-foreground">Hours</p>
          </Item>
          <Item
            variant="outline"
            className="min-w-0 flex-col justify-center gap-1 px-2 py-3 text-center"
          >
            <p className="text-2xl font-semibold tabular-nums">
              {Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}
            </p>
            <p className="text-xs text-muted-foreground">Minutes</p>
          </Item>
          <Item
            variant="outline"
            className="min-w-0 flex-col justify-center gap-1 px-2 py-3 text-center"
          >
            <p className="text-2xl font-semibold tabular-nums">
              {Math.floor((distance % (1000 * 60)) / 1000)}
            </p>
            <p className="text-xs text-muted-foreground">Seconds</p>
          </Item>
        </ItemGroup>
      </section>
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          &copy; {year} Wyandotte Robotics. All rights reserved.
        </p>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <FacebookComponent />
        <InstagramComponent />
        <GithubComponent />
      </div>
    </footer>
  );
}
