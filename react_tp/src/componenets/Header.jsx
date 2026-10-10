
import React from 'react'

const Header = () => {
  return (
    <header className="py-5">
      <div className="flex items-center gap-5">
        <h1 className="whitespace-nowrap text-lg font-bold text-gray-900">
          MaBoutique
        </h1>

        <div className="flex flex-1 items-center gap-2 rounded-xl">
          <span className="rounded-md bg-emerald-700 px-3 py-1 text-sm font-bold text-white">
            SearchBar
          </span>

          <input
            type="search"
            placeholder="Rechercher..."
            className="min-w-0 flex-1 rounded-md border border-gray-200 px-2 py-1 text-sm outline-none focus:border-emerald-600"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
