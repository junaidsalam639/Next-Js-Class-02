import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='flex flex-row justify-center items-center w-full bg-green-600 hover:bg-green-800 lg:bg-rose-700 md:bg-amber-400 transition-all'>
      <Link href={'/blog'}>
        <h1 className='font-bold text-center py-4 text-3xl'>
          <button className='btn bg-indigo-700 px-3 py-2 text-indigo-50 rounded-md mx-3 border-b-4 border-t-4'>Blogs</button>
        </h1>
      </Link>
      <Link href={'/image'}>
        <h1 className='font-bold text-center py-4 text-3xl'>
          <button className='btn bg-indigo-700 px-3 py-2 text-indigo-50 rounded-md mx-3 border-b-4 border-t-4'>Image</button>
        </h1>
      </Link>
    </div>
    </>
  )
}


