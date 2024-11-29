import React, { useState } from 'react';
import Link from 'next/link';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter(); // For active link highlighting

  return (
    <nav className="bg-green-600 text-white py-4 px-8 flex items-center justify-between relative">
      {/* Title */}
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => router.push("/")}>
        Waste Wise
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {[
          { name: 'Home', href: '/' },
          { name: 'Products', href: '/Products' },
          { name: 'Submit Products', href: '/submit' },
          { name: 'About Us', href: '/aboutus' },
          { name: 'Dashboard', href: '/dashboard' },
          { name: 'Ranking', href: '/ranking' },
          { name: 'Contact', href: '#contact' },
        ].map((link) => (
          <li
            key={link.name}
            className={`hover:underline ${
              router.pathname === link.href ? 'font-semibold underline' : ''
            }`}
          >
            <Link href={link.href} aria-label={link.name}>
              {link.name}
            </Link>
          </li>
        ))}

        {/* Authentication */}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-green-600 flex flex-col space-y-4 py-4 px-6 md:hidden">
          {[
            { name: 'Home', href: '/' },
            { name: 'Products', href: '/Products' },
            { name: 'Submit Products', href: '/submit' },
            { name: 'About Us', href: '/aboutus' },
            { name: 'Dashboard', href: '/dashboard' },
            { name: 'Ranking', href: '/ranking' },
            { name: 'Contact', href: '#contact' },
          ].map((link) => (
            <li
              key={link.name}
              className={`hover:underline ${
                router.pathname === link.href ? 'font-semibold underline' : ''
              }`}
            >
              <Link href={link.href} aria-label={link.name}>
                {link.name}
              </Link>
            </li>
          ))}

          {/* Authentication */}
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
