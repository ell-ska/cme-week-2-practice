import Link from 'next/link'

export const Header = () => {
  return (
    <header className='flex h-16 w-full items-center px-6 py-2 text-2xl font-bold md:px-20'>
      <Link href='/'>reddit</Link>
    </header>
  )
}
