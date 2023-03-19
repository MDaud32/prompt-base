import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Dropdown() {
  return (
    <div class=" flex flex-col">
      <div>
        <button class="flex flex-row items-center peer py-2 text-black  dark:text-white">
          Dropdown
          <RiArrowDropDownLine />
        </button>

        {/* <!-- the menu here --> */}
        <div
          class="hidden peer-hover:flex hover:flex
         h-auto flex-col bg-white drop-shadow-lg z-10 absolute">
          <a class="px-5 py-3 hover:bg-gray-200" href="#">
            Best AI Prompts
          </a>
          <a class="px-5 py-3 hover:bg-gray-200" href="#">
            Best Midjourney Prompt
          </a>
          <a class="px-5 py-3 hover:bg-gray-200" href="#">
            Best Gpt Prompt
          </a>
          <a class="px-5 py-3 hover:bg-gray-200" href="#">
            Best DALL-E Prompt
          </a>
          <a class="px-5 py-3 hover:bg-gray-200" href="#">
            Best Stable Diffusion Prompt
          </a>
        </div>
      </div>
    </div>
  );
}
