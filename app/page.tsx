'use client'



import Navigation from "@/components/navigation"


import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <Navigation />
      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 w-full px-4 py-16">

        <h1 className="text-center font-bold text-gray-900 dark:text-white" style={{ fontSize: "72px", lineHeight: 1.1 }}>
          Katya Hassett
        </h1>
        <div className="mt-16 w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Row 1 */}
            <img src="/placeholder.svg" alt="Placeholder" className="w-full aspect-square object-cover rounded-lg bg-gray-100" />
            <img src="/placeholder.svg" alt="Placeholder" className="w-full aspect-square object-cover rounded-lg bg-gray-100" />
            <img src="/placeholder.svg" alt="Placeholder" className="w-full aspect-square object-cover rounded-lg bg-gray-100" />
            <img src="/placeholder.svg" alt="Placeholder" className="w-full aspect-square object-cover rounded-lg bg-gray-100" />
            <img src="/placeholder.svg" alt="Placeholder" className="w-full aspect-square object-cover rounded-lg bg-gray-100" />
            <img src="/placeholder.svg" alt="Placeholder" className="w-full aspect-square object-cover rounded-lg bg-gray-100" />
            {/* Row 2 */}
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
