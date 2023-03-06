import { Poppins } from "@next/font/google";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import SignIn from "~/components/SignIn";
import { BASE_DOMAIN } from "~/utils/constants";
import Github from "../components/GitHub";
const poppins = Poppins({ weight: "800", subsets: ["latin"] });

export default function Header() {
  return (
    <div className="flex items-center justify-between px-3 sm:px-3">
      <div className="flex items-center space-x-3">
        <a
          href="https://space.bilibili.com/37648256"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/video.png"
            alt="logo"
            className="animate-bounce"
            width={50}
            height={50}
          />
        </a>
        <a href={BASE_DOMAIN}>
          <h2 className={clsx("text-lg sm:text-3xl", poppins.className)}>
            <span className="text-pink-400">哔哩哔哩</span> BibiGPT
          </h2>
        </a>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-5">
        <div
          id="tooltip-light"
          role="tooltip"
          className="tooltip invisible absolute z-10 inline-block rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 opacity-0 shadow-sm"
        >
          那可太感谢了！
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a
          data-tooltip-target="tooltip-feedback"
          data-tooltip-style="light"
          href="https://jimmylv.feishu.cn/share/base/form/shrcn9PwPzGGGiJCnH0JNfM1P3b"
          rel="noreferrer noopener"
          target="_blank"
          className="flex items-center space-x-2"
        >
          🔥 <span className="hidden sm:block">给我提</span>反馈
          <span className="hidden sm:block">？</span>
        </a>
        <a
          href="javascript:(function(){if(!window.location.hostname
  .includes('bilibili.com')){alert('🔖请拖至书签栏，进入B站视频页面再点击书签哦！')};location.href=location.href.replace('bilibili.com','bilibili.jimmylv.cn')}())"
          rel="noreferrer noopener"
          target="_blank"
          className="flex hidden items-center space-x-2 sm:block"
          aria-label="书签版"
        >
          🔖
          <span className="relin-paragraph-target hidden text-slate-500 sm:block">
            (书签版)
          </span>
        </a>
        <a
          href={BASE_DOMAIN + "/ios"}
          rel="noreferrer noopener"
          target="_blank"
          className="flex items-center space-x-2"
          aria-label="iOS版"
        >
          <Image
            src="/shortcuts.png"
            alt="logo"
            width={33}
            height={33}
            className="max-w-none"
          />
          <span className="relin-paragraph-target hidden text-slate-500 sm:block">
            (iOS版)
          </span>
        </a>
        <a
          href="https://github.com/JimmyLv/BiliGPT"
          rel="noreferrer noopener"
          target="_blank"
          className=""
        >
          <Github width="33" height="33" />
        </a>
        <SignIn />
      </div>
    </div>
  );
}
