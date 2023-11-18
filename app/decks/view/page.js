"use client";
import { useState, useEffect } from "react";

const Page = () => {
    const [deckName, setDeckName] = useState("");
    const [deckFront, setDeckFront] = useState("");
    const [deckBack, setDeckBack] = useState("");

    useEffect(() => {
        const deckId =  (new URLSearchParams(window.location.search)).get("id");
        async function getDeck() {
            const response = await fetch(`http://localhost:3000/api/get-deck`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({"deckId": +deckId}),
            });
            let json = await response.json();
            if (!json["success"]) return;

            const deck = json["deck"];
            setDeckName(deck["name"]);
            setDeckFront(deck["front_topic"]);
            setDeckBack(deck["back_topic"]);
        }
        getDeck();
    }, [])
    return(
        <div>
            <h1>{deckName}</h1>
            <h1>{deckFront}</h1>
            <h1>{deckBack}</h1>
        </div>
    )
}

export default Page;