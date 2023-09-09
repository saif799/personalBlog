"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/ThemeToggle";

function NavBar() {
  const [toggled, setToggled] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const matches = useMediaQuery("(min-width: 600px)");

  const pathname = usePathname();

  const routes = [
    { name: "Blog", path: "/blogs", active: pathname === "/blogs" },
    { name: "About", path: "/", active: pathname === "/about" },
    { name: "Contact", path: "/", active: pathname === "/contact" },
  ];

  useEffect(() => {
    if (matches) {
      setIsRendered(true);
    } else setIsRendered(false);

    console.log(isRendered);
  }, [toggled, matches, isRendered]);

  return (
    <header className="   flex justify-between">
      <div className=" text-xl font-bold  ">
        <Link href="/"> B(≖_≖ )Saif</Link>
      </div>
      <div className="flex ">
        {isRendered && (
          <div className="flex  leading-8 text-lg gap-5  ">
            {routes.map((route) => (
              <Link key={route.path} href={route.path}>
                {" "}
                {route.name}{" "}
              </Link>
            ))}
          </div>
        )}
        <div className="px-4">
          <ModeToggle />
        </div>
        {!isRendered && (
          <div className="flex gap-4 items-center md:hidden">
            {/* <ModeToggle /> */}
            <div
              className="space-y-[5.41px] cursor-pointer z-50 "
              onClick={() => setToggled((prev) => !prev)}
            >
              <motion.span
                animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
                className=" block h-0.5 w-8 bg-black dark:bg-white"
              ></motion.span>
              <motion.span
                animate={{ width: toggled ? 0 : 24 }}
                className=" block h-0.5 w-6 bg-black dark:bg-white"
              ></motion.span>
              <motion.span
                animate={{
                  rotateZ: toggled ? -45 : 0,
                  y: toggled ? -8 : 0,
                  width: toggled ? 32 : 16,
                }}
                className=" block h-0.5 w-4 bg-black dark:bg-white"
              ></motion.span>
            </div>
          </div>
        )}

        {!isRendered && toggled && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 25 }}
            className=" fixed flex bg-white dark:bg-gray-950 bottom-0 left-0 w-full  h-screen  items-center justify-center"
          >
            <div className="  bg- flex  flex-col  gap-16  ">
              {" "}
              {routes.map((route) => (
                <Link
                  onClick={() => setToggled(false)}
                  key={route.path}
                  href={route.path}
                >
                  {" "}
                  {route.name}{" "}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
