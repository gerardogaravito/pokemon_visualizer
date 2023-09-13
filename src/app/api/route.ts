import { NextResponse } from 'next/server';

export type GeneralPokemonType = {
  name: string;
  url: string;
};

export type PokemonsApiResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: GeneralPokemonType[];
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get('from');

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${from}&limit=20`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }
  );
  const data: PokemonsApiResponse = await res.json();

  return NextResponse.json({ data });
}
