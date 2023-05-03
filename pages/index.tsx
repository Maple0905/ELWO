import { IProduct } from '@/components/Product'
import { GetStaticProps } from 'next'
import ProductList from '@/components/ProductList'
import Layout from '@/components/Layout'
import { useState } from 'react'

export default function Home() {

  const [ productName, setProductName ] = useState("");

  return (
    <Layout>
      <div className="max-w-7xl w-full">
        <div className="mx-auto max-w-3xl w-full mb-5">
          <div className="flex">
            <input type="search" id="search-dropdown" className="block px-5 py-4 w-full text-lg text-gray-900 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Find your power tool by model, article number or EAN..." required onChange={(e) => setProductName(e.target.value)}/>
            <button type="submit" className="flex px-5 py-4 text-lg text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              <svg aria-hidden="true" className="w-5 h-5 my-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span className="sr-only">&nbsp;Search</span>
            </button>
          </div>
        </div>
        <div className="px-1 sm:px-5 py-5"><span className="text-lg">Please select your tool : </span></div>
        {
          productName == 'Bosch GSR 12V' ? <ProductList products={products} /> : ''
        }
      </div>
    </Layout>
  )
}

export const products: IProduct[] = [
  {
    id: "1",
    name: "Bosch GSR 12V",
    type: "-15 FC",
    url: "/product.png"
  },
  {
    id: "2",
    name: "Bosch GSR 12V",
    type: "-15",
    url: "/product.png"
  },
  {
    id: "3",
    name: "Bosch GSR 12V",
    type: "-35",
    url: "/product.png"
  },
  {
    id: "4",
    name: "Bosch GSR 12V",
    type: "-35 FC",
    url: "/product.png"
  },
  {
    id: "5",
    name: "Bosch GSR 12V",
    type: "-35 HX",
    url: "/product.png"
  },
  {
    id: "6",
    name: "Bosch GSR 12V",
    type: "-15 FC",
    url: "/product.png"
  },
  {
    id: "7",
    name: "Bosch GSR 12V",
    type: "-15 FC",
    url: "/product.png"
  },
  {
    id: "8",
    name: "Bosch GSR 12V",
    type: "-15 FC",
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
