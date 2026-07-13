import { createFileRoute } from "@tanstack/react-router";

import Features from "../components/layouts/Features";
import FacebookIcon from "../components/InternalIcons/FacebookIcon";
import InstagramIcon from "../components/InternalIcons/InstagramIcon";
import GithubIcon from "../components/InternalIcons/GithubIcon";
import { ExternalLinkIcon, FileTextIcon } from "lucide-react";

export const Route = createFileRoute("/resources")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: "description",
        content: "FRC Team Resources",
      },
      {
        title: "Resources — Wyandotte Robotics",
      },
    ],
  }),
});

function RouteComponent() {
  const sections = [
    { id: "our-team", label: "Our Team" },
    { id: "parts", label: "Parts" },
    { id: "programming", label: "Programming Resources" },
    { id: "competition", label: "Competition Resources" },
    { id: "other-teams", label: "Resources From Other Teams" },
  ];

  return (
    <div className="pt-16 ">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Useful Resources
      </h1>

      <nav className="mx-auto mt-8 w-full max-w-5xl px-4">
        <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-sm backdrop-blur">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 sm:px-4 sm:text-base"
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="our-team">
        <Features
          title={"Our Team"}
          subtitle="Links related to our team"
          items={[
            {
              title: "Facebook",
              description: "Our official Facebook page",
              icon: <FacebookIcon />,
              callToAction: {
                href: "https://www.facebook.com/wyandotterobotics1847",
                text: "Go to Facebook page",
              },
            },
            {
              title: "Instagram",
              description: "Our official Instagram page",
              icon: <InstagramIcon />,
              callToAction: {
                href: "https://www.instagram.com/wyandotterobotics1847",
                text: "Go to Instagram page",
              },
            },
            {
              title: "Github",
              description: "Our official Github",
              icon: <GithubIcon />,
              callToAction: {
                href: "https://github.com/FRCTeam1847",
                text: "Go to github repo",
              },
            },
            {
              title: "Team Sponsor Packet",
              description: "Our Sponsor Packet",
              icon: <FileTextIcon />,
              callToAction: {
                href: "/pdf/WRATH-1847-Sponsor-Packet-2025.pdf",
                download: "WRATH-1847-Sponsor-Packet-2025.pdf",
                text: "Download Sponsor Packet",
              },
            },
            {
              title: "Team Branding Guidelines",
              description: "Our Branding Guidelines",
              icon: <FileTextIcon />,
              callToAction: {
                href: "/pdf/Wyandotte-Robotics-Branding-Standards-V1.pdf",
                download: "Wyandotte-Robotics-Branding-Standards-V1.pdf",
                text: "Download Branding Guidelines",
              },
            },
          ]}
        />
      </section>

      <section id="parts">
        <Features
          title="Parts"
          subtitle="These are sites we have gotten parts from"
          items={[
            {
              title: "AndyMark",
              description:
                "AndyMark, Inc. is a leading provider of mechanical and electrical components for robotics, supporting education and competitive programs like FIRST with innovative products, resources, and expertise.",
              icon: <ExternalLinkIcon className="size-4" />,
              callToAction: {
                text: "Visit Website",
                href: "https://www.andymark.com",
                target: "_blank",
              },
            },
            {
              title: "Rev Robotics",
              description:
                "REV Robotics, established in 2014, is a prominent robotics company that develops innovative mechanical, electrical, and software solutions to empower students and teams in educational and competitive robotics programs like FIRST.",
              icon: <ExternalLinkIcon className="size-4" />,
              callToAction: {
                text: "Visit Website",
                href: "https://www.revrobotics.com",
                target: "_blank",
              },
            },
            {
              title: "Cross The Road Electronics (CTRE)",
              description:
                "Cross The Road Electronics (CTRE), founded in 2006, specializes in developing embedded control systems for robotics and propulsion applications, offering products like motor controllers, sensors, and software frameworks widely utilized in educational and competitive robotics, including FIRST Robotics competitions.",
              icon: <ExternalLinkIcon className="size-4" />,
              callToAction: {
                text: "Visit Website",
                href: "https://newsite.ctr-electronics.com/",
                target: "_blank",
              },
            },
            {
              title: "West Coast Products",
              description:
                "WestCoast Products is a premier supplier of high-performance robotics components, including gearboxes, wheels, and motors, designed to enhance the capabilities of competitive robotics teams, especially in the FIRST Robotics Competition.",

              icon: <ExternalLinkIcon className="size-4" />,
              callToAction: {
                text: "Visit Website",
                href: "https://wcproducts.com/",
                target: "_blank",
              },
            },
            {
              title: "McMAster-CARR",
              description:
                "McMaster-Carr is a vital resource for FRC teams, providing a vast selection of components such as fasteners, raw materials, and mechanical parts essential for robot design and construction. Their extensive inventory and prompt shipping enable teams to efficiently acquire necessary materials throughout the build season.",
              icon: <ExternalLinkIcon className="size-4" />,
              callToAction: {
                text: "Visit Website",
                href: "https://www.mcmaster.com/",
                target: "_blank",
              },
            },
            {
              title: "Thriftybot",
              description:
                "The Thrifty Bot is a company dedicated to providing affordable, high-quality components for FIRST Robotics Competition (FRC) teams, offering a range of products including swerve modules, telescoping tube kits, and vectored intake wheels to enhance robot performance.",
              icon: <ExternalLinkIcon className="size-4" />,
              callToAction: {
                text: "Visit Website",
                href: "https://www.thethriftybot.com/",
                target: "_blank",
              },
            },
            {
              title: "Swerve Drive Specialties",
              description:
                "Swerve Drive Specialties (SDS) is a premier provider of high-performance swerve drive modules, offering innovative solutions and comprehensive support for teams in the FIRST Robotics Competition.",
              icon: <ExternalLinkIcon className="size-4" />,
              callToAction: {
                text: "Visit Website",
                href: "https://www.swervedrivespecialties.com/",
                target: "_blank",
              },
            },
            {
              title: "VEX Robotics",
              description:
                "VEX Robotics is a leading provider of educational robotics solutions, offering accessible and scalable platforms that promote STEM learning through hands-on experiences and competitions for students from elementary school to university levels.",
              icon: <ExternalLinkIcon className="size-4" />,
              callToAction: {
                text: "Visit Website",
                href: "https://www.vexrobotics.com/pro",
                target: "_blank",
              },
            },
            {
              title: "SendCutSend",
              description:
                "SendCutSend provides FRC teams with fast, affordable custom part manufacturing, including laser cutting, bending, and finishing services, to streamline robot fabrication.",
              icon: <ExternalLinkIcon className="size-4" />,
              callToAction: {
                text: "Visit Website",
                href: "https://sendcutsend.com/",
                target: "_blank",
              },
            },
            {
              title: "RoboPromo",
              description:
                "RoboPromo specializes in providing high-quality bumper materials, numbers, and accessories tailored for FIRST Robotics Competition (FRC) teams, offering products like reversible bumper fabrics, iron-on numbers, and mounting brackets to enhance robot aesthetics and compliance.",
              icon: <ExternalLinkIcon className="size-4" />,
              callToAction: {
                text: "Visit Website",
                href: "https://www.robopromo.com/",
                target: "_blank",
              },
            },
          ]}
        />
      </section>

      <section id="programming">
        <Features
          title="Programming Resources"
          subtitle="Useful links for programmers as well as libraries we find useful"
          items={[
            {
              title: "FIRST Robotics Competition Control System",
              description:
                "FIRST® Robotics Competition Control System Documentation! This site contains everything you need to know for programming a competition robot! Note: we use the Java programming language.",
              callToAction: {
                text: "Visit Website",
                href: "https://docs.wpilib.org/en/stable/index.html",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
            {
              title: "Rev Robotics C++ and Java Installation/Docs",
              description:
                "A good resource for rev robotics docs. Link takes you to where you can get the url to install the library for development.",
              callToAction: {
                text: "Visit Website",
                href: "https://docs.revrobotics.com/ion-control-system/sw/revlib#c-and-java-installation",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
            {
              title: "CTRE Phoenix Software",
              description:
                "Documentation and download links for CTRE devices like Kraken x60.",
              callToAction: {
                text: "Visit Website",
                href: "https://docs.ctr-electronics.com/",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
            {
              title: "Yet Another Generic Swerve Library(YAGSL)",
              description:
                "We used this library in the offseason of 2024 allowing us to implement swerve with ease.",
              callToAction: {
                text: "Visit Website",
                href: "https://yagsl.gitbook.io/yagsl",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
            {
              title: "YAGSL configuration worksheet",
              description: "Quick link to the configuration of YAGSL worksheet",
              callToAction: {
                text: "Visit Website",
                href: "https://docs.yagsl.com/bringing-up-swerve/creating-your-first-configuration",
                target: "_blank",
              },
              icon: <FileTextIcon />,
            },
            {
              title: "Yet Another Mechanism System(YAMS)",
              description:
                "New mechanism system similar to YAGSL that allows you to code and tune Arms, Elevators, and Shooters/Flywheels",
              callToAction: {
                text: "Visit Website",
                href: "https://yagsl.gitbook.io/yams",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
            {
              title: "Path Planner",
              description:
                "Useful tool for making auto paths easier to implement through a GUI.",
              callToAction: {
                text: "Visit Website",
                href: "https://pathplanner.dev/home.html",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
            {
              title: "Grapple Robotics LaserCAN Docs",
              description: "Docs for LaserCAN integration with FRC",
              callToAction: {
                text: "Visit Website",
                href: "https://grapplerobotics.au/product/lasercan",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
          ]}
        />
      </section>

      <section id="competition">
        <Features
          title="Competition Resources"
          subtitle="Useful links during the build and competition season"
          items={[
            {
              title: "The Blue Alliance",
              description:
                "The Blue Alliance provides event, team, and ranking information for FRC",
              callToAction: {
                text: "Visit Website",
                href: "https://thebluealliance.com",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
            {
              title: "Statbotics.io",
              description:
                "Provides ranking information for all teams based off Expected Points Added (EPA)",
              callToAction: {
                text: "Visit Website",
                href: "https://www.statbotics.io/",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
            {
              title: "Chief Delphi",
              description:
                "Main online forum for the FIRST Robotics Competition (FRC) community. It serves as a central hub for discussion, collaboration, support, and announcements related to FRC teams, events, and technical topics.",
              callToAction: {
                text: "Visit Website",
                href: "https://www.chiefdelphi.com/",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
            {
              title: "FIRST Build Season Timeline",
              description:
                "A timeline for how teams should plan their build season",
              callToAction: {
                text: "Get Document",
                href: "https://www.firstinspires.org/sites/default/files/uploads/resource_library/frc/team-resources/build_season_timeline_11x17.pdf",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
            {
              title: "FIRST Kickoff Game Break Down",
              description:
                "A worksheet students can fill out to analyze a game after kick off",
              callToAction: {
                text: "Get Document",
                href: "https://www.firstinspires.org/hubfs/web/program/frc/resources/kickoff-breakdown-worksheet.pdf?hsLang=en",
                target: "_blank",
              },
              icon: <FileTextIcon />,
            },
            {
              title: "FIRST Kickoff Worksheet",
              description:
                "A general plan for what to look for right after kick off",
              callToAction: {
                text: "Get Document",
                href: "https://www.firstinspires.org/sites/default/files/uploads/resource_library/frc/technical-resources/frc-kickoff-worksheet.pdf",
                target: "_blank",
              },
              icon: <FileTextIcon />,
            },
            {
              title: "Strategy Board",
              description:
                "A website where we can draw strategies with other teams during competition",
              callToAction: {
                text: "Strategy Board",
                href: "https://strategyboard.app/",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
          ]}
        />
      </section>

      <section id="other-teams">
        <Features
          title="Resources From Other Teams"
          subtitle=""
          items={[
            // {
            //   title: "2025 massive mini",
            //   description:
            //     "Massive mini this year. Resources are in the **ACCESS OUR SHARED DRIVE HERE** link",
            //   callToAction: {
            //     text: "Visit Website",
            //     href: "https://sites.google.com/lps53.org/massivemini25/home",
            //     target: "_blank",
            //   },icon: <ExternalLinkIcon className="size-4" />,
            // },
            {
              title: "Spectrum 3847",
              description:
                "Spectrum 3847 has a lot of resources that are very useful",
              callToAction: {
                text: "Visit Website",
                href: "https://www.spectrum3847.org/resources",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
            {
              title: "FRCDesign.org",
              description:
                "FRC Design has a lot of useful information. Specifically a collection of FRC Designs that you can view in OnShape",
              callToAction: {
                text: "Visit Website",
                href: "https://www.frcdesign.org/mechanism-examples/",
                target: "_blank",
              },
              icon: <ExternalLinkIcon className="size-4" />,
            },
          ]}
        />
      </section>
    </div>
  );
}
