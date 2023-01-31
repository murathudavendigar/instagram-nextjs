import Image from "next/image";
import { HomeIcon, SearchIcon } from "@heroicons/react/outline";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl ">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24">
          <Image
            src="https://marka-logo.com/wp-content/uploads/2020/04/Instagram-Logo.png"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative w-10  lg:hidden flex-shtink-0 cursor-pointer">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Middle */}
        <div className="mex-a-xs">
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
      </div>
    </div>
  );
};

export default Header;
