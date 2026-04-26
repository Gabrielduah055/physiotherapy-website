import { brand, navLinks } from "../../data/brand";
import Container from "../ui/Container";

const utilityLinks = ["Style Guide", "Protected", "Licenses", "404 Page"];
const socialItems = ["X", "In", "Fb"];

export default function Footer() {
  return (
    <footer className="pb-10 pt-8">
      <Container>
        <div className="section-shell overflow-hidden">
          <div className="grid gap-10 border-b border-neutral-100 px-6 py-8 md:grid-cols-4 md:px-10 md:py-10">
            <div className="space-y-4">
              <p className="display-title text-3xl">{brand.shortName}</p>
              <p className="text-sm body-muted">
                Combining modern physiotherapy care with holistic recovery guidance.
              </p>
              <div className="flex gap-2.5">
                {socialItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-100 text-xs font-semibold text-neutral-700 hover:border-brand-700/40 hover:text-brand-800"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 text-sm body-muted">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900">
                Quick Links
              </h3>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="block transition hover:text-brand-700">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="space-y-3 text-sm body-muted">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900">
                Utility Pages
              </h3>
              {utilityLinks.map((item) => (
                <a key={item} href="#" className="block transition hover:text-brand-700">
                  {item}
                </a>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900">
                Subscribe Newsletter
              </h3>
              <p className="text-sm body-muted">
                Subscribe for weekly updates, market insights, and special offers.
              </p>
              <form className="space-y-2.5" action="#">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  className="focus-ring h-11 w-full rounded-full border border-neutral-100 bg-neutral-50 px-4 text-sm"
                  placeholder="name@example.com"
                />
                <button
                  type="submit"
                  className="focus-ring h-10 w-full rounded-full bg-brand-800 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 px-6 py-4 text-xs text-neutral-700 md:flex-row md:px-10">
            <p>
              {new Date().getFullYear()} {brand.name}. All rights reserved.
            </p>
            <p>Terms and Conditions | Privacy Policy</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
