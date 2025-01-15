import { cn } from "@/lib/utils";

export default function Caption({children, className}) {
    return (
        <p className={cn(className, 'font-[family-name:var(--font-montserrat)]')}>{children}</p>
    )
}