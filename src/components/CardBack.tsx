import BgCardBack from "@/images/bg-card-back.png";
import type { HTMLAttributes } from "react";
export default function CardBack({
    cvc,
    ...props
}: HTMLAttributes<HTMLDivElement> & { cvc: string }) {
    return (
        <div {...props}>
            <div
                className="bg-cover aspect-[447/245] relative rounded-lg overflow-hidden"
                style={{ backgroundImage: `url(${BgCardBack})` }}
            >
                <span className="absolute font-grotesk right-[12.5%] text-white font-bold text-[1.85vh] top-[44%]">{cvc}</span>
            </div>
        </div>
    );
}
