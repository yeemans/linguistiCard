import { NextResponse } from 'next/server';
import prisma from "../../prismaSingleton.js";

export async function POST(request) {
  try {
    let body = await request.json();
    let deck = await prisma.decks.findUnique({
      where: {
        id: body["deckId"]
      },
    })

    console.log("deck: ");
    console.log(deck);

    return NextResponse.json({ "success": true, "deck": deck}, { status: 200 });

  } catch (error) {
    return NextResponse.json({ "success": false, "error": error}, { status: 500 });
  }
}