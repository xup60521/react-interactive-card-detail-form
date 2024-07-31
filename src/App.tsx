import { useState } from "react";
import Form from "./components/Form";
import Complete from "./components/Complete";
import Card from "./components/Card";
import CardBack from "./components/CardBack";

const cvc = "124";
const name = "Zup";
const exp = { mm: "12", yy: "26" };
const cardNumber = "1234 7895 4583 5487";

export default function App() {
    const [isComplete] = useState(false);
    return (
        <main className="w-full min-h-screen lg:grid grid-cols-2 flex flex-col">
            <div className="lg:h-full flex flex-col gap-8 justify-center lg:w-fit w-full lg:aspect-[483/900] lg:bg-[url(/bg-main-desktop.png)] bg-cover aspect-[375/240] bg-[url(/bg-main-mobile.png)] relative">
                <Card
                    name={name}
                    exp={exp}
                    cardNumber={cardNumber}
                    className="translate-x-[30%] rounded-lg"
                />
                <CardBack className="translate-x-[50%] rounded-lg" cvc={cvc} />
            </div>
            <div className="lg:h-full flex items-center justify-center">
                {!isComplete ? <Form /> : <Complete />}
            </div>
        </main>
    );
}
