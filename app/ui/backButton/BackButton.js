"use client"

import { useRouter, usePathname } from "next/navigation";
import Button from "../button/button";
import { cn } from "@/lib/utils";

export default function BackButton({ className }) {
    const router = useRouter();
    const path = usePathname();

    return (
        <>
        {path != '/' ? <Button colour='purple' onClick={router.back} back className={cn(className, 'absolute top-20 z-[21] left-0 p-8 text-xs')}>Go Back</Button> : null}
        </>
    )
}