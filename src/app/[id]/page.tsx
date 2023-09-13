'use client';
import {
  Avatar,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from './idPokemon.module.scss';
import Link from 'next/link';
import { PokemonIdResponse } from '../api/getPokemon/route';

export default function IdPokemon({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokeData, setPokeData] = useState<PokemonIdResponse>({
    name: '',
    base_experience: 0,
    height: 0,
    weight: 0,
    sprites: {
      front_default: '',
    },
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/getPokemon?id=${params.id}`)
      .then((res) => res.json())
      .then(({ data }: { data: PokemonIdResponse }) => {
        setPokeData(data);
      })
      .finally(() => setIsLoading(false))
      .catch((err) => console.error('error: ', err));
  }, [params.id]);

  if (isLoading) {
    return (
      <section className={styles.loading}>
        <CircularProgress />
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <div className={styles.container__header}>
        <Link className={styles.home} href={'/'}>
          ← go home
        </Link>
        <Avatar
          sx={{ width: 200, height: 200 }}
          alt='gerardo garavito'
          src={pokeData.sprites.front_default}
        />
      </div>
      <Typography
        variant='h1'
        component='h2'
        className={styles.container__title}
      >
        {pokeData.name}
      </Typography>
      <Table
        sx={{ minWidth: 650 }}
        aria-label='simple table'
        className={styles.table}
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ color: '#fff' }}>Id</TableCell>
            <TableCell style={{ color: '#fff' }} align='left'>
              Base Experience
            </TableCell>
            <TableCell style={{ color: '#fff' }} align='left'>
              Height
            </TableCell>
            <TableCell style={{ color: '#fff' }} align='left'>
              Weight
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={params.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell style={{ color: '#fff' }} component='th' scope='row'>
              {params.id}
            </TableCell>
            <TableCell style={{ color: '#fff' }} align='left'>
              {pokeData.base_experience}
            </TableCell>
            <TableCell style={{ color: '#fff' }} align='left'>
              {pokeData.height}
            </TableCell>
            <TableCell style={{ color: '#fff' }} align='left'>
              {pokeData.weight}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
