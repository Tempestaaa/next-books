import NavbarMenu from "@/components/layout/navbar-menu";
import NavbarSearch from "@/components/layout/navbar-search";
import NavbarUser from "@/components/layout/navbar-user";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={`h-16 flex-center gap-4 justify-between container mx-auto`}>
      <section className="flex-center gap-8">
        <Link
          href="/"
          className="block font-heading text-2xl font-medium px-4 py-1 custom-border"
        >
          Spine & Chill
        </Link>

        <NavbarMenu />
      </section>

      <section className="flex-center gap-4">
        <NavbarSearch />
        <NavbarUser />
      </section>
    </nav>
  );
}
