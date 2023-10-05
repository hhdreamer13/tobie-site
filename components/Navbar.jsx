"use client";
import { usePathname } from "next/navigation";
import ThemeButton from "./common/ThemeButton";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    // { href: "/", name: "" },
  ];

  const pathname = usePathname();

  // Don't display the navbar on admin routes
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent p-4 h-16">
      <div className="flex items-center justify-between text-slate-100">
        <div className="relative flex flex-col justify-center items-center font-caveat">
          <Link
            href="/sections"
            className="relative group overflow-hidden m-0 sm:m-1 bg-black/20 backdrop-blur-md p-4 pt-[1.2rem] rounded-full transition-transform duration-500"
          >
            <span className="absolute bottom-0 right-0 block w-44 h-44 mb-36 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-white/40 opacity-30 rounded-full group-hover:rotate-90 ease"></span>
            <p className="font-mottona text-3xl sm:text-4xl drop-shadow-sm">
              Tobie
            </p>
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 p-3">
              <div className="relative">
                <div className="absolute bottom-1 right-1/2 translate-x-1/2 w-9 h-[1px] mb-0.5 bg-white transition-all ease-in-out duration-500 transform group-hover:-translate-x-[60px]"></div>
                <div className="absolute bottom-1 right-1/2 translate-x-[100px] w-9 h-[1px] mb-0.5 bg-white transition-all ease-in-out duration-500 transform group-hover:translate-x-1/2"></div>
              </div>

              <div className="relative">
                <div className="absolute bottom-0 right-1/2 translate-x-3 w-5 h-[1px] mb-0.5 bg-white transition-all ease-in-out duration-500 transform group-hover:-translate-x-[75px]"></div>
                <div className="absolute bottom-0 right-1/2 translate-x-[70px] w-5 h-[1px] mb-0.5 bg-white transition-all ease-in-out duration-500 transform group-hover:translate-x-0.5"></div>
              </div>

              <div className="relative">
                <div className="absolute -bottom-1 right-1/2 translate-x-0 w-3 h-[1px] mb-0.5 bg-white transition-all ease-in-out duration-500 transform group-hover:-translate-x-[120px]"></div>
                <div className="absolute -bottom-1 right-1/2 translate-x-[120px] w-3 h-[1px] mb-0.5 bg-white transition-all ease-in-out duration-500 transform group-hover:-translate-x-1.5"></div>
              </div>
            </div>
          </Link>

          {/* Les amis de circular */}
          {/* <svg
            viewBox="0 0 500 500"
            className="absolute top-0 left-0 pointer-events-none"
          >
            <path
              fill="transparent"
              id="curve"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
            />
            <text width="500" fill="#fff" className="text-7xl">
              <textPath xlinkHref="#curve">&nbsp; &nbsp; Les amis de</textPath>
            </text>
          </svg> */}
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="">
          <ThemeButton />
        </div>
      </div>

      {/* Mobile menu */}
      <div className="hidden">
        <div className="pt-4">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="block py-1">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
