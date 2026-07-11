import { createFileRoute } from "@tanstack/react-router";
import QuickFacts from "../components/QuickFacts";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main className="page-wrap px-2 py-8">
      <section className=" rounded-2xl p-0 sm:p-6">
        <h1 className=" font-bold text-center text-6xl lg:text-7xl md:text-6xl">
          About Wyandotte Robotics
        </h1>
        <div className="rise-in text-xl m-6 max-w-3xl mx-auto text-center">
          <p className="text-gray-700">
            Learn about our history, mission, and achievements as part of the
            FIRST Robotics Competition. Scroll down for frequently asked
            questions and discover how you can join or support our team!
          </p>
          <p className="mt-5 text-2xl sm:text-xl md:text-xl text-gray-950">
            Contacts
          </p>
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

      <QuickFacts />

      <section className=" rounded-2xl p-2 sm:p-8">
        <h2 className=" font-bold text-red-500 text-center underline text-4xl lg:text-6xl md:text-5xl">
          Who We Are
        </h2>

        <section className="island-shell rounded-2xl mt-8 p-0 sm:p-4">
          <h3 className="font-bold text-2xl m-2">Our Mission</h3>

          <p className="text-gray-600 text-md m-2">
            Wyandotte Robotics, nicknamed WRATH, is FRC Team 1847 based in
            Kansas City, Kansas. Established in 2006, we are a high school
            robotics team representing Wyandotte High School in the FIRST
            Robotics Competition (FRC). Our team designs, builds, and programs
            robots to compete in annual challenges against teams worldwide while
            fostering innovation, teamwork, and community engagement.
          </p>
        </section>
        <section className="island-shell rounded-2xl mt-8 p-0 sm:p-4">
          <h3 className="font-bold text-2xl m-2">Our Role in FIRST Robotics</h3>

          <p className="text-gray-600 text-md m-2">
            As part of the FIRST Robotics community, we share a commitment to
            Gracious Professionalism® and Coopertition®. These values guide our
            efforts to encourage collaboration, mentorship, and fair
            competition. We strive to ignite passion for STEM within our members
            and community while building robots that push the boundaries of
            innovation.
          </p>
        </section>
      </section>
    </main>
  );
}
