"use client";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Package, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuth(true);
    } else if (pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [pathname, router]);

  if (!mounted) return null;

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (!isAuth) return null;

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen flex bg-gray-50 text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold uppercase tracking-widest">Admin Panel</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className={`flex items-center gap-3 px-4 py-3 rounded-none transition-colors ${pathname === '/admin' ? 'bg-primary text-white' : 'hover:bg-white/10'}`}>
            <LayoutDashboard size={20} />
            <span className="font-medium uppercase tracking-wider text-sm">Dashboard</span>
          </Link>
          <Link href="/admin/products" className={`flex items-center gap-3 px-4 py-3 rounded-none transition-colors ${pathname?.startsWith('/admin/products') ? 'bg-primary text-white' : 'hover:bg-white/10'}`}>
            <Package size={20} />
            <span className="font-medium uppercase tracking-wider text-sm">Products</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-white/10 transition-colors text-red-400 hover:text-red-300">
            <LogOut size={20} />
            <span className="font-medium uppercase tracking-wider text-sm">Logout</span>
          </button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}