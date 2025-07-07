'use client'



import Navigation from "@/components/navigation"


import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <Navigation />
      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 w-full px-4 py-16">

        <h1 className="text-center font-bold text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Katya Hassett
        </h1>
        <div className="mt-16 w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {/* Floating text aligned to column 5, positioned 80% down within the first row */}
            <h1 className="absolute z-10 top-[calc(0.75*min(600px,100%))] lg:left-[calc(4*100%/6+1rem)] md:left-2/3 sm:left-1/2 left-1/4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white m-0">
              Branding
            </h1>
            {/* Row 1: Single image spanning all 6 columns */}
            <img
              src="/images/homepage/Nuts and Bolts.svg"
              alt="Nuts and Bolts"
              className="w-full object-contain rounded-lg bg-white col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-6 max-h-[600px]"
              style={{ height: 'auto' }}
            />
            {/* Row 2: 6 images, 1 per column */}
            <img src="/placeholder.svg" alt="Placeholder" className="w-full aspect-square object-cover rounded-lg bg-gray-100" />
            <img src="/placeholder.svg" alt="Placeholder" className="w-full aspect-square object-cover rounded-lg bg-gray-100" />
            <img src="/placeholder.svg" alt="Placeholder" className="w-full aspect-square object-cover rounded-lg bg-gray-100" />
            <img src="/placeholder.svg" alt="Placeholder" className="w-full aspect-square object-cover rounded-lg bg-gray-100" />
            <img src="/placeholder.svg" alt="Placeholder" className="w-full aspect-square object-cover rounded-lg bg-gray-100" />
            <img src="/placeholder.svg" alt="Placeholder" className="w-full aspect-square object-cover rounded-lg bg-gray-100" />
          </div>
        </div>
      </main>
    </div>
  )
}
