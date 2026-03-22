"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useRouter } from "next/navigation";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Package, LogOut } from "lucide-react";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUserData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push("/login");
        return;
      }
      
      setUser(session.user);

      // Fetch orders associated with this user's email
      const { data: ordersData } = await supabase
        .from("orders")
        .select("*")
        .eq("email", session.user.email)
        .order("created_at", { ascending: false });

      if (ordersData) {
        setOrders(ordersData);
      }
      
      setLoading(false);
    };

    getUserData();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading dashboard...</div>;
  }

  return (
    <>
      <Header variant="solid" />
      <main className="min-h-screen pt-32 pb-24 bg-gray-50 text-black">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">My Account</h1>
              <p className="text-muted-foreground mt-2">Welcome back, {user?.user_metadata?.first_name || 'User'}</p>
            </div>
            <Button 
              onClick={handleLogout} 
              variant="outline" 
              className="rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest font-bold"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 border border-black/10 shadow-sm">
                <h2 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-black/10 pb-4">Profile Details</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</p>
                    <p className="font-medium">{user?.user_metadata?.first_name} {user?.user_metadata?.last_name}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</p>
                    <p className="font-medium">{user?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders & Subscriptions */}
            <div className="md:col-span-2">
              <div className="bg-white p-8 border border-black/10 shadow-sm">
                <h2 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-black/10 pb-4 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Order History
                </h2>
                
                {orders.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
                    <Button asChild className="rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold">
                      <a href="/store">Visit Store</a>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map(order => (
                      <div key={order.id} className="border border-black/10 p-6 flex flex-col sm:flex-row justify-between gap-4 hover:border-primary transition-colors">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <p className="font-bold uppercase tracking-wider">Order #{order.id.split('-')[0]}</p>
                            <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 ${
                              order.status === 'paid' ? 'bg-primary/10 text-primary' : 
                              order.status === 'shipped' ? 'bg-blue-100 text-blue-700' : 
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{new Date(order.created_at).toLocaleDateString()}</p>
                          <ul className="text-sm space-y-1">
                            {order.items?.map((item: any, i: number) => (
                              <li key={i} className="text-gray-600">• {item.name}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="sm:text-right flex flex-col justify-between">
                          <p className="text-xl font-bold">${Number(order.total).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}