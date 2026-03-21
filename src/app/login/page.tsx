import { AuthForm } from "../../components/auth/auth-form";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side - Image & Branding (Hidden on Mobile) */}
      <div className="hidden md:flex md:w-1/2 relative bg-black items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop"
          alt="Golf Course Community"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
        
        <div className="relative z-10 p-12 flex flex-col h-full w-full justify-between">
          <div>
            <Link href="/" className="text-white hover:text-primary transition-colors inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          
          <div className="max-w-lg">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter text-white uppercase leading-tight">
              Serve.<br />
              Connect.<br />
              <span className="text-primary">Make Impact.</span>
            </h1>
            <div className="w-16 h-1 bg-primary mt-8 mb-6"></div>
            <p className="text-lg text-gray-300 font-medium">
              Join our community of businesses and individuals dedicated to strengthening Kansas City nonprofits through purpose-driven events.
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
              Serving Kingdom KC
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 min-h-screen md:min-h-0">
        {/* Mobile Back Button */}
        <Link 
          href="/" 
          className="md:hidden absolute top-6 left-6 text-muted-foreground hover:text-black transition-colors"
          aria-label="Back to Home"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        
        <AuthForm />
      </div>
    </main>
  );
}