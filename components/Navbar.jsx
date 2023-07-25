import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { href: "/a-propos", name: "À propos" },
    { href: "/episodes", name: "Épisodes" },
    { href: "/galerie", name: "Galerie" },
    { href: "/connexion", name: "Connexion" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent px-6 py-4">
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
          <Link href="/connexion" className="">
            Connexion
          </Link>
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
