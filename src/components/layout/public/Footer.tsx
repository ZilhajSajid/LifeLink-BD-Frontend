import Link from "next/link";
import { Heart } from "lucide-react";
import Logo from "@/assets/svg/Logo";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Become a Donor", href: "/apply" },
  { label: "About Us", href: "/about-us" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand and mission */}
          <div className="max-w-md space-y-3">
            <Link href="/" className="inline-flex items-center gap-2">
              <Logo />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary">Life</span>
                <span>Link</span>
                <span className="ml-1 text-sm font-medium text-muted-foreground">
                  BD
                </span>
              </span>
            </Link>

            <p className="text-sm leading-6 text-muted-foreground">
              Connecting blood donors with people in need. Together, we can make
              every drop count and save lives.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LifeLink BD. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Built with
            <Heart
              className="size-4 fill-red-600 text-red-600"
              aria-label="love"
            />
            to help save lives.
          </p>
        </div>
      </div>
    </footer>
  );
}
