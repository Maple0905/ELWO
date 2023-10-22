import Layout from '@/components/Layout';
import useDebounce from '@/hooks/useDebounce';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToolList from '@/components/ToolList';
import { AppDispatch, RootState } from '@/store';
import { fetchTools } from '@/features/toolsSlice';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchName = useSelector((state: RootState) => state.tools.searchName);
  const searchTools = useSelector((state: RootState) => state.tools.tools);
  const loading = useSelector((state: RootState) => state.tools.loading);

  const [searchToolName, setSearchToolName] = useState(searchName);
  const debounceValue = useDebounce(searchToolName, 500);

  useEffect(() => {
    if (!(searchTools.length > 0 && searchName === searchToolName) && debounceValue !== '') {
      dispatch(fetchTools(debounceValue));
    }
  }, [debounceValue, dispatch, searchName, searchToolName, searchTools.length]);

  return (
    <Layout>
      <div className="max-w-5xl w-full">
        <img className="w-full" src="/first.png" alt="" />
        <p className="pt-3 pb-8 text-center text-2xl lg:text-4xl">- your smart tool for tools</p>
        <div className="flex">
          <input type="search" id="search-dropdown" className="block px-5 py-2 lg:py-4 w-full text-lg text-gray-900 rounded-l-lg border border-r-0 border-gray-300" placeholder="Find accessories for your tool - enter model designation, article number or EAN code" required value={searchToolName} onChange={(e) => setSearchToolName(e.target.value)} />
          <button type="submit" className="flex px-5 text-lg text-green-900 rounded-r-lg border border-l-0 border-gray-300">
            <svg aria-hidden="true" className="w-12 h-16 lg:w-24 lg:h-24 py-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="sr-only">&nbsp;Search</span>
          </button>
        </div>
        <ToolList searchTools={searchTools} loading={loading} />
      </div>
    </Layout>
  )
}

export default Home;
