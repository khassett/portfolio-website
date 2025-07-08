'use client'



import Navigation from "@/components/navigation"


import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <Navigation />
      {/* Main Content */}
              <main className="flex flex-col items-center flex-1 w-full px-4 py-8 sm:py-12 md:py-14 lg:py-16">

        <h1 className="text-center font-bold text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Katya Hassett
        </h1>
        <div className="mt-4 sm:mt-6 md:mt-7 lg:mt-8 w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Row 1: Single image spanning all 6 columns */}
              <Link href="/project/nuts-and-bolts" className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-6">
                <img
                  src="/images/homepage/Nuts and Bolts.svg"
                  alt="Nuts and Bolts"
                  className="w-full object-contain rounded-lg bg-transparent max-h-[600px] cursor-pointer"
                  style={{ height: 'auto' }}
                />
              </Link>
            {/* Row 2: Single image spanning all 6 columns */}
            <img
              src="/images/homepage/RIP.svg"
              alt="RIP"
              className="w-full object-contain rounded-lg bg-transparent col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-6 max-h-[600px] -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
