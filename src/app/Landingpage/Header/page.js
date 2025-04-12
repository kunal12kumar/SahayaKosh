// This is the file of header 

"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const navItems = [
    {
      name: "About Us",
      link: "/Landingpage/Aboutus",
    },
    {
      name: "How It Works",
      link: "/Landingpage/HowItWork",
    },
    {
      name: "Contact",
      link: "/Landingpage/contactus",
    },
    {
      name: "FAQ",
      link:"/Landingpage"
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative   z-20
 w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
          <Link href="/auth/login">     <NavbarButton variant="primary" className="bg-[#2c67f2] text-white" >Login</NavbarButton> </Link>
          <Link href="/auth/registration/accounttypetoggle">     <NavbarButton variant="primary" className="bg-[#2c67f2]  text-white" >Register</NavbarButton>  </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
             <Link href="/auth/login"> <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-[#2c67f2] text-white">
                Login
              </NavbarButton> </Link>
            <Link href="/auth/registration/accounttypetoggle">  <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-[#2c67f2] text-white">
                Register
              </NavbarButton> </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
     
      {/* Navbar */}
    </div>
  );
}

