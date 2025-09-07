"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const user = {};

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Loom Logo"
            width={32}
            height={32}
          />
          <h1 className="text-2xl font-karla font-bold">Looma</h1>
        </Link>

        {user && (
          <DropdownMenu>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <div className="relative w-9 h-9 cursor-pointer group">
                      <Image
                        src="/assets/images/dummy.jpg"
                        alt="User Profile"
                        width={36}
                        height={36}
                        className="rounded-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </DropdownMenuTrigger>
                </TooltipTrigger>

                <TooltipContent
                  side="bottom"
                  sideOffset={1}
                  align="center"
                  className="bg-pink-100 text-white py-2.5 px-5 text-sm rounded-4xl shadow-md whitespace-nowrap"
                >
                  Profile and personal settings
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DropdownMenuContent
              className="w-50 font-karla bg-white border border-gray-200 rounded-lg shadow-lg p-1"
              align="end"
            >
              <DropdownMenuLabel
                className=" mt-1 rounded-xl px-2 py-1 text-gray-600 hover:bg-gray-200 cursor-pointer"
                onClick={() => router.push("/profile/12345")}
              >
                My Profile
              </DropdownMenuLabel>

              <DropdownMenuGroup>
                <DropdownMenuItem className="rounded-xl px-2 py-1 hover:bg-gray-200 cursor-pointer">
                  Billings
                </DropdownMenuItem>

                <DropdownMenuItem className="rounded-xl px-2 py-1 hover:bg-gray-200 cursor-pointer">
                  Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator className="my-1 h-px bg-gray-200" />

              <DropdownMenuItem
                className="mb-1 rounded-xl px-2 py-1 hover:bg-red-50 text-red-600 cursor-pointer font-medium"
                onClick={() => console.log("Logging out...")}
              >
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
