import { brand, navLinks } from "../../data/brand";
import { buttonClasses } from "../ui/Button";
import Container from "../ui/Container";

function MarkIcon() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-white">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 5H17V8.5C17 12.3 14.2 15.5 10.5 16.1L10.1 16.2V19L7 16.5V5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Navbar() {
  return (
    <Container className="pt-6">
      <nav className="glass-panel flex items-center justify-between rounded-3xl px-4 py-3 text-white md:px-5">
        <a href="#home" className="flex items-center gap-2.5">
          <MarkIcon />
          <span className="text-base font-semibold tracking-wide">{brand.shortName}</span>
        </a>

        <div className="hidden items-center gap-5 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-sage-300">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={brand.phoneHref}
          className={buttonClasses(
            "ghost",
            "hidden border-white/30 bg-white/10 px-4 py-2 text-white hover:bg-white/20 md:inline-flex"
          )}
        >
          {brand.phoneDisplay}
        </a>
      </nav>
    </Container>
  );
}
