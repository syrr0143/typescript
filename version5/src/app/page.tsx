import React from 'react'

import Link from 'next/link';
const page = () => {
  return (
    <div className='justify-center items-center flex h-screen'>
      <p>
        this is homepage please go to <Link className='text-blue-700 hover:cursor-pointer underline font-bold' href={'login'}>this page</Link> to login
      </p>
    </div>
  )
}

export default page

