import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-6 md:px-28 flex flex-col justify-center w-full py-12 mx-auto bg-gray-100 dark:bg-black mt-10 text-center items-center">
      <p className="">© PromptBase 2023</p>
      <div className="flex flex-row gap-4">
        <Link href="#">FAQ</Link>
        <Link href="#">Contact</Link>
        <Link href="#">Changelog</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Privacy</Link>
      </div>
      <div className="flex flex-col mt-4">
        <Link href="/best-ai-prompts">Best AI Prompts</Link>
        <Link href="/best-midjourney-v5-prompts">
          Best Midjourney V5 Prompts
        </Link>
        <Link href="/best-midjourney-prompts">Best Midjourney Prompts</Link>
        <Link href="/best-chatgpt-prompts">Best ChatGPT Prompts</Link>
        <Link href="/best-dall-e-prompts">Best DALL-E Prompts</Link>
        <Link href="/best-stable-diffusion-prompts">
          Best Stable Diffusion Prompts
        </Link>
        <Link href="/best-gpt-4-prompts">Best GPT-4 Prompts</Link>
        <Link href="/best-gpt-3-prompts">Best GPT-3 Prompts</Link>
      </div>
    </div>
  );
};

export default Footer;
