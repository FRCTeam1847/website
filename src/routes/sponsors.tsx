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

export const Route = createFileRoute("/sponsors")({
  component: RouteComponent,
});

function RouteComponent() {
  const href = "/pdf/WRATH-1847-Sponsor-Packet-2025.pdf";
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
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold first:mt-0 text-center">
        2026-2027 Sponsors coming soon.
        <div className="flex items-center justify-center h-64">
          <ConstructionIcon size={64} />
        </div>
      </h2>
      <h2 className="scroll-m-20 p-6 text-3xl font-semibold first:mt-0 text-center">
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
      </ItemGroup>
    </main>
  );
}
