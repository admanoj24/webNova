"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/aboutTeam" },
  {
    title: "Services",
    href: "/services",
    content: [
      {
        title: "IT Consulting",
        href: "/dropdown/consulting",
        description: "Expert advice for your IT needs",
        image: "/IT.svg",
      },
      {
        title: "Software Development",
        href: "/dropdown/software",
        description: "Custom software solutions",
        image: "/software.svg",
      },
      {
        title: "Cloud Services",
        href: "/dropdown/cloud",
        description: "Scalable cloud infrastructure",
        image: "/cloud.svg",
      },
      {
        title: "Cybersecurity",
        href: "/dropdown/cyber",
        description: "Protect your digital assets",
        image: "/cyber.svg",
      },
    ],
  },
  { title: "Careers", href: "/careers" },
  {
    title: "Resources",
    href: "/resources",
    content: [
      {
        title: "Blog",
        href: "/dropdown/blog",
        description: "Read our latest articles and insights",
        image: "/blog.svg",
      },
      {
        title: "Case Studies",
        href: "/dropdown/caseStudies",
        description: "Explore our client success stories",
        image: "/case.svg",
      },
      {
        title: "Whitepapers",
        href: "/dropdown/whitepaper",
        description: "In-depth research and analysis",
        image: "/paper.svg",
      },
      {
        title: "FAQ",
        href: "/dropdown/faq",
        description: "Answers to commonly asked questions",
        image: "/faq.svg",
      },
    ],
  },
];

const ListItem = React.forwardRef(
  ({ className, title, children, image, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600",
              className
            )}
            {...props}
          >
            <div className="flex items-center space-x-4">
              <Image
                src={image}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 object-cover"
              />
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export function NavbarItems() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 sm:h-20 md:h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/ksvn.png"
            alt="KSVN Logo"
            width={300}
            height={100}
            className="w-auto h-12 sm:h-16 md:h-20"
          />
        </Link>
        <NavigationMenu className="hidden lg:flex lg:space-x-4">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.content ? (
                  <NavigationMenuTrigger className="text-base lg:text-lg lg:px-5 lg:py-3">
                    {item.title}
                  </NavigationMenuTrigger>
                ) : (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-base lg:text-lg lg:px-5 lg:py-3"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
                {item.content && (
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.content.map((subItem) => (
                        <ListItem
                          key={subItem.title}
                          title={subItem.title}
                          href={subItem.href}
                          image={subItem.image}
                        >
                          {subItem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Link href="/business" className="hidden sm:inline-flex">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3">
              For Business
            </Button>
          </Link>
          <Link href="/login" className="hidden sm:inline-flex">
            <Button
              variant="outline"
              className="text-blue-600 border-blue-600 hover:bg-blue-50 text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3"
            >
              Login
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="p-2 lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="z-50 w-full max-w-[300px] sm:max-w-[400px] px-4 sm:px-6 py-8 sm:py-10 overflow-y-auto bg-gray-900 text-white"
            >
              <DialogTitle className="text-base sm:text-lg font-semibold mb-4">
                Navigation Menu
              </DialogTitle>
              <nav
                className="flex flex-col space-y-4 sm:space-y-6"
                aria-label="Mobile Navigation"
              >
                <Link href="/" className="flex items-center mb-4 sm:mb-6">
                  <Image
                    src="/ksvn.png"
                    alt="KSVN Logo"
                    width={300}
                    height={100}
                    className="w-auto h-12 sm:h-16"
                  />
                </Link>
                {navItems.map((item) => (
                  <div key={item.title} className="space-y-2 sm:space-y-3">
                    <Link
                      href={item.href}
                      className="block text-lg sm:text-xl font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      {item.title}
                    </Link>
                    {item.content && (
                      <ul className="ml-4 space-y-3">
                        {item.content.map((subItem) => (
                          <li
                            key={subItem.title}
                            className="flex items-center space-x-3 group"
                          >
                            <Image
                              src={subItem.image}
                              alt=""
                              width={24}
                              height={24}
                              className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                            />
                            <Link
                              href={subItem.href}
                              className="text-sm text-gray-200 group-hover:text-blue-400 transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                <Link href="/business" className="mt-4 sm:mt-6 sm:hidden">
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 text-sm sm:text-base">
                    For Business
                  </Button>
                </Link>
                <Link href="/login" className="mt-2 sm:mt-3">
                  <Button
                    variant="outline"
                    className="w-full text-blue-400 border-blue-400 hover:bg-blue-900 text-sm sm:text-base"
                  >
                    Login
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
