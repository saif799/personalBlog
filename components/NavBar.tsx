"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ThemeToggle";

function NavBar() {
  const pathname = usePathname();

  const routes = [
    { name: "Blog", path: "/blogs", active: pathname === "/blogs" },
  ];

  return (
    <header className="   flex justify-between">
      <div className=" text-xl font-bold  ">
        <Link href="/"> B(≖_≖ )Saif</Link>
      </div>
      <div className="flex ">
        <div className="flex  leading-8 text-lg gap-5  ">
          {routes.map((route) => (
            <Link key={route.path} href={route.path}>
              {" "}
              {route.name}{" "}
            </Link>
          ))}
        </div>

        <div className="px-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
