import { ErrorMessage } from "@hookform/error-message";
import { motion } from "framer-motion";
import { SubmitHandler, type UseFormReturn } from "react-hook-form";
import { type FormInput } from "../utils";

export default function Form({
    form,
    setIsComplete,
}: {
    form: UseFormReturn<FormInput, unknown, undefined>;
    setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = form;
    const onSubmit: SubmitHandler<FormInput> = () => setIsComplete(true);

    return (
        <motion.div
            className="lg:w-[24rem] w-full absolute lg:p-0 pt-16 h-fit top-0 flex items-center lg:h-full"
            initial={{x: 30, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: -30, opacity: 0}}
            transition={{duration: 0.75, type: "spring"}}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full lg:-translate-x-[10%] lg:p-0 p-4"
            >
                <div className="flex flex-col relative">
                    <label
                        htmlFor="cardholder-name"
                        className="py-2 font-grotesk text-xs font-bold text-gray-500 tracking-widest"
                    >
                        CARDHOLDER NAME
                    </label>
                    <input
                        type="text"
                        id="cardholder-name"
                        {...register("name", { required: "Name is required" })}
                        className={`mb-8 outline-c_Dark_grayish_violet font-grotesk rounded-lg border-[1px] px-4 py-2 ${
                            "name" in errors
                                ? "border-c_error_red"
                                : "border-c_Light_grayish_violet"
                        }`}
                        placeholder="e.g. Jane Appleseed"
                    />
                    <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ message }) => (
                            <p className="absolute bottom-2 text-[0.7rem] font-grotesk text-c_error_red font-medium">
                                {message}
                            </p>
                        )}
                    />
                </div>
                <div className="flex flex-col relative">
                    <label
                        htmlFor="card-number"
                        className="py-2 font-grotesk text-xs font-bold text-gray-500 tracking-widest"
                    >
                        CARD NUMBER
                    </label>
                    <input
                        type="text"
                        id="card-number"
                        maxLength={19}
                        {...register("number", {
                            required: "card number is required",
                            pattern: {
                                value: /[\d]{4}(\s)?[\d]{4}(\s)?[\d]{4}(\s)?[\d]{4}/,
                                message: "Wrong format.",
                            },
                        })}
                        className={`mb-8 outline-c_Dark_grayish_violet font-grotesk rounded-lg border-[1px] px-4 py-2 ${
                            "number" in errors
                                ? "border-c_error_red"
                                : "border-c_Light_grayish_violet"
                        }`}
                        placeholder="e.g. 1234 5678 9123 0000"
                    />
                    <ErrorMessage
                        errors={errors}
                        name="number"
                        render={({ message }) => (
                            <p className="absolute bottom-2 text-[0.7rem] font-grotesk text-c_error_red font-medium">
                                {message}
                            </p>
                        )}
                    />
                </div>
                <div className="flex gap-4 relative">
                    <div className="flex flex-col">
                        <span className="py-2 font-grotesk text-xs font-bold text-gray-500 tracking-widest">
                            EXP. DATE (MM/YY)
                        </span>
                        <div className="flex gap-2">
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    {...register("mm", {
                                        required: "Can't be blank",
                                        pattern: {
                                            value: /[\d]{2}/,
                                            message: "Wrong format",
                                        },
                                        min: {
                                            value: 1,
                                            message: "Invalid month",
                                        },
                                        max: {
                                            value: 12,
                                            message: "Invalid month",
                                        },
                                        maxLength: {
                                            value: 2,
                                            message: "Wrong format",
                                        },
                                        minLength: {
                                            value: 2,
                                            message: "Wrong format",
                                        },
                                    })}
                                    maxLength={2}
                                    minLength={2}
                                    className={`w-[5rem] outline-c_Dark_grayish_violet mb-8 font-grotesk rounded-lg border-[1px] px-4 py-2 ${
                                        "mm" in errors
                                            ? "border-c_error_red"
                                            : "border-c_Light_grayish_violet"
                                    }`}
                                    placeholder="MM"
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="mm"
                                    render={({ message }) => (
                                        <p className="absolute bottom-2 text-[0.7rem] font-grotesk text-c_error_red font-medium">
                                            {message}
                                        </p>
                                    )}
                                />
                            </div>
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    {...register("yy", {
                                        required: "Can't be blank",
                                        pattern: {
                                            value: /[\d]{2}/,
                                            message: "Wrong format",
                                        },
                                        maxLength: {
                                            value: 2,
                                            message: "Wrong format",
                                        },
                                        minLength: {
                                            value: 2,
                                            message: "Wrong format",
                                        },
                                    })}
                                    maxLength={2}
                                    minLength={2}
                                    className={`w-[5rem] outline-c_Dark_grayish_violet mb-8 font-grotesk rounded-lg border-[1px] px-4 py-2 ${
                                        "yy" in errors
                                            ? "border-c_error_red"
                                            : "border-c_Light_grayish_violet"
                                    }`}
                                    placeholder="YY"
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="yy"
                                    render={({ message }) => (
                                        <p className="absolute bottom-2 text-[0.7rem] font-grotesk text-c_error_red font-medium">
                                            {message}
                                        </p>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow relative min-w-0">
                        <label
                            htmlFor="cvc"
                            className="py-2 font-grotesk text-xs font-bold text-gray-500 tracking-widest"
                        >
                            CVC
                        </label>
                        <input
                            type="text"
                            id="cvc"
                            {...register("cvc", {
                                required: "Can't be blank",
                                pattern: {
                                    value: /[\d]{3}/,
                                    message: "Wrong format",
                                },
                                maxLength: {
                                    value: 3,
                                    message: "Wrong format",
                                },
                                minLength: {
                                    value: 3,
                                    message: "Wrong format",
                                },
                            })}
                            maxLength={3}
                            minLength={3}
                            className={`flex-grow min-w-0 outline-c_Dark_grayish_violet mb-8 font-grotesk rounded-lg border-[1px] px-4 py-2 ${
                                "cvc" in errors
                                    ? "border-c_error_red"
                                    : "border-c_Light_grayish_violet"
                            }`}
                            placeholder="e.g. 123"
                        />
                        <ErrorMessage
                            errors={errors}
                            name="cvc"
                            render={({ message }) => (
                                <p className="absolute bottom-2 text-[0.7rem] font-grotesk text-c_error_red font-medium">
                                    {message}
                                </p>
                            )}
                        />
                    </div>
                </div>
                <input
                    type="submit"
                    className="w-full my-2 cursor-pointer bg-c_Very_dark_violet py-3 rounded-lg transition font-grotesk text-white hover:"
                />
            </form>
        </motion.div>
    );
}
