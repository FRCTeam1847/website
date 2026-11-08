import FacebookIcon from "./InternalIcons/FacebookIcon";

export default function FacebookComponent() {
  return (
    <a
      href="https://www.facebook.com/wyandotterobotics1847"
      target="_blank"
      rel="noreferrer"
      className="rounded-xl p-2 transition"
    >
      <span className="sr-only">Wyandotte Robotics Facebook Page</span>
	  <FacebookIcon/>
    </a>
  );
}
