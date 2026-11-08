import InstagramIcon from "./InternalIcons/InstagramIcon";

export default function InstagramComponent() {
  return (
    <a
      href="https://www.instagram.com/wyandotterobotics1847"
      target="_blank"
      rel="noreferrer"
      className="rounded-xl p-2  transition"
    >
      <span className="sr-only">Wyandotte Robotics Instagram Page</span>
      <InstagramIcon />
    </a>
  );
}
