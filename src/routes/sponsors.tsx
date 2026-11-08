import { createFileRoute } from "@tanstack/react-router";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "../components/ui/item";
import { CircleIcon, ConstructionIcon, FileTextIcon } from "lucide-react";
import { getSponsors } from "./server/-sponsors";
import { SponsorLogo } from "../components/ui/SponsorLogo";
import { getSponsorImageUrl } from "../lib/getSponsorImageUrl";

const sponsorLevels = ["Gold", "Silver", "Bronze", "Supporter"] as const;

const sponsorLevelStyles: Record<(typeof sponsorLevels)[number], string> = {
  Gold: "border-l-amber-500 border-r-amber-500",
  Silver: "border-l-slate-400 border-r-slate-400",
  Bronze: "border-l-orange-700 border-r-orange-700",
  Supporter: "border-l-(--wyandotte-red) border-r-(--wyandotte-red)",
};

const sponsorLevelHeadingStyles: Record<
  (typeof sponsorLevels)[number],
  string
> = {
  Gold: "border-amber-500 text-amber-700",
  Silver: "border-slate-400 text-slate-700",
  Bronze: "border-orange-700 text-orange-800",
  Supporter: "border-(--wyandotte-red) text-(--wyandotte-red)",
};



export const Route = createFileRoute("/sponsors")({
  loader: async () => {
    try {
      return { sponsors: await getSponsors(), loadFailed: false };
    } catch {
      return { sponsors: [], loadFailed: true };
    }
  },
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: "description",
        content: "Wyandotte Robotics Sponsors",
      },
      {
        title: "Sponsors — Wyandotte Robotics",
      },
    ],
  }),
});

function RouteComponent() {
  const href = "/pdf/WRATH-1847-Sponsor-Packet-2025.pdf";
  const { sponsors, loadFailed } = Route.useLoaderData();
  const sponsorsByLevel = sponsors.reduce<Record<string, typeof sponsors>>(
    (groupedSponsors, sponsor) => {
      const level = sponsor.sponsorshipLevel.toLowerCase();
      const levelSponsors = groupedSponsors[level];
      if (levelSponsors) {
        levelSponsors.push(sponsor);
      } else {
        groupedSponsors[level] = [sponsor];
      }
      return groupedSponsors;
    },
    {},
  );

  return (
    <main className="page-wrap px-2 py-8">
      <section className=" rounded-2xl p-0 sm:p-6">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Sponsors
        </h1>
        <div className="rise-in m-6 max-w-3xl mx-auto text-center">
          <p className="leading-7 not-first:mt-6 text-muted-foreground">
            We couldn’t do this without the backing of our amazing sponsors.
          </p>
        </div>
      </section>
      {sponsors.length === 0 ? (
        <section className="text-center">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold first:mt-0">
            {loadFailed
              ? "Sponsor listings are temporarily unavailable."
              : "2026-2027 Sponsors coming soon."}
          </h2>
          {loadFailed ? (
            <p className="mt-4 text-muted-foreground">
              You can still view or download our sponsor packet below.
            </p>
          ) : (
            <div className="flex h-64 items-center justify-center">
              <ConstructionIcon size={64} />
            </div>
          )}
        </section>
      ) : (
        <section className="mx-auto max-w-5xl py-6">
          <h2 className="scroll-m-20 border-b pb-2 text-center text-3xl font-semibold">
            {sponsors[0]?.season} Sponsors
          </h2>
          <div className="mt-8 space-y-8">
            {sponsorLevels.map((level) => {
              const levelSponsors = sponsorsByLevel[level.toLowerCase()] ?? [];
              if (levelSponsors.length === 0) return null;

              return (
                <section key={level}>
                  <h3
                    className={`mx-auto w-fit border-b-2 px-8 pb-3 text-center text-3xl font-extrabold ${sponsorLevelHeadingStyles[level]}`}
                  >
                    {level}
                  </h3>
                  <ItemGroup className="mt-4 flex flex-row flex-wrap justify-center gap-5">
                    {levelSponsors.map((sponsor) => {
                      const logoUrl = getSponsorImageUrl(sponsor.imageUrl);
                      const cardContent = (
                        <>
                          {logoUrl && (
                            <SponsorLogo src={logoUrl} name={sponsor.name} />
                          )}
                          <ItemContent className="w-full items-center text-center">
                            <ItemTitle className="w-full justify-center whitespace-normal text-center text-2xl font-semibold">
                              {sponsor.name}
                            </ItemTitle>
                            <ItemDescription className="text-center">
                              {level} Sponsor
                            </ItemDescription>
                          </ItemContent>
                        </>
                      );

                      return (
                        <Item
                          key={sponsor.id}
                          variant="outline"
                          className={`min-h-36 w-full max-w-md flex-col justify-center gap-4 border-l-5 border-r-5 px-6 py-6 text-center ${sponsorLevelStyles[level]}`}
                        >
                          {cardContent}
                        </Item>
                      );
                    })}
                  </ItemGroup>
                </section>
              );
            })}
          </div>
        </section>
      )}
      {/* <h2 className="scroll-m-20 p-6 text-3xl font-semibold first:mt-0 text-center">
        Sponsor Packet 2025
      </h2>
      <div
        className="object-container"
        style={{ width: "100%", height: "100vh" }}
      >
        <object
          data="/pdf/WRATH-1847-Sponsor-Packet-2025.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          title="Embedded PDF Viewer"
          className="pdf-viewer"
        >
          <p>
            Your browser does not support PDFs.
            <a href={href}>Download instead</a>.
          </p>
        </object>
      </div>
      <ItemGroup className="grid w-full max-w-8xl mx-auto gap-6 p-4 grid-cols-1 sm:max-w-8xl sm:grid-cols-2 lg:grid-cols-3">
        <Item
          variant="outline"
          render={
            <a href={href} target="_blank" rel="noopener noreferrer">
              <ItemMedia variant="default">
                <CircleIcon
                  size={18}
                  fill="var(--wyandotte-red)"
                  strokeWidth={0}
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Sponsor Packet</ItemTitle>
                <ItemDescription>
                  Download our official sponsor packet
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ItemMedia>
                  <FileTextIcon />
                </ItemMedia>
              </ItemActions>
            </a>
          }
        />
      </ItemGroup> */}
    </main>
  );
}
