import ThemeButton from "./common/ThemeButton";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    // { href: "/", name: "Actualité" },
    // { href: "/", name: "Ateliers" },
    // { href: "/", name: "Cartographie" },
    // { href: "/", name: "Histoires" },
    // { href: "/", name: "Téléchargement" },
    // { href: "/", name: "Jeu" },
    // { href: "/", name: "À propos" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent px-6 py-4 bg-cover h-32">
      <div className="flex items-center justify-between text-slate-50">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-mottona text-4xl">
            Tobie
          </Link>
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
