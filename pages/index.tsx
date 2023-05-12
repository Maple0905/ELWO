import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {

  const [searchToolName, setSearchToolName] = useState("");
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/tool/?name=${searchToolName}`);
  }

  return (
    <Layout>
      <div className="max-w-5xl w-full">
        <img className="w-full" src="/first.png" alt="" />
        <p className="pt-3 pb-8 text-center text-2xl lg:text-4xl">- your smart tool for tools</p>
        <form className="flex" onSubmit={handleSubmit}>
          <input type="search" id="search-dropdown" className="block px-5 py-2 lg:py-4 w-full text-lg text-gray-900 rounded-l-lg border border-r-0 border-gray-300" placeholder="Find accessories for your tool - enter model designation, article number or EAN code" required value={searchToolName} onChange={(e) => setSearchToolName(e.target.value)} />
          <button type="submit" className="flex px-5 text-lg text-green-900 rounded-r-lg border border-l-0 border-gray-300">
            <svg aria-hidden="true" className="w-12 h-16 lg:w-24 lg:h-24 py-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="sr-only">&nbsp;Search</span>
          </button>
        </form>
      </div>
    </Layout>
  )
}
