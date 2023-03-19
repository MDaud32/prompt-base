import React from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import Logo from "../public/prompt.png";
import Menu from "./Menu";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div className="text-black dark:text-white">
          <BsSunFill onClick={() => setTheme("light")} />
        </div>
      );
    } else {
      return (
        <div className="text-black dark:text-white">
          <BsMoonFill onClick={() => setTheme("dark")} />
        </div>
      );
    }
  };
  return (
    <>
      <nav className="w-full flex flex-wrap top-0 items-center justify-between md:px-2 py-2 dark:bg-black/60 bg-white/90 mb-3 shadow-sm dark:shadow-gray-600 shadow-gray-200 fixed">
        <div className="px-4 md:mx-auto flex flex-col md:items-center md:flex-row w-full justify-between">
          <div className="w-full flex flex-row justify-between lg:static items-center">
            <div>
              <Image src={Logo} alt="logo" width={60} height={60} />
            </div>
            <Link
              className="hidden md:block text-xl font-bold leading-relaxed mr-4 py-2 whitespace-nowrap dark:text-white"
              href="/">
              PromptBase
            </Link>

            <div className="relative w-full flex flex-row items-center">
              <input
                type="text"
                id="search-navbar"
                className="p-1 w-full border text-gray-900 dark:focus:border-blue-500  dark:focus:border-2 outline-none rounded-lg  bg-gray-50  dark:bg-slate-500/30 dark:placeholder-gray-400 dark:text-white "
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 pr-2 right-0 flex items-center pointer-events-none">
                <BiSearch className="" />
              </div>
            </div>
            <div className="ml-2 hidden md:flex flex-row items-center gap-4 text-sm font-semibold">
              <Menu />
              <Link href="#" className="hover:underline hover:text-gray-400">
                Generate
              </Link>
              <Link href="#" className="hover:underline hover:text-gray-400">
                Hire
              </Link>
              <Link href="#" className="hover:underline hover:text-gray-400">
                Login
              </Link>
              <Link
                href="#"
                className="mr-2 hover:underline hover:text-gray-400">
                Sell
              </Link>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              {!navbarOpen ? (
                <FiMenu className="text-black dark:text-white" />
              ) : (
                <AiOutlineClose className="text-black dark:text-white absolute z-30" />
              )}
            </button>
            <button className="ml-2 items-center text-xl">
              {renderThemeChanger()}
            </button>
          </div>
          {/* mobile */}
          <div
            className={`top-0 right-0 w-full bg-gray-100  p-10 pl-20 text-white fixed h-screen z-40  ease-in-out duration-300 ${
              navbarOpen ? "translate-x-0 " : "translate-x-full"
            }`}
            id="example-navbar-danger">
            <div>
              <Image
                src={Logo}
                alt="logo"
                width={60}
                height={60}
                className="absolute top-2 left-2"
              />
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              {!navbarOpen ? (
                <FiMenu className="text-black dark:text-white" />
              ) : (
                <AiOutlineClose className="text-black absolute z-30 right-16 top-4" />
              )}
            </button>
            <div className="flex flex-col w-full">
              <ul className="flex flex-col items-center  text-black dark:text-gray-100">
                {data.map((item) => (
                  <li className="" key={item.title}>
                    <Link
                      className="flex items-center text-center text-lg uppercase leading-snug text-black hover:opacity-60 font-semibold"
                      href={item.link}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const data = [
  {
    link: "",
    title: "Home",
  },
  {
    link: "",
    title: "Marketplace",
  },
  {
    link: "",
    title: "Generate",
  },
  {
    link: "",
    title: "Hire",
  },
  {
    link: "",
    title: "Login",
  },
  {
    link: "",
    title: "Sell",
  },
];
