import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
const { PrismaClient } = require('@prisma/client')

export async function POST(request) {
  try {
    let body = await request.json();
    const prisma = new PrismaClient();
    let result = await prisma.decks.create({
      data: {
        user_id: body.userId,
        name: body.name,
        front_topic: body.frontTopic,
        back_topic: body.backTopic
      },
    })

    console.log(result);
    return NextResponse.json({ "test": "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}