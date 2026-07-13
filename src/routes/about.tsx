import { createFileRoute } from "@tanstack/react-router";
import QuickFacts from "../components/QuickFacts";
import Features from "../components/layouts/Features";
import { AwardIcon, CalendarIcon, TrophyIcon } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      {
        name: "description",
        content: "About Wyandotte Robotics",
      },
      {
        title: "About — Wyandotte Robotics",
      },
    ],
  }),
});

function About() {
  return (
    <main className="page-wrap px-2 py-8">
      <section className=" rounded-2xl p-0 sm:p-6">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          About Wyandotte Robotics
        </h1>
        <div className="rise-in  m-6 max-w-3xl mx-auto text-center">
          <p className="leading-7 not-first:mt-6 text-muted-foreground">
            Learn about our history, mission, and achievements as part of the
            FIRST Robotics Competition. Scroll down for frequently asked
            questions and discover how you can join or support our team!
          </p>
          <p className="leading-7 not-first:mt-6">Contacts</p>
          <ul className="text-base">
            <li>
              <strong>Head Coach:</strong> Oscar Campos Soto -{" "}
              <a
                href="mailto:oscar.campossoto@kckps.org"
                className="font-semibold"
              >
                oscar.campossoto@kckps.org
              </a>
            </li>
            <li>
              <strong>Assistant Coach:</strong> Irvin Jimenez-Solis -{" "}
              <a
                href="mailto:irvin.jimenez-solis@kckps.org"
                className="font-semibold"
              >
                irvin.jimenez-solis@kckps.org
              </a>
            </li>
            <li>
              <strong>Team Email:</strong>{" "}
              <a
                href="mailto:wyandotterobotics1847@gmail.com"
                className="font-semibold"
              >
                wyandotterobotics1847@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl mt-10 p-6 sm:p-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold first:mt-0 text-center">
          Quick Facts About Us
        </h2>
        <QuickFacts />
      </section>

      <section className="rise-in rounded-2xl p-2 sm:p-8">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-center">
          Who We Are
        </h2>

        <section className="island-shell rounded-2xl mt-8 p-0 sm:p-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Our Mission
          </h3>

          <p className="leading-7 not-first:mt-6 text-muted-foreground">
            Wyandotte Robotics, nicknamed WRATH, is FRC Team 1847 based in
            Kansas City, Kansas. Established in 2006, we are a high school
            robotics team representing Wyandotte High School in the FIRST
            Robotics Competition (FRC). Our team designs, builds, and programs
            robots to compete in annual challenges against teams worldwide while
            fostering innovation, teamwork, and community engagement.
          </p>
        </section>
        <section className="island-shell rounded-2xl mt-8 p-0 sm:p-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Our Role in FIRST Robotics
          </h3>

          <p className="leading-7 not-first:mt-6 text-muted-foreground">
            As part of the FIRST Robotics community, we share a commitment to
            Gracious Professionalism® and Coopertition®. These values guide our
            efforts to encourage collaboration, mentorship, and fair
            competition. We strive to ignite passion for STEM within our members
            and community while building robots that push the boundaries of
            innovation.
          </p>
        </section>
      </section>

      <section>
        <Features
          title="Our Values"
          subtitle="What drives us"
          items={[
            {
              title: "Innovation",
              description:
                "We continually push boundaries to create innovative solutions and designs for robotics.",
            },
            {
              title: "Teamwork",
              description:
                "Collaboration and mentorship are at the core of everything we do, both on and off the field.",
            },
            {
              title: "Community Engagement",
              description:
                "We inspire and support our local community to embrace STEM and its endless possibilities.",
            },
          ]}
        />

        <Features
          title="Our Achievements"
          subtitle="Celebrating our success"
          items={[
            {
              title: "Regional Finalists - 2026 Heartland Regional",
              description:
                "Competed at the Heartland Regional in Shawnee, KS as the second pick of Alliance 4, alongside captain 9126 and 5801.",
              icon: <TrophyIcon />,
            },
            {
              title: "Regional Finalists - 2025 Heartland Regional",
              description:
                "Competed at the Heartland Regional in Shawnee, KS as the first pick of Alliance 2, alongside captain 1108 and 9316. Team 1847 finished Rank 5 with a record of 12-5-0 and was eliminated in the Finals.",
              icon: <TrophyIcon />,
            },
            {
              title: "Seasons Competed",
              description: `${new Date().getFullYear() - 2006} seasons since our rookie year.`,
              icon: <CalendarIcon />,
            },
            {
              title: "Regional Finalists - 2022 Greater Kansas City Regional",
              description:
                "Proudly competed as the second pick of Alliance 2, alongside team captain 5801 - CTC Inspire and 1710 - The Ravonics Revolution.",
              icon: <AwardIcon />,
            },
            {
              title: "Alliance 8 Captain - 2024 Cow Town ThrowDown",
              description:
                "Led Alliance 8 as captain alongside teams 1730, 9410, and 2345 at the Cow Town ThrowDown in Lee’s Summit. Despite a strong effort, we were eliminated in Match 9 by Alliance 7.",
              icon: <AwardIcon />,
            },
            {
              title: "Alliance 5 Competitors - 2016 Cow Town ThrowDown",
              description:
                "Competed as part of Alliance 5 at the 2016 Cow Town ThrowDown in Lee’s Summit, captained by Team 3937, alongside teams 3928 and 1775. Despite a strong effort, the alliance was eliminated in the playoffs.",
              icon: <AwardIcon />,
            },
          ]}
        />
      </section>
    </main>
  );
}
