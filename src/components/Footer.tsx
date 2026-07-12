import FacebookComponent from "./FacebookComponent";
import GithubComponent from "./GithubComponent";
import InstagramComponent from "./InstagramComponent";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-(--line) px-4 pb-14 pt-10">
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          &copy; {year} Wyandotte Robotics. All rights reserved.
        </p>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <FacebookComponent />
        <InstagramComponent />
		<GithubComponent/>
      </div>
    </footer>
  );
}
