import dynamic from "next/dynamic";

// Dynamically import the client component and completely disable Server-Side Rendering (SSR)
// This prevents Next.js from trying to prerender useSearchParams during the Vercel build.
const SuccessContent = dynamic(
  () => import("./success-client").then((mod) => mod.SuccessContent),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-muted-foreground uppercase tracking-widest font-bold">Loading...</div>
      </div>
    )
  }
);

export default function SuccessPage() {
  return <SuccessContent />;
}