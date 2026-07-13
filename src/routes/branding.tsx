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
import { CircleIcon, FileTextIcon } from "lucide-react";

export const Route = createFileRoute("/branding")({
  component: RouteComponent,
});

function RouteComponent() {
  const href = "/pdf/Wyandotte-Robotics-Branding-Standards-V1.pdf";
  return (
    <div>
      <div className="object-container" style={{ width: "100%", height: "100vh" }}>
        <object
          data="/pdf/Wyandotte-Robotics-Branding-Standards-V1.pdf"
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
                <ItemTitle>Branding Standards</ItemTitle>
                <ItemDescription>
                  Download our official Branding standards
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
    </div>
  );
}
