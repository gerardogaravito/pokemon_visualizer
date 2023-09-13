import React, { FC } from 'react';
import { IPokemonList } from './pokemonList.types';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import LinkIcon from '@mui/icons-material/NavigateNextOutlined';
import styles from './pokemonList.module.scss';
import Link from 'next/link';

const PokemonList: FC<IPokemonList> = ({ pokemonList }) => {
  return (
    <>
      {pokemonList.map((pokemon) => {
        const itemId = pokemon.url.split('/').filter(Boolean).pop();

        return (
          <Link href={`/${itemId}`} key={itemId}>
            <ListItem className={styles.listItem}>
              <ListItemIcon>
                <FolderIcon color='info' />
              </ListItemIcon>
              <ListItemText
                primary={pokemon.name}
                primaryTypographyProps={{
                  minWidth: 100,
                  width: 100,
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
                secondary={'id: ' + itemId}
                secondaryTypographyProps={{ color: 'GrayText' }}
              />
              <ListItemIcon>
                <LinkIcon color='info' />
              </ListItemIcon>
            </ListItem>
          </Link>
        );
      })}
    </>
  );
};

export default PokemonList;
