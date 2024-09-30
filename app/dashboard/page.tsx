import { Button } from "@/components/ui/button";


export default function Dashboard() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl flex items-center justify-between">Dashboard
    <Button className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'>+ Create Form</Button>
    </h2>
    </div>
  );
}