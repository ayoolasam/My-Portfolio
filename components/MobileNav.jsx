'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const Links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex items-center justify-center"
        aria-label="Open navigation menu"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col gap-4">
        <VisuallyHidden>
          <SheetTitle>Mobile Navigation</SheetTitle>
          <SheetDescription>
            Navigate through site sections
          </SheetDescription>
        </VisuallyHidden>

        <div className="mt-32 mb-16 text-center text-2xl">
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Ayoola <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8">
          {Links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`text-xl capitalize transition-all hover:text-accent ${
                link.path === pathname
                  ? 'text-accent border-b-2 border-accent'
                  : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
