import React from "react";
import Background from "../assets/Monitor.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative h-screen">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex justify-center items-center mx-auto max-w-screen-xl p-2">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Dover Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Dover
            </span>
          </a>
        </div>
      </nav>
      <nav className="bg-blue-600 dark:bg-blue-700">
        <div className="max-w-screen-xl px-4 py-2 mx-auto">
          <div className="flex items-center">
            <ul className="flex justify-around w-full flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-600 hover:bg-gray-100 h-10 px-4 py-2">
                    OPW
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                    <DropdownMenuItem className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100">
                      <Link to="/opdprod">Production</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100">
                      <Link to='/opdtest'>Testing</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
              <DropdownMenu>
                  <DropdownMenuTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-600 hover:bg-gray-100 h-10 px-4 py-2">
                    CPC
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                    <DropdownMenuItem className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100">
                      <Link to="/cpcprod">Production</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100">
                      <Link to='/cpctest'>Testing</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
              <DropdownMenu>
                  <DropdownMenuTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-600 hover:bg-gray-100 h-10 px-4 py-2">
                    MAAG
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                    <DropdownMenuItem className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100">
                      <Link to="/maagprod">UAT</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100">
                      <Link to='/maagtest'>Dev</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="absolute inset-0 z-[-1]">
        <img
          src={Background}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Home;