import { Suspense } from "react";
import SuccessClient from "./success-client";

export default function SuccessPage() {
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-muted-foreground uppercase tracking-widest font-bold">Loading order details...</div>
        </div>
      }
    >
      <SuccessClient />
    </Suspense>
  );
}