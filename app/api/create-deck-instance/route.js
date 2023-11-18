import { NextResponse } from 'next/server';
import prisma from "../../prismaSingleton.js";


export async function POST(request) {
  try {
    let body = await request.json();
    let deck = await prisma.decks.create({
      data: {
        user_id: body.userId,
        name: body.name,
        front_topic: body.frontTopic,
        back_topic: body.backTopic
      },
    })


    return NextResponse.json({ "success": true, "deckId": deck.id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error, "success": false }, { status: 500 });
  }
}