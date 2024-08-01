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
                <img src={Logo} alt="logo" className="lg:h-[25%] h-[7vw] w-fit" />
                <span className="flex-grow lg:py-[2vh] py-[4vw] lg:text-[3.5vh] text-[5vw] flex items-end font-medium tracking-[0.43vh] font-grotesk text-white">
                    {cardNumber?.replace(/\s/g, "").replace(/(.{4})/g, "$1 ")}
                </span>
                <div className="flex justify-between items-center">
                    <span className="font-grotesk text-white tracking-widest lg:text-[1.75vh] text-[3vw]">
                        {name?.toUpperCase()}
                    </span>
                    <span className="font-grotesk text-white tracking-widest lg:text-[1.75vh] text-[3vw]">{`${exp.mm}/${exp.yy} `}</span>
                </div>
            </div>
        </div>
    );
}
