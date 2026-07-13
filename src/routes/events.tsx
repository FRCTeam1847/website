import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/events")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: "description",
        content: "Team Event Calendar",
      },
      {
        title: "Events — Wyandotte Robotics",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <section className="rise-in">
      <h1 className="m-8 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Our Events Calendar
      </h1>
      <p className="pt-8 m-8  text-md text-muted-foreground">
        Stay up-to-date with our upcoming events, meetings, and competitions by
        following our calendar. You can add events directly to your own calendar
        to ensure you never miss an important date. On mobile click the <b>+</b>{" "}
        at the bottom right.
      </p>
      <div className="calendar-embed">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=33c26cef594b78b5735e8786d8c340cb6166fe388ebe2dda89aa08fa1d973cd9%40group.calendar.google.com&ctz=America%2FChicago"
          //   style="border: 2"
          width="100%"
          height="600"
        ></iframe>
      </div>
    </section>
  );
}
