"use client";
import { usePathname } from "next/navigation";
import ThemeButton from "./common/ThemeButton";
import HomeButton from "./common/HomeButton";

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
      <div className="flex justify-between items-center text-slate-100">
        <div className="absolute left-4 top-4">
          <HomeButton />
        </div>
        <div className="absolute right-4 top-4">
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
