"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navItems = [
  {
    label: "Products",
    dropDownItems: [
      { label: "Product 1", href: "#" },
      { label: "Product 2", href: "#" },
      { label: "Product 3", href: "#" },
    ],
  },
  {
    label: "Solutions",
    dropDownItems: [
      { label: "Solution 1", href: "#" },
      { label: "Solution 2", href: "#" },
    ],
  },
  {
    label: "Resources",
    dropDownItems: [
      { label: "Resource 1", href: "#" },
      { label: "Resource 2", href: "#" },
    ],
  },
];

function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger className="bg-transparent text-[rgba(255,255,255,0.6)] ">
              {item.label}
            </NavigationMenuTrigger>
            {item.dropDownItems.length > 0 && (
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {item.dropDownItems.map((dropItem, dropIndex) => (
                    <ListItem
                      key={dropIndex}
                      href={dropItem.href}
                      title={dropItem.label}
                    >
                      Description for {dropItem.label}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="text-[rgba(255,255,255,0.6)]">
              Enterprise
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="text-[rgba(255,255,255,0.6)]">
              Docs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-[rgba(255,255,255,0.6)]">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>Pricing</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 leading-none no-underline outline-none ",
            className
          )}
          {...props}
        >
          <div className="text-sm text-white font-medium leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-[4rem]">
            <div className="flex items-center">
              <svg viewBox="0 0 76 65" className="h-5 text-white">
                <path
                  d="M37.5274 0L75.0548 65H0L37.5274 0Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-white text-2xl font-semibold">Vercel</span>
            </div>

            <NavigationMenuDemo />
          </div>

          <div className="flex items-center space-x-4">
            <button
              style={{ border: "1px solid gray" }}
              className="bg-[rgba(255,255,255,0.05)] text-white  px-4 py-[0.45rem] rounded-[0.5rem] text-sm font-medium hover:bg-[rgba(255,255,255,0.1)] transition"
            >
              Login
            </button>
            <button
              style={{ border: "1px solid gray" }}
              className="bg-[rgba(255,255,255,0.05)] text-white  px-4 py-[0.45rem] rounded-[0.5rem] text-sm font-medium hover:bg-[rgba(255,255,255,0.1)] transition"
            >
              Contact
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="bg-white text-black px-4 py-[0.45rem] rounded-[0.5rem] text-sm font-medium hover:bg-opacity-90 transition"
            >
              Sign Up
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
