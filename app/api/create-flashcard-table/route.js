import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const result =
      await sql`CREATE TABLE flashcards (Id SERIAL PRIMARY KEY, Deck_ID Integer, Name varchar(255), Front varchar(255), FrontIsLink boolean, Back varchar(255), BackIsLink boolean );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}