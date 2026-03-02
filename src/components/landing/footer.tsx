import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold tracking-tighter">SERVING KINGDOM KC</h3>
            <p className="mt-2 text-muted-foreground">Kansas City, MO</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold uppercase tracking-wider text-sm">Navigate</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/tournaments" className="text-muted-foreground hover:text-white transition-colors">Events</Link></li>
                <li><Link href="/vision" className="text-muted-foreground hover:text-white transition-colors">Our Vision</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold uppercase tracking-wider text-sm">Engage</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/donate" className="text-muted-foreground hover:text-white transition-colors">Donate</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Partner</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold uppercase tracking-wider text-sm">Follow</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Instagram</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">Facebook</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-white transition-colors">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-primary pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Serving Kingdom KC. All Rights Reserved.</p>
          <p className="mt-4 sm:mt-0">
            Made with ❤️ in Kansas City
          </p>
        </div>
      </div>
    </footer>
  );
}