import CardBgImage from "@/images/bg-card-front.png";
import Logo from "@/images/card-logo.svg";
import type { HTMLAttributes } from "react";

export default function Card({
    cardNumber,
    name,
    exp,
    ...props
}: HTMLAttributes<HTMLDivElement> & {
    cardNumber: string;
    name: string;
    exp: { mm: string; yy: string };
}) {
    return (
        <div {...props}>
            <div
                className="bg-cover bg-no-repeat aspect-[447/245] p-[6%] rounded-lg overflow-hidden flex flex-col"
                style={{ backgroundImage: `url(${CardBgImage})` }}
            >
                <img src={Logo} alt="logo" className="h-[25%] w-fit" />
                <span className="flex-grow py-[2vh] text-[3.5vh] flex items-end font-medium tracking-[0.43vh] font-grotesk text-white">
                    {cardNumber}
                </span>
                <div className="flex justify-between items-center">
                    <span className="font-grotesk text-white tracking-widest text-[1.75vh]">
                        {name.toUpperCase()}
                    </span>
                    <span className="font-grotesk text-white tracking-widest text-[1.75vh]">{`${exp.mm.padStart(
                        2,
                        "0"
                    )}/${exp.yy} `}</span>
                </div>
            </div>
        </div>
    );
}
