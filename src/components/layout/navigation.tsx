"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiMenu, FiX, FiBarChart2 } from "react-icons/fi";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-white/5 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <FiBarChart2 className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">TeamPulse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Features
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Pricing
            </Link>
            <Link href="#product" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Product
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-foreground">
              Sign in
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
              Start free trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col space-y-4">
              <Link href="#features" className="text-muted-foreground hover:text-foreground px-2">
                Features
              </Link>
              <Link href="#pricing" className="text-muted-foreground hover:text-foreground px-2">
                Pricing
              </Link>
              <Link href="#product" className="text-muted-foreground hover:text-foreground px-2">
                Product
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground px-2">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/5">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Sign in
                </Button>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  Start free trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}