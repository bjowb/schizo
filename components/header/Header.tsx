"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import { ChevronLeftIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MenuIcon } from "lucide-react";
// import { MenuBarIcon } from "lucide-react";

import schizologoonly from "@/images/schizologoonly.jpg";
import schizologo from "@/images/schizologo.jpg";
import Image from "next/image";
import { useSidebar } from "../ui/sidebar";
import CreatePost from "../post/CreatePost";

function Header() {
  const { user } = useUser();
  const { setTheme } = useTheme();
  const { toggleSidebar, open, isMobile } = useSidebar();

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      {/* Left Side  */}
      <div className="h-10 flex items-center ">
        {open && !isMobile ? (
          <ChevronLeftIcon className="w-6 h-6" onClick={toggleSidebar} />
        ) : (
          <div className="flex items-center gap-2">
            <MenuIcon className="w-6 h-6" onClick={toggleSidebar} />
            <Image
              src={schizologo}
              alt="schizo logo"
              width={75}
              height={75}
              className="hidden md:block"
            />
            <Image
              src={schizologoonly}
              alt="schizo logo"
              width={50}
              height={50}
              className="block md:hidden pl-1"
            />
          </div>
        )}
      </div>

      {/* Right SIde */}
      <div className="flex items-center gap-2">
          <CreatePost />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button asChild variant="outline">
            <SignInButton mode="modal" />
          </Button>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
