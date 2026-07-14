import { createFileRoute } from "@tanstack/react-router";
import { FileTextIcon, ImageIcon } from "lucide-react";
import Features from "../components/layouts/Features";

export const Route = createFileRoute("/branding")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: "description",
        content: "Branding Standards",
      },
      {
        title: "Branding — Wyandotte Robotics",
      },
    ],
  }),
});

function RouteComponent() {
  const href = "/pdf/Wyandotte-Robotics-Branding-Standards-V1.pdf";
  return (
    <div>
      <div
        className="object-container"
        style={{ width: "100%", height: "100vh" }}
      >
        <object
          data={href}
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
      <Features
        title={"PDF Files"}
        items={[
          {
            title: "Branding Standards",
            description: "Download our official branding standards",
            icon: <FileTextIcon />,
            callToAction: {
              href: href,
              download: "Wyandotte-Robotics-Branding-Standards-V1.pdf",
            },
          },
        ]}
      />
      <Features
        title={"Official Images"}
        subtitle="Click to download our official images"
        items={[
          {
            title: "Full Logo In Color - png",
            //description: "Download our official branding standards",
            icon: <ImageIcon />,
            imgsrc: "/images/branding/Full-Logo-In-Color.png",
            callToAction: {
              href: "/images/branding/Full-Logo-In-Color.png",
              download: "Full-Logo-In-Color.png",
            },
          },
          {
            title: "Full Round Logo In Color - png",
            //description: "Download our official branding standards",
            icon: <ImageIcon />,
            imgsrc: "/images/branding/Full-Round-Logo-In-Color.png",
            callToAction: {
              href: "/images/branding/Full-Round-Logo-In-Color.png",
              download: "Full-Round-Logo-In-Color.png",
            },
          },
          {
            title: "Mascot In Color - png",
            //description: "Download our official branding standards",
            icon: <ImageIcon />,
            imgsrc: "/images/branding/Mascot-In-Color.png",
            callToAction: {
              href: "/images/branding/Mascot-In-Color.png",
              download: "Mascot-In-Color.png",
            },
          },
          {
            title: "Mascot In Gray - png",
            //description: "Download our official branding standards",
            icon: <ImageIcon />,
            imgsrc: "/images/branding/Mascot-In-Gray.png",
            callToAction: {
              href: "/images/branding/Mascot-In-Gray.png",
              download: "Mascot-In-Gray.png",
            },
          },
          {
            title: "Team 1847 Black - svg",
            //description: "Download our official branding standards",
            icon: <ImageIcon />,
            imgsrc: "/images/branding/Team1847-Black.svg",
            callToAction: {
              href: "/images/branding/Team1847-Black.png",
              download: "Team1847-Black.png",
            },
          },
          {
            title: "Team 1847 Red - svg",
            //description: "Download our official branding standards",
            icon: <ImageIcon />,
            imgsrc: "/images/branding/Team1847-Red.svg",
            callToAction: {
              href: "/images/branding/Team1847-Red.svg",
              download: "Team1847-Red.svg",
            },
          },
          {
            title: "Team 1847 White - svg",
            //description: "Download our official branding standards",
            icon: <ImageIcon />,
            imgsrc: "/images/branding/Team1847-White.svg",
            callToAction: {
              href: "/images/branding/Team1847-White.svg",
              download: "Team1847-White.svg",
            },
          },
        ]}
      />
    </div>
  );
}
