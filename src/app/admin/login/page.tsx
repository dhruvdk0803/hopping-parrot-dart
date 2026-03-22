"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@servingkingdom.com' && password === 'admin123') {
      localStorage.setItem('admin_auth', 'true');
      router.push('/admin');
    } else {
      setError('Invalid credentials. Use admin@servingkingdom.com / admin123');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 md:p-12 border border-black/10 w-full max-w-[420px] shadow-xl">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold uppercase tracking-widest mb-2">Admin Login</h1>
          <div className="w-12 h-1 bg-primary mx-auto"></div>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 mb-6 text-sm font-medium border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full h-[52px] rounded-none bg-primary hover:bg-black text-white text-sm uppercase tracking-widest font-bold transition-colors duration-300 mt-4"
          >
            Login to Dashboard
          </Button>
        </form>
        
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>Demo Credentials:</p>
          <p className="font-bold mt-1">admin@servingkingdom.com / admin123</p>
        </div>
      </div>
    </div>
  );
}