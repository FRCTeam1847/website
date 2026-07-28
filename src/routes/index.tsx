import { createFileRoute } from "@tanstack/react-router";
import QuickFacts from "../components/QuickFacts";
import FacebookComponent from "../components/FacebookComponent";
import InstagramComponent from "../components/InstagramComponent";
import Features from "../components/layouts/Features";
import RoundLogo from "../images/1847-round-color.png?quality=85&format=webp"

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="page-wrap px-2 py-8">
      <section className=" rounded-2xl p-0 sm:p-6">
        <div className="flex items-center justify-center ">
          <img
            src={RoundLogo}
            alt="Wyandotte Robotics Logo"
            className="size-auto"
            loading="lazy"
          />
        </div>
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
      <section className="rounded-2xl mt-10 p-6 sm:p-8">
        <Features
          title="Frequently Asked Questions"
          subtitle="Explore the questions below to learn more about our robotics team and discover how joining us can elevate your journey in STEM and engineering."
          items={[
            {
              title: "What is Wyandotte Robotics?",
              description:
                "Wyandotte Robotics, nicknamed WRATH, is FRC Team 1847 based in Kansas City, Kansas. Established in 2006, we are a high school robotics team participating in the FIRST Robotics Competition (FRC) representing Wyandotte High School. Our team designs, builds, and programs robots to compete in annual challenges against other teams worldwide.",
            },

            {
              title: "How can I join Wyandotte Robotics?",
              description:
                "We welcome all interested high school students from Wyandotte High School and USD 500 schools. No prior experience is necessary! You can join by attending one of our meetings at Wyandotte High School or by contacting us through our website or social media channels for more information.",
            },

            {
              title: "Do I need prior experience in robotics to join the team?",
              description:
                "No prior experience is required. We provide training and mentorship in various areas like mechanical design, programming, electronics, and project management. All you need is enthusiasm and a willingness to learn.",
            },

            {
              title: "When and where does the team meet?",
              description:
                "We meet at Wyandotte High School in Kansas City, Kansas. During the build season (January to April), meetings are held multiple times a week after school. Off-season meetings are less frequent but focus on skill development and community outreach.",
            },

            {
              title: "What is the FIRST Robotics Competition (FRC)?",
              description:
                "The FIRST Robotics Competition is an international high school robotics competition that combines the excitement of sport with the rigors of science and technology. Teams are challenged to design, build, and program robots to perform tasks in a game that changes each year.",
            },

            {
              title:
                "What has Wyandotte Robotics achieved since its rookie year in 2006?",
              description:
                "Since 2006, Wyandotte Robotics has participated in over 30 FRC events including 22 regional competitions. Our team prides itself on growth, both in technical skills and in fostering a collaborative team environment.",
            },

            {
              title:
                "Who can join Wyandotte Robotics? Is it limited to students from Wyandotte High School?",
              description:
                "While we are based at Wyandotte High School, students from other schools in the USD 500 school district are welcome to join. We encourage anyone interested in STEM, robotics, or teamwork to become a part of our diverse group.",
            },
            {
              title: "How is the team funded?",
              description:
                "Wyandotte Robotics is funded through a combination of school support, sponsorships from local businesses, grants, and fundraising activities organized by team members and their families. These funds cover materials, competition fees, travel expenses, and other operational costs.",
            },
            {
              title: "What is the mission of Wyandotte Robotics?",
              description:
                "Our mission is to inspire young people to become leaders in science, technology and their community by engaging them in exciting, mentor-based programs. We aim to build STEM skills, foster innovation, and develop essential life capabilities such as self-confidence, communication, and leadership.",
            },
            {
              title: "How can I support Wyandotte Robotics?",
              description: (
                <>
                  You can support us by:
                  <br />• <strong>Becoming a Sponsor: </strong>Financial
                  contributions help us purchase materials and cover competition
                  fees.
                  <br />• <strong>Donating Materials or Services:</strong>
                  In-kind donations are greatly appreciated.
                  <br />• <strong>Volunteering as a Mentor:</strong> Share your
                  expertise in engineering, programming, marketing, or project
                  management.
                  <br />• <strong>Attending Our Events:</strong> Cheer us on at
                  competitions or community outreach events.
                  <br />• <strong>Spreading the Word:</strong>
                  Follow us on social media and share our mission with others.
                  <br />
                  <br />
                  Contact us through our website for more details on how you can
                  help.
                </>
              ),
            },
          ]}
        />
      </section>
    </main>
  );
}
