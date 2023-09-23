import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href={'/blog'}>
        <h1 className='font-bold text-center py-4 text-3xl bg-green-600 hover:bg-green-800 lg:bg-rose-700 md:bg-amber-400 transition-all'>
          <button className='btn bg-indigo-700 px-3 py-2 text-indigo-50 rounded-md'>Blogs</button>
        </h1>
      </Link>
    </>
  )
}


