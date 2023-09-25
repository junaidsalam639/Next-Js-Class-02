import Image from 'next/image'
import Link from 'next/link'

export function generateMetadata(){
  return{
      title : 'Hello I am Junaid!',
      description : 'I am Junaid!'
  }
}
export default function Home() {
  return (
    <>
    <div className='flex flex-row justify-center items-center w-full py-5 bg-indigo-800'>
      <Link href={'/blog'}>
          <button className='btn bg-indigo-700 px-4 py-2 text-indigo-50 rounded-md mx-3 hover:bg-indigo-600'>Blogs</button>
      </Link>
      <Link href={'/image'}>
          <button className='btn bg-indigo-700 px-4 py-2 text-indigo-50 rounded-md mx-3 hover:bg-indigo-600'>Image</button>
      </Link>
      <Link href={'/product'}>
          <button className='btn bg-indigo-700 px-4 py-2 text-indigo-50 rounded-md mx-3 hover:bg-indigo-600'>Product</button>
      </Link>
    </div>
    </>
  )
}


