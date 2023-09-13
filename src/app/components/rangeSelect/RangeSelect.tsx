'use client';
import React, { FC, useState } from 'react';
import styles from './rangeSelect.module.scss';
import Button from '@mui/material/Button';
import FolderIcon from '@mui/icons-material/Add';
import { usePageContext } from '@/app/PageContext';

const RangeSelect: FC = () => {
  const [groupsQuantity, setGroupsQuantity] = useState<number>(3);
  const { requestFrom, setRequestFrom } = usePageContext();

  const handleMutateRange = (newFrom: number) => {
    setRequestFrom(newFrom);
  };

  const handleAddGroups = () => {
    setGroupsQuantity(groupsQuantity + 1);
  };

  return (
    <section className={styles.row}>
      {new Array(groupsQuantity).fill('').map((_, index) => (
        <Button
          key={index}
          variant={requestFrom === index ? 'outlined' : 'contained'}
          onClick={() => handleMutateRange(index)}
          size='medium'
        >
          {index * 20 + 1} to {index * 20 + 20}
        </Button>
      ))}
      <Button size='small' variant='outlined' onClick={handleAddGroups}>
        <FolderIcon className={styles.add} />
      </Button>
    </section>
  );
};

export default RangeSelect;
