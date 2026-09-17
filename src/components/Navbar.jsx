"use client";
import { useState } from "react";
import { MapPin, User, ArrowRight, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Link from "next/link";
export default function Navbar({ onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isActive, setActive] = useState("home");
  const navLinks = [
    { name: "Home", key: "home", href: "#home" },
    { name: "Vehicles", key: "vehicle", href: "#vehicles" },
    { name: "How It Works", key: "howItWorks", href: "#how-it-works" },
    { name: "About", key: "about", href: "#why-rypp" },
    { name: "Career", key: "career", href: "#career" },
    { name: "Contact", key: "contact", href: "#footer" },
  ];
  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {" "}
          {/* Brand Logo */}{" "}
          <Link href="#home" onClick={() => setActive("home")} className="flex flex-col group">
            {" "}
            <Image src="https://i.ibb.co.com/cS02N9HD/rypp-logo-png-removebg-preview-1.png" alt="RYPP" width={60} height={60} />{" "}
          </Link>{" "}
          {/* Desktop Navigation */}{" "}
          <nav className="hidden lg:flex items-center space-x-8">
            {" "}
            {navLinks.map((link) => {
              const active = isActive === link.key;
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setActive(link.key)}
                  className={`relative font-medium text-sm py-1 transition-colors ${active ? "text-[#FF1E36] font-semibold" : "text-gray-600 hover:text-[#FF1E36]"}`}
                >
                  {" "}
                  {link.name} {/* Active underline */} {active && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF1E36] rounded-full" />}{" "}
                </Link>
              );
            })}{" "}
          </nav>{" "}
          {/* Desktop Right Utilities */}{" "}
          <div className="hidden lg:flex items-center space-x-4">
            {" "}
            {/* Location Selector */}{" "}
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 bg-gray-50/70 hover:bg-gray-100 text-xs font-semibold text-gray-800 transition-colors cursor-pointer">
              {" "}
              <MapPin className="w-3.5 h-3.5 text-[#FF1E36]" /> <span>Bengaluru</span> <ArrowRight className="w-3 h-3 text-gray-400" />{" "}
            </button>{" "}
            {/* Sign In */}{" "}
            <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              {" "}
              <User className="w-4 h-4 text-gray-500" /> <span>Sign In</span>{" "}
            </button>{" "}
            {/* Book Now Button */}{" "}
            <button
              onClick={onBookClick}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF1E36] hover:bg-[#E01B32] text-white text-sm font-semibold shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 transition-all active:scale-[0.98] cursor-pointer"
            >
              {" "}
              <span>Book Now</span> <ArrowRight className="w-4 h-4" />{" "}
            </button>{" "}
          </div>{" "}
          {/* Mobile Hamburger Button */}{" "}
          <div className="lg:hidden flex items-center gap-3">
            {" "}
            <button onClick={onBookClick} className="px-3.5 py-1.5 rounded-lg bg-[#FF1E36] text-white text-xs font-semibold shadow-sm cursor-pointer">
              {" "}
              Book Now{" "}
            </button>{" "}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Open mobile menu"
            >
              {" "}
              <Menu className="w-6 h-6" />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} onBookClick={onBookClick} />
    </>
  );
}
