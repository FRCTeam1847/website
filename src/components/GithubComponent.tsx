import GithubIcon from "./InternalIcons/GithubIcon";

export default function GithubComponent() {
  return (
    <a
      href="https://github.com/FRCTeam1847"
      target="_blank"
      rel="noreferrer"
      className="rounded-xl p-2 transition"
    >
      <span className="sr-only">Go to Wyandotte Robotics GitHub</span>
      <GithubIcon />
    </a>
  );
}
