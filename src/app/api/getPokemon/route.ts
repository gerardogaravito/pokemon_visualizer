import { NextResponse } from 'next/server';

export type PokemonIdResponse = {
  name: string;
  height: number;
  base_experience: number;
  weight: number;
  sprites: { front_default: string };
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  const data: PokemonIdResponse = await res.json();

  return NextResponse.json({ data });
}
