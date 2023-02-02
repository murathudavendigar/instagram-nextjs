import Image from "next/image";
import {
  HeartIcon,
  MenuIcon,
  MoonIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { useTheme } from "next-themes";
import { useState } from "react";

const Header = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  // const open = useRecoilValue(modalState)  //! Read Only
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <div className="shadow-sm border-b bg-white text-black dark:bg-black dark:text-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 cursor-pointer">
          {theme === "dark" ? (
            <Image
              src="https://i0.wp.com/www.christinasandsengen.com/wp-content/uploads/2014/09/instagram-logo-black-on-white.png"
              fill
              style={{ objectFit: "contain" }}
              alt="Instagram"
              loading="lazy"
            />
          ) : (
            <Image
              src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
              fill
              style={{ objectFit: "contain" }}
              alt="Instagram"
              loading="lazy"
            />
          )}
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative w-10 lg:hidden flex-shtink-0 cursor-pointer">
          {theme === "dark" ? (
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/28/Instagram_logo.png"
              fill
              style={{ objectFit: "contain" }}
              alt="Instagram"
              loading="lazy"
            />
          ) : (
            <Image
              src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
              fill
              style={{ objectFit: "contain" }}
              alt="Instagram"
              loading="lazy"
            />
          )}
        </div>

        {/* Middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 dark:bg-[#262626] dark:border-[#262626] block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navButton" />
          <MenuIcon
            className="h-7 md:hidden cursor-pointer"
            onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}
          />

          {session ? (
            <>
              <div className="relative navButton">
                <PaperAirplaneIcon className="navButton rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs h-5 w-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navButton"
              />
              <UserGroupIcon className="navButton" />
              <HeartIcon className="navButton" />
              <MoonIcon
                className="navButton"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />

              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="avatar"
                className="h-7 w-7 md:h-10 md:w-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={() => signIn()}>Sign In</button>
          )}
        </div>
      </div>
      <div className="transition-all duration-200 overflow-x-hidden overflow-y-hidden">
        {isOpenBurgerMenu && (
          <div className="transition-all space-y-2">
            <div className="burgerDiv" onClick={() => router.push("/")}>
              <HomeIcon className="burgerButton" />
              <p className="text-base font-semibold">Home</p>
            </div>
            {session && (
              <>
                <div className="burgerDiv">
                  <PaperAirplaneIcon className="burgerButton rotate-45" />
                  <p className="text-base font-semibold">Messages</p>
                </div>
                <div className="burgerDiv" onClick={() => setOpen(true)}>
                  <PlusCircleIcon className="burgerButton" />
                  <p className="text-base font-semibold">Upload Post</p>
                </div>
                <div className="burgerDiv">
                  <UserGroupIcon className="burgerButton" />
                  <p className="text-base font-semibold">Discover</p>
                </div>
                <div className="burgerDiv">
                  <HeartIcon className="burgerButton" />
                  <p className="text-base font-semibold">Notifications</p>
                </div>
                <div
                  className="burgerDiv"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  <MoonIcon className="burgerButton" />
                  <p className="text-base font-semibold">Dark / Light Mode</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
