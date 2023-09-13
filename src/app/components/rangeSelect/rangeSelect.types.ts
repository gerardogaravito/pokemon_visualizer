import { Dispatch, SetStateAction } from 'react';

export interface IRangeSelect {
  requestFrom: number;
  setRequestFrom: Dispatch<SetStateAction<number>>;
}
