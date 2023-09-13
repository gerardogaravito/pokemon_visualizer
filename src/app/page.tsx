'use client';
import { useEffect, useState, createContext, useContext } from 'react';
import styles from './page.module.scss';
import dynamic from 'next/dynamic';

import { GeneralPokemonType, PokemonsApiResponse } from './api/route';
import { Alert, CircularProgress, List, Snackbar } from '@mui/material';
import Link from 'next/link';

const RangeSelect = dynamic(
  () => import('./components').then((mod) => mod.RangeSelect),
  {
    ssr: false,
  }
);

const PokemonList = dynamic(
  () => import('./components').then((mod) => mod.PokemonList),
  {
    ssr: false,
  }
);

export const PageContext = createContext({
  requestFrom: 0,
  setRequestFrom: (newForm: number) => {},
});

export default function Home() {
  // contextState
  const [requestFrom, setRequestFrom] = useState<number>(0);

  const [pokemonList, setPokemonList] = useState<GeneralPokemonType[]>([]);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api?from=${requestFrom * 20}`)
      .then((res) => res.json())
      .then(({ data }: { data: PokemonsApiResponse }) => {
        setShowSuccess(true);
        setPokemonList(data.results);
      })
      .finally(() => setIsLoading(false))
      .catch((err) => console.error('error: ', err));

    setTimeout(() => {
      setShowSuccess(false);
    }, 1000);
  }, [requestFrom]);

  return (
    <PageContext.Provider value={{ requestFrom, setRequestFrom }}>
      <main className={styles.main}>
        <h1 className={styles.title}>pokemon visualizer</h1>
        <Link className={styles.bio} href='/bio'>
          bio: gerardo garavito
        </Link>
        <RangeSelect />
        {isLoading ? (
          <CircularProgress />
        ) : (
          <List
            dense={false}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <PokemonList pokemonList={pokemonList} />
          </List>
        )}
        <Snackbar open={showSuccess} autoHideDuration={1000}>
          <Alert severity='success'>Pokemon List updated</Alert>
        </Snackbar>
      </main>
    </PageContext.Provider>
  );
}
