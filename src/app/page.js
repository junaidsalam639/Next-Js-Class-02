import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <div className='flex flex-row justify-center items-center w-full bg-green-600 hover:bg-green-800 lg:bg-rose-700 md:bg-amber-400 transition-all py-5'>
      <Link href={'/blog'}>
          <button className='btn bg-indigo-700 px-4 py-2 text-indigo-50 rounded-md mx-3'>Blogs</button>
      </Link>
      <Link href={'/image'}>
          <button className='btn bg-indigo-700 px-4 py-2 text-indigo-50 rounded-md mx-3'>Image</button>
      </Link>
      <Link href={'/product'}>
          <button className='btn bg-indigo-700 px-4 py-2 text-indigo-50 rounded-md mx-3'>Product</button>
      </Link>
    </div>
    </>
  )
}


