'use client';

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-backdrop-filter:bg-background/60">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/logo-single.png"
                        alt="Medimeet Logo"
                        width={200}
                        height={60}
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                <div className="flex items-center gap-3">
                    <SignedOut>
                        <SignInButton>
                            <button className="px-4 py-2 text-sm rounded-md border border-input hover:bg-accent hover:text-accent-foreground transition">
                                Sign In
                            </button>
                        </SignInButton>
                        <SignUpButton>
                            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm h-10 px-5 cursor-pointer hover:bg-[#5a3de0] transition">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <div className="flex items-center">
                            <UserButton 
                                afterSignOutUrl="/"
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: "w-10 h-10",
                                        userButtonPopoverCard: "shadow-xl"
                                    }
                                }}
                            />
                        </div>
                    </SignedIn>
                </div>

            </nav>
        </header>
    )
};

export default Header;