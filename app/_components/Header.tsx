import { Button } from '@/components/ui/button'


export default function Header() {
  return (
    <div className='flex p-4 shadow-sm bg-gray-900 text-white justify-between'>
      <div className='flex items-center justify-between'>
        <h1 className="text-lg font-bold">100x forms</h1>
        </div>
        <Button className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'>
            Get started
          </Button>
        </div>
  )
}