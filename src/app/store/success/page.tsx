import { Suspense } from "react";
import { SuccessContent } from "./success-client";

// This forces Next.js to render this page dynamically on every request
export const dynamic = "force-dynamic";

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}