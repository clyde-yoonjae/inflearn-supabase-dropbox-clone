'use client';

import { Input } from '@material-tailwind/react';

export default function SearchComponent({ searchInput, setSearchInput }) {
  return (
    <Input
      {...({ placeholder: '' } as any)}
      label='Search Todo'
      placeholder='Search Images'
      icon={<i className='fas fa-search' />}
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}
