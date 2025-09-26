import React from "react";
import { School } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const user = true;
  return (
    <>
      <div className="h-16 dark:bg-[#0A0A0A]  border-b dark:border-b-gray-800 bg-white border-b-purple-800 fixed top-0 left-0 right-0 duration-300 z-10">
        <div className="max-w-7xl mx-auto hidden h-full md:flex justify-between items-center gap-10">
          <div className="text-blue-500 flex items-center gap-2">
            <School size={25} className="" />
            <h1 className="hidden md:block font-extrabold text-2xl ">
              Virtual School
            </h1>
          </div>
          {/* <dark mode and user icon */}
          <div>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2 ">
                <button variant="outline">Login</button>
                <Button>SignUp</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
