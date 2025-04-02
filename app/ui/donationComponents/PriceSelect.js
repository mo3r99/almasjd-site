import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";

export default function PriceSelect( { amount, formattedAmount, handleAmountSelect, handleAmountBlur } ) {
    const [customShow, setCustomShow] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-raleway)]">
        Select an amount to donate:{" "}
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[3, 5, 10, 20].map((a) => (
          <Button
            key={a}
            className={cn(
              `p-4 border rounded-lg font-[family-name:var(--font-montserrat)] hover:bg-slate-100 transition-colors text-black h-16 text-xl`,
              a == amount ? "bg-weborange" : "bg-white"
            )}
            onClick={() => {
              handleAmountSelect(a);
              setCustomShow(false);
            }}
          >
            £{a}
          </Button>
        ))}
        <Button
          className={cn(
            `p-4 border rounded-lg font-[family-name:var(--font-montserrat)] bg-white hover:bg-slate-100 transition-colors text-black h-16 text-xl`,
            customShow ? "bg-slate-100" : "bg-white"
          )}
          onClick={() => setCustomShow(true)}
        >
          Custom
        </Button>
        {customShow && (
          <div className="col-span-2 md:col-span-3">
            <Input
              //type="number"
              min="1.5"
              placeholder="Enter custom amount"
              onChange={(e) => handleAmountSelect(e.target.value)}
              value={formattedAmount}
              onBlur={handleAmountBlur}
              className="w-full h-16 font-[family-name:var(--font-montserrat)] md:text-2xl"
              style={{ fontSize: "1.25rem !important" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
