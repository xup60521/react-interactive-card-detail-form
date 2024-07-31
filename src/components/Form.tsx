export default function Form() {
    return (
        <div className="flex flex-col lg:w-[25rem] lg:-translate-x-[20%]">
            <label
                htmlFor="cardholder-name"
                className="py-2 font-grotesk text-xs font-bold text-gray-500 tracking-widest"
            >
                CARDHOLDER NAME
            </label>
            <input
                type="text"
                id="cardholder-name"
                className="mb-6 font-grotesk rounded-lg border-[1px] border-c_Light_grayish_violet px-4 py-2"
            />
            <div className="flex flex-col">
                <label
                    htmlFor="card-number"
                    className="py-2 font-grotesk text-xs font-bold text-gray-500 tracking-widest"
                >
                    CARDHOLDER NAME
                </label>
                <input
                    type="text"
                    id="card-number"
                    className="mb-6 font-grotesk rounded-lg border-[1px] border-c_Light_grayish_violet px-4 py-2"
                />
            </div>
            <div className="flex gap-4 mb-6">
                <div className="flex flex-col">
                    <span className="py-2 font-grotesk text-xs font-bold text-gray-500 tracking-widest">
                        EXP. DATE (MM/YY)
                    </span>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            className="w-[5rem] font-grotesk rounded-lg border-[1px] border-c_Light_grayish_violet px-4 py-2"
                        />
                        <input
                            type="text"
                            className="w-[5rem] font-grotesk rounded-lg border-[1px] border-c_Light_grayish_violet px-4 py-2"
                        />
                    </div>
                </div>
                <div className="flex flex-col flex-grow">
                    <label
                        htmlFor="cvc"
                        className="py-2 font-grotesk text-xs font-bold text-gray-500 tracking-widest"
                    >
                        CVC
                    </label>
                    <input
                        type="text"
                        id="cvc"
                        className="flex-grow font-grotesk rounded-lg border-[1px] border-c_Light_grayish_violet px-4 py-2"
                    />
                </div>
            </div>
            <button className="w-full bg-c_Very_dark_violet py-3 rounded-lg transition font-grotesk text-white hover:">Confirm</button>
        </div>
    );
}
