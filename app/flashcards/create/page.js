"use client";
import CreateDeck from "../../../components/deckForm/CreateDeck";
import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const Page = () => {
    const [name, setName] = useState("");
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    const { user, isLoading } = useUser();

    async function submitForm() {
        
        const formData = {"userId": user.sub, "name": name, "frontTopic": front, "backTopic": back}

        const response = await fetch(`http://localhost:3000/api/create-deck-instance`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const json = await response.json()
        console.log(json);
    }
    return(
        <div>
            <h1>Create a Flashcard Deck</h1>
            <CreateDeck setName={setName} setFront={setFront} setBack={setBack}> </CreateDeck>
            <button onClick={() => submitForm()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create Deck
            </button>
        </div>
    )
}

export default Page;