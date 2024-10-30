import axios from 'axios'
import { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton"

export default async function About() {
   
  return <div className="text-red-500 bg-blue-200 flex flex-col justify-center items-center h-screen">About
  <Suspense fallback={<Skeleton className="h-4 w-[200px]" />}>
    <Data />
  </Suspense>
  </div>;
}

async function Data(){
    const res = await axios.get('http://localhost:3000')
    return <div>{res?.data}</div>
}