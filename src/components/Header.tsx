import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
// import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const closeMenus = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle =
    (text: string) => (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      setOpenDropdown((current) => (current === text ? null : text));
    };

  const links = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Sponsors",
      href: "/sponsors",
    },
    {
      text: "Resources",
      links: [
        {
          text: "Team Resources",
          href: "/resources",
        },
        {
          text: "Branding",
          href: "/branding",
        },
      ],
    },
    {
      text: "Events",
      href: "/events",
    },
    // {
    //   text: "Media",
    //   href: "/media",
    // },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-(--line) px-4 backdrop-blur-lg">
      <nav
        ref={navRef}
        className="flex items-center justify-between gap-x-2 gap-y-3 py-3 sm:py-4"
      >
        <h2 className="m-0 min-w-0 flex-1 text-base font-semibold tracking-tight">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2 py-1.5 text-xl sm:text-2xl md:text-3xl"
            onClick={closeMenus}
          >
            <img
              src="/images/1847-mascot-color.png"
              alt="Logo"
              className="mb-1 h-10 w-12 shrink-0 sm:h-12 sm:w-14 md:mb-0 md:mr-2 md:h-13 md:w-16.25"
              width="65px"
            />
            <span className="min-w-0 flex-1 leading-tight font-bold wrap-break-word">
              Wyandotte Robotics
            </span>
          </Link>
        </h2>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-(--line) bg-white/70 text-(--sea-ink) shadow-sm transition hover:bg-white/90 lg:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.75}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              }
            />
          </svg>
        </button>

        <div className="hidden items-center gap-x-4 gap-y-1 text-xl font-semibold lg:flex lg:flex-nowrap">
          {links.map(({ text, href, links: subLinks }) => {
            if (subLinks?.length) {
              return (
                <details
                  key={text}
                  className="group relative"
                  open={openDropdown === text}
                >
                  <summary
                    className="nav-link flex cursor-pointer list-none items-center gap-1 text-black"
                    onClick={handleDropdownToggle(text)}
                  >
                    {text}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 transition-transform duration-200 group-open:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </summary>
                  <div className="mt-2 min-w-75 rounded-xl border border-(--line) bg-white/90 p-2 shadow-lg absolute">
                    {subLinks.map(({ text: text2, href: href2 }) => (
                      <Link
                        key={text2}
                        to={href2}
                        className="block rounded-lg px-3 py-2 text-xl no-underline transition hover:bg-gray-200 hover:text-black"
                        onClick={closeMenus}
                      >
                        {text2}
                      </Link>
                    ))}
                  </div>
                </details>
              );
            }

            return (
              <Link
                key={text}
                to={href}
                className="nav-link"
                activeProps={{ className: "nav-link is-active" }}
                onClick={closeMenus}
              >
                {text}
              </Link>
            );
          })}
        </div>

        {isMenuOpen ? (
          <div id="mobile-navigation" className="basis-full lg:hidden">
            <div className="flex flex-col gap-2 rounded-2xl border border-(--line) bg-(--surface-strong)/95 p-3 shadow-lg">
              {links.map(({ text, href, links: sublinks }) => {
                if (sublinks?.length) {
                  return (
                    <details
                      key={text}
                      className="group"
                      open={openDropdown === text}
                    >
                      <summary
                        className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2 font-semibold text-black"
                        onClick={handleDropdownToggle(text)}
                      >
                        <span>{text}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 transition-transform duration-200 group-open:rotate-180"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </summary>
                      <div className="mt-2 flex flex-col gap-1 pl-3">
                        {sublinks.map(({ text: text2, href: href2 }) => (
                          <Link
                            key={text2}
                            to={href2}
                            className="rounded-lg px-3 py-2 text-base text-black transition hover:bg-gray-200 hover:text-black"
                            onClick={closeMenus}
                          >
                            {text2}
                          </Link>
                        ))}
                      </div>
                    </details>
                  );
                }

                return (
                  <Link
                    key={text}
                    to={href}
                    className="rounded-lg px-3 py-2 font-semibold text-black transition hover:bg-gray-200 hover:text-black"
                    onClick={closeMenus}
                  >
                    {text}
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
