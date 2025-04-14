import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none outline outline-gray-100">
      <div className="flex flex-grow items-center justify-between m-3 px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white border border-gray-400 ${
                    !mobileMenuOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white border border-gray-400 ${
                    !mobileMenuOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white border border-gray-400 ${
                    !mobileMenuOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !mobileMenuOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !mobileMenuOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Josefina logo - hidden on small screens */}
        <div className="hidden lg:block">
          <Link href="/">
            <p className="text-gray-400 hover:text-gray-900">Josefina</p>
          </Link>
        </div>

        {/* Josefina logo - visible only on small screens, positioned to the right */}
        <div className="lg:hidden ml-auto">
          <Link href="/">
            <p className="text-gray-400 hover:text-gray-900">Josefina</p>
          </Link>
        </div>

        {/* Desktop navigation menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8 2xsm:gap-4">
            <li>
              <Link href="/projects">
                <p className="text-gray-400 hover:text-gray-900">Projects</p>
              </Link>
            </li>
            <li>
              <Link href="/resume">
                <p className="text-gray-400 hover:text-gray-900">Resume</p>
              </Link>
            </li>
            <li>
              <Link href="/about-me">
                <p className="text-gray-400 hover:text-gray-900">About me</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full sm:w-1/2  bg-white shadow-md mt-1 py-2 lg:hidden z-50">
            <ul className="flex flex-col space-y-3 px-4">
              <li>
                <Link href="/projects">
                  <p className="text-gray-400 hover:text-gray-900 py-2">
                    Projects
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/resume">
                  <p className="text-gray-400 hover:text-gray-900 py-2">
                    Resume
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/about-me">
                  <p className="text-gray-400 hover:text-gray-900 py-2">
                    About me
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
