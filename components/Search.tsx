export default function Search() {
  return (
    <form>
      <div className="flex">
        <input type="search" id="search-dropdown" className="block px-5 py-4 w-full text-lg text-gray-900 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Find your power tool by model, article number or EAN..." required />
        <button type="submit" className="flex px-5 py-4 text-lg text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          <svg aria-hidden="true" className="w-5 h-5 my-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span className="sr-only">&nbsp;Search</span>
        </button>
      </div>
    </form>
  )
}
