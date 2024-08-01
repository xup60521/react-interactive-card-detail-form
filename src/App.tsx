import { useState } from "react";
import Form from "./components/Form";
import Complete from "./components/Complete";
import Card from "./components/Card";
import CardBack from "./components/CardBack";
import { AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { type FormInput } from "./utils";

export default function App() {
    const [isComplete, setIsComplete] = useState(false);
    const form = useForm<FormInput>();
    const cvc = form.watch("cvc", "");
    const name = form.watch("name", "");
    const exp = { mm: form.watch("mm", ""), yy: form.watch("yy", "") };
    const cardNumber = form.watch("number", "");

    return (
        <main className="w-full min-h-screen lg:grid grid-cols-2 flex flex-col">
            <div className="lg:h-full flex flex-col gap-8 justify-center lg:w-fit w-full lg:aspect-[483/900] lg:bg-[url(/bg-main-desktop.png)] bg-cover aspect-[375/240] bg-[url(/bg-main-mobile.png)] relative">
                <Card
                    name={name}
                    exp={exp}
                    cardNumber={cardNumber}
                    className="lg:translate-x-[30%] lg:bottom-0 -bottom-12 z-10 lg:left-0 left-4 rounded-lg lg:relative absolute lg:w-full w-[77%]"
                />
                <CardBack className="lg:translate-x-[50%] lg:right-0 right-4 rounded-lg lg:relative absolute lg:w-full w-[77%]" cvc={cvc} />
            </div>
            <div className="lg:h-full flex-grow flex items-center justify-center relative">
                <AnimatePresence>
                    {!isComplete ? (
                        <Form
                            key="form"
                            form={form}
                            setIsComplete={setIsComplete}
                        />
                    ) : (
                        <Complete key="complete" setIsComplete={setIsComplete} />
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
