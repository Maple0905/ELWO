import Layout from '@/components/Layout'
import { useState } from 'react'
import { GetStaticProps } from 'next';
import { IProduct } from '@/components/Product';
import ProductList from '@/components/ProductList';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  const [searchProductName, setSearchProductName] = useState("");
  const [searchProducts, setProducts] = useState<IProduct[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchProductName.toLowerCase()));
    setProducts(filteredProducts);
  }

  return (
    <Layout>
      <div className="max-w-5xl w-full">
          {
            searchProducts.length == 0 ? (
              <form className="flex" onSubmit={handleSubmit}>
                <input type="search" id="search-dropdown" className="block px-5 py-4 w-full text-lg text-gray-900 rounded-l-lg border border-r-0 border-gray-300" placeholder="Find your power tool by model, article number or EAN..." required value={searchProductName} onChange={(e) => setSearchProductName(e.target.value)} />
                <button type="submit" className="flex px-5 text-lg text-green-900 rounded-r-lg border border-l-0 border-gray-300">
                  <svg aria-hidden="true" className="w-24 h-24 py-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span className="sr-only">&nbsp;Search</span>
                </button>
              </form>
            ) : (
              <div>
              <Link href={`/`}>
                <div className="flex items-center mb-5">
                  <Image src="/prev.png" alt="Prev Icon" width={20} height={20} />
                  <p className="ml-2">Back</p>
                </div>
              </Link>
                <input className="block px-5 py-5 w-full text-lg text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-[url('/elwotools-green-sm.png')] bg-no-repeat bg-center bg-contain" value={searchProductName} disabled />
                <p className="py-5 px-5">Please select your tool</p>
                <ProductList products={searchProducts} />
              </div>
            )
          }
      </div>
    </Layout>
  )
}

export const products: IProduct[] = [
  {
    id: "1",
    name: "Bosch GSR 12V",
    type: "15CV 2426",
    url: "/product.png"
  },
  {
    id: "2",
    name: "Bosch GSR 12V",
    type: "15CV 2426",
    url: "/product.png"
  },
  {
    id: "3",
    name: "Bosch GSR 12V",
    type: "15CV 2426",
    url: "/product.png"
  },
  {
    id: "4",
    name: "Bosch GSR 12V",
    type: "15CV 2426",
    url: "/product.png"
  },
  {
    id: "5",
    name: "Bosch GSR 12V",
    type: "15CV 2426",
    url: "/product.png"
  },
  {
    id: "6",
    name: "Bosch GSR 12V",
    type: "15CV 2426",
    url: "/product.png"
  },
  {
    id: "7",
    name: "Bosch GSR 12V",
    type: "15CV 2426",
    url: "/product.png"
  },
  {
    id: "8",
    name: "Bosch GSR 12V",
    type: "15CV 2426",
    url: "/product.png"
  },
]

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products
    }
  }
}
