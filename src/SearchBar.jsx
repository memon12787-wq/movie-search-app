import React from 'react'

function SearchBar({ searchTerm, setSearchTerm, getMovies }) {
  return (
    
      <div className="w-full max-w-6xl bg-gray-800 p-6 rounded-xl shadow-lg text-white">
        <h1 className="text-center font-bold text-2xl mb-4">Movie Search App</h1>
        <div className="flex items-center gap-3 mb-4">
        <label className="text-lg font-medium text-gray-300 whitespace-nowrap">Enter Name</label>
        <input className="flex-1 p-3 mt-2 rounded-md bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Movie Name.." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
</div>

    

  )
}

export default SearchBar