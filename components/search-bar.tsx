import { Search } from 'lucide-react'

export const SearchBar = () => {
  return (
    <div className='flex w-full max-w-lg items-center gap-2 rounded-full bg-white px-4 py-2 text-zinc-400'>
      <label htmlFor='search'>
        <Search size={20} />
      </label>
      <input
        id='search'
        type='text'
        placeholder='search...'
        className='text-zinc-800 outline-none'
      />
    </div>
  )
}
