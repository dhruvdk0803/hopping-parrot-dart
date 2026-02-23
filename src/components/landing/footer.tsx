import Link from "next/link";

const footerLinks = {
  company: [
    { name: "About Us", href: "#vision" },
    { name: "Events", href: "#events" },
    { name: "Partners", href: "#" },
  ],
  support: [
    { name: "Contact Us", href: "#" },
    { name: "Donate", href: "#" },
    { name: "Volunteer", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold tracking-tight">SERVING KINGDOM KC</h3>
            <p className="mt-2 text-gray-400">Kansas City, MO</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold uppercase tracking-wider text-gray-400">Company</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold uppercase tracking-wider text-gray-400">Support</h4>
              <ul className="mt-4 space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-brand-green">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Serving Kingdom KC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};