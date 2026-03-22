"use client";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Package, LogOut, Tags, ShoppingCart } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsAuthenticated(true);
      } else if (pathname !== '/admin/login') {
        router.push('/admin/login');
      }
      setIsLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event: any, session: any) => {
      if (session) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        if (pathname !== '/admin/login') {
          router.push('/admin/login');
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [pathname, router]);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (!isAuthenticated) return null;

  const handleLogout = async () => {
    await supabase.auth.signOut();
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
          <Link href="/admin/categories" className={`flex items-center gap-3 px-4 py-3 rounded-none transition-colors ${pathname?.startsWith('/admin/categories') ? 'bg-primary text-white' : 'hover:bg-white/10'}`}>
            <Tags size={20} />
            <span className="font-medium uppercase tracking-wider text-sm">Categories</span>
          </Link>
          <Link href="/admin/orders" className={`flex items-center gap-3 px-4 py-3 rounded-none transition-colors ${pathname?.startsWith('/admin/orders') ? 'bg-primary text-white' : 'hover:bg-white/10'}`}>
            <ShoppingCart size={20} />
            <span className="font-medium uppercase tracking-wider text-sm">Orders</span>
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