"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';

export default function AdminLogin() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push('/admin');
      }
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        router.push('/admin');
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 md:p-12 border border-black/10 w-full max-w-[420px] shadow-xl">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold uppercase tracking-widest mb-2">Admin Login</h1>
          <div className="w-12 h-1 bg-primary mx-auto"></div>
        </div>
        
        <Auth
          supabaseClient={supabase}
          providers={[]}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#527E55',
                  brandAccent: '#000000',
                },
                radii: {
                  borderRadiusButton: '0px',
                  buttonBorderRadius: '0px',
                  inputBorderRadius: '0px',
                }
              }
            },
            className: {
              button: 'uppercase tracking-widest font-bold',
              input: 'border-b border-black/20 bg-transparent rounded-none focus:border-primary focus:ring-0',
            }
          }}
          theme="light"
        />
      </div>
    </div>
  );
}