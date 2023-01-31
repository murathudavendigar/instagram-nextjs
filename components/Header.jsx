import Image from "next/image";
import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24">
          <Image
            src="https://marka-logo.com/wp-content/uploads/2020/04/Instagram-Logo.png"
            fill
            style={{ objectFit: "contain" }}
            alt="Instagram"
          />
        </div>
        <div className="relative w-10  lg:hidden flex-shtink-0 cursor-pointer">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            fill
            style={{ objectFit: "contain" }}
            alt="Instagram"
          />
        </div>

        {/* Middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navButton" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navButton">
            <PaperAirplaneIcon className="navButton rotate-45" />
            <di className="absolute -top-1 -right-2 text-xs h-5 w-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </di>
          </div>
          <PlusCircleIcon className="navButton" />
          <UserGroupIcon className="navButton" />
          <HeartIcon className="navButton" />

          <img
            src="https://pbs.twimg.com/profile_images/1589564512599932929/JuGsRJNz_400x400.jpg"
            alt="avatar"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
