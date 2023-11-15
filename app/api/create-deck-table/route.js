import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  try {
    let result = await sql`CREATE TABLE decks (id SERIAL PRIMARY KEY, User_id varchar(255), Name varchar(255), Front_topic varchar(255), Back_topic varchar(255));`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}