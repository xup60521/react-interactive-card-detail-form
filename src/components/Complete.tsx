import { motion } from "framer-motion";
import IconComplete from "@/images/icon-complete.svg";

export default function Complete({
    setIsComplete,
}: {
    setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <motion.div
            className="lg:w-[20rem]"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.75, type: "spring" }}
        >
            <div className="flex flex-col items-center lg:-translate-x-[10%]">
                <img src={IconComplete} alt="complete icon" />
                <div className="flex flex-col items-center py-8 gap-4">
                    <span className="text-c_Very_dark_violet font-grotesk text-3xl font-semibold tracking-widest">
                        THANK YOU!
                    </span>
                    <span className="text-c_Dark_grayish_violet font-grotesk font-semibold">
                        We've added your card details
                    </span>
                </div>
                <button
                    onMouseDown={() => setIsComplete(false)}
                    className="w-full bg-c_Very_dark_violet font-grotesk text-white py-3 rounded-lg text-sm"
                >
                    Continue
                </button>
            </div>
        </motion.div>
    );
}
