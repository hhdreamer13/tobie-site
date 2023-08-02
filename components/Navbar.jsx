import ThemeButton from "./common/ThemeButton";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    // { href: "/", name: "" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 py-4 h-16">
      <div className="flex items-center justify-between text-slate-50">
        <div className="font-mottona m-0 sm:m-1 text-4xl drop-shadow-sm">
          <Link href="/">Tobie</Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center -2">
          {/* <Link href="/" className="">
            Menu
          </Link> */}
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
