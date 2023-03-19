import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Dropdown() {
  return (
    <div className=" flex flex-col">
      <div>
        <button className="flex flex-row items-center peer py-2 text-black  dark:text-white">
          Marketplace
          <RiArrowDropDownLine />
        </button>

        {/* <!-- the menu here --> */}
        <div className="hidden peer-hover:flex hover:flex h-auto flex-col dark:bg-black dark:text-white bg-white drop-shadow-lg z-10 absolute rounded-lg text-sm">
          <a
            className="rounded-t-lg px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            href="#">
            Best AI Prompts
          </a>
          <a
            className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            href="#">
            Best Midjourney Prompt
          </a>
          <a
            className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            href="#">
            Best Gpt Prompt
          </a>
          <a
            className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            href="#">
            Best DALL-E Prompt
          </a>
          <a
            className="rounded-b-lg px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            href="#">
            Best Stable Diffusion Prompt
          </a>
        </div>
      </div>
    </div>
  );
}
