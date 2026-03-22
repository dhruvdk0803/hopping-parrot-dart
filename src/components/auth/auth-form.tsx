"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back!");
        router.push("/dashboard");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              first_name: firstName,
              last_name: lastName,
            }
          }
        });
        if (error) throw error;
        toast.success("Account created successfully! You can now log in.");
        setIsLogin(true);
        setPassword(""); // Clear password so they can type it to log in
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[420px] mx-auto">
      {/* Mobile Logo (Visible only on small screens) */}
      <div className="md:hidden mb-12 text-center">
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
          Serving Kingdom KC
        </Link>
      </div>

      {/* Toggle Tabs */}
      <div className="flex border-b border-black/10 mb-10">
        <button
          onClick={() => setIsLogin(true)}
          className={`pb-4 text-sm font-bold uppercase tracking-widest flex-1 text-center border-b-2 transition-colors duration-300 ${
            isLogin
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-black"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`pb-4 text-sm font-bold uppercase tracking-widest flex-1 text-center border-b-2 transition-colors duration-300 ${
            !isLogin
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-black"
          }`}
        >
          Sign Up
        </button>
      </div>

      {/* Form Area */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-8">Welcome Back</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Password
                    </label>
                    <a href="#" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-[52px] rounded-none bg-primary hover:bg-black text-white text-sm uppercase tracking-widest font-bold transition-colors duration-300 mt-4"
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </form>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Don't have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="font-bold text-black hover:text-primary transition-colors"
                >
                  Sign up
                </button>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-8">Create Your Account</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-b border-black/20 bg-transparent py-2 px-0 text-base focus:outline-none focus:border-primary transition-colors rounded-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-[52px] rounded-none bg-primary hover:bg-black text-white text-sm uppercase tracking-widest font-bold transition-colors duration-300 mt-4"
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="font-bold text-black hover:text-primary transition-colors"
                >
                  Login
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}