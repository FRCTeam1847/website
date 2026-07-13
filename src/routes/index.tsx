import { createFileRoute } from "@tanstack/react-router";
import QuickFacts from "../components/QuickFacts";
import FacebookComponent from "../components/FacebookComponent";
import InstagramComponent from "../components/InstagramComponent";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="page-wrap px-2 py-8">
      <section className=" rounded-2xl p-0 sm:p-6">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Welcome to Wyandotte Robotics (WRATH)
        </h1>
        <div className="rise-in m-6 max-w-3xl mx-auto text-center">
          <p className="leading-7 not-first:mt-6 text-muted-foreground">
            FRC Team 1847 - Based in Kansas City, KS at Wyandotte High School
          </p>
          <p className="leading-7 not-first:mt-6">
            Founded in 2006, we design, build, and program competitive robots as
            part of the FIRST Robotics Competition (FRC). Our mission is to
            empower students with real-world STEM skills and create a welcoming,
            innovative team culture.
          </p>
          <div className="pt-8">
            <p className="leading-7 not-first:mt-6">
              Follow us for updates, team stories, and competition highlights:
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-4">
              <FacebookComponent />
              <InstagramComponent />
            </div>
          </div>
        </div>
      </section>
      <section className="rounded-2xl mt-10 p-6 sm:p-8">
        <QuickFacts />
      </section>
    </main>
  );
}
