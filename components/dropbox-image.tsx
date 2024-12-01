'use client';

import { IconButton } from '@material-tailwind/react';

export default function DropboxImage() {
  return (
    <div className='relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md'>
      <div>
        <img
          src='/images/dropbox_icon.png'
          alt='h'
          className='w-full aspect-square rounded-2xl'
        />
      </div>
      <div>cutedog.jpeg</div>
      <div className='absolute top-4 right-4'>
        <IconButton color='red' {...({ placeholder: '' } as any)}>
          <i className='fas fa-trash' />
        </IconButton>
      </div>
    </div>
  );
}
