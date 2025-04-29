import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Navbar = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const resumeLink = "https://www.notion.so/josefreireknight/Josefina-Freire-Knight-1de675fd9b07805b9c2fd553388104a5?pvs=4";

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

  // Create a sentinel element for scroll detection
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Create a sentinel element at the top of the page
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '0';
    sentinel.style.height = '1px';
    sentinel.style.width = '100%';
    sentinel.style.pointerEvents = 'none';
    document.body.prepend(sentinel);
    sentinelRef.current = sentinel;

    // Initialize the intersection observer
    const options = {
      threshold: [0, 0.1, 0.2, 1.0],
      rootMargin: '0px'
    };

    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrollingUp = lastScrollY > currentScrollPos;
          const isAtTop = currentScrollPos < 10;
          
          setVisible(isScrollingUp || isAtTop);
          
          lastScrollY = currentScrollPos;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    // Set up intersection observer for the top of the page
    observerRef.current = new IntersectionObserver((entries) => {
      // When sentinel enters/exits the viewport, update navbar visibility
      entries.forEach(entry => {
        
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          // When not at the top, use scroll direction to determine visibility
          handleScroll();
        }
      });
    }, options);

    if (sentinelRef.current) {
      observerRef.current.observe(sentinelRef.current);
    }

    // Add scroll event for scroll direction detection
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      if (observerRef.current && sentinelRef.current) {
        observerRef.current.unobserve(sentinelRef.current);
        observerRef.current.disconnect();
      }
      
      if (sentinelRef.current && sentinelRef.current.parentNode) {
        sentinelRef.current.parentNode.removeChild(sentinelRef.current);
      }
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none outline outline-gray-100 transition-opacity duration-300 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none"
      }`}
    >
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
              <Link href="/#projects">
                <p className="text-gray-400 hover:text-gray-900">Projects</p>
              </Link>
            </li>
            <li>
              <Link href={resumeLink} target="_blank">
                <p className="text-gray-400 hover:text-gray-900">Resume</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full sm:w-1/2  bg-white shadow-md mt-1 py-2 lg:hidden z-50">
            <ul className="flex flex-col space-y-3 px-4">
              <li>
                <Link href="/#projects">
                  <p className="text-gray-400 hover:text-gray-900 py-2">
                    Projects
                  </p>
                </Link>
              </li>
              <li>
                <Link href={resumeLink} target="_blank">
                  <p className="text-gray-400 hover:text-gray-900 py-2">
                    Resume
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
