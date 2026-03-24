import { Suspense } from "react";
import { SuccessContent } from "./success-client";

// This completely disables static prerendering for this page during the Vercel build
export const dynamic = "force-dynamic";

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-muted-foreground uppercase tracking-widest font-bold">Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}