import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { href: "/a-propos", name: "À propos" },
    { href: "/episodes", name: "Épisodes" },
    { href: "/galerie", name: "Galerie" },
    { href: "/connexion", name: "Connexion" },
  ];

  return (
    <nav className="bg-transparent px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-mottona text-4xl">
            Tobie
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-slate-800 hover:text-slate-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/connexion"
            className="text-slate-800 hover:text-slate-600"
          >
            Connexion
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="pt-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block py-1 text-slate-800 hover:text-slate-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
