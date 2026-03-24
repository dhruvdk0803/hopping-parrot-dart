"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { toast } from "sonner";

const PRESET_AMOUNTS = [10, 20, 30, 40];
const FEE_PERCENTAGE = 0.03;

export function DonationModule() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(30);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [coverFee, setCoverFee] = useState(false);

  const baseAmount = selectedAmount === "custom" 
    ? (parseFloat(customAmount) || 0) 
    : selectedAmount;
    
  const feeAmount = coverFee ? baseAmount * FEE_PERCENTAGE : 0;
  const totalAmount = baseAmount + feeAmount;

  const handleDonate = () => {
    if (totalAmount <= 0) {
      toast.error("Please select a valid donation amount.");
      return;
    }
    toast.success("Thank you for your generosity! Payment integration coming soon.", {
      style: { borderRadius: '0px', border: '1px solid black', background: 'white', color: 'black' }
    });
  };

  return (
    <section className="pb-24 sm:pb-32 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto border border-black p-6 md:p-12 bg-white shadow-sm"
        >
          {/* Frequency Toggle */}
          <div className="flex border border-black mb-10 p-1">
            <button
              onClick={() => setFrequency("one-time")}
              className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                frequency === "one-time" ? "bg-primary text-white" : "bg-transparent text-black hover:bg-gray-50"
              }`}
            >
              One-Time
            </button>
            <button
              onClick={() => setFrequency("monthly")}
              className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                frequency === "monthly" ? "bg-primary text-white" : "bg-transparent text-black hover:bg-gray-50"
              }`}
            >
              Monthly
            </button>
          </div>

          {/* Amount Selection */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {PRESET_AMOUNTS.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount("");
                }}
                className={`py-4 text-xl font-bold border transition-all duration-300 hover:scale-[1.02] ${
                  selectedAmount === amount
                    ? "border-primary bg-primary text-white"
                    : "border-black bg-transparent text-black hover:border-primary"
                }`}
              >
                ${amount}
              </button>
            ))}
            <div className="col-span-2 sm:col-span-2 relative">
              <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ${
                selectedAmount === "custom" ? "text-white" : "text-black"
              }`}>
                <span className="text-xl font-bold">$</span>
              </div>
              <input
                type="number"
                placeholder="Custom Amount"
                value={customAmount}
                onChange={(e) => {
                  setSelectedAmount("custom");
                  setCustomAmount(e.target.value);
                }}
                onFocus={() => setSelectedAmount("custom")}
                className={`w-full h-full py-4 pl-8 pr-4 text-xl font-bold border transition-all duration-300 focus:outline-none focus:scale-[1.02] ${
                  selectedAmount === "custom"
                    ? "border-primary bg-primary text-white placeholder:text-white/70"
                    : "border-black bg-transparent text-black placeholder:text-gray-400 focus:border-primary"
                }`}
              />
            </div>
          </div>

          {/* Fee Coverage */}
          <div className="mb-10">
            <label className="flex items-center cursor-pointer group">
              <div className={`w-6 h-6 border flex items-center justify-center mr-3 transition-colors ${
                coverFee ? "bg-primary border-primary" : "border-black group-hover:border-primary"
              }`}>
                {coverFee && <Check className="w-4 h-4 text-white" />}
              </div>
              <input
                type="checkbox"
                className="hidden"
                checked={coverFee}
                onChange={(e) => setCoverFee(e.target.checked)}
              />
              <span className="text-base font-medium select-none">
                Cover processing fee (3%)
              </span>
            </label>
            
            {/* Dynamic Total Display */}
            <motion.div 
              initial={false}
              animate={{ height: coverFee ? "auto" : 0, opacity: coverFee ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 pl-9 text-sm text-muted-foreground space-y-1">
                <div className="flex justify-between">
                  <span>Donation:</span>
                  <span>${baseAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing Fee:</span>
                  <span>${feeAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-black pt-2 border-t border-black/10 mt-2">
                  <span>Total {frequency === "monthly" ? "per month" : ""}:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Submit Button */}
          <Button 
            onClick={handleDonate}
            className="w-full h-14 rounded-none bg-primary hover:bg-black text-white text-lg uppercase tracking-widest font-bold transition-all duration-300 hover:scale-[1.02]"
          >
            Donate ${totalAmount > 0 ? totalAmount.toFixed(2) : "0.00"}
          </Button>
          
          <p className="text-center text-xs text-muted-foreground mt-6 uppercase tracking-wider">
            Secure, encrypted transaction
          </p>
        </motion.div>
      </div>
    </section>
  );
}